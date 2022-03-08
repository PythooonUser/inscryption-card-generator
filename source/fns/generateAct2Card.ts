export { generateAct2Card, generateAct2BackCard, generateAct2NpcCard, Npc }

import { Resource } from '../resource'
import IM from '../im'
import { Card } from '../card'
import { execSync } from 'child_process'
import { ImageMagickCommandBuilder } from '../im/commandBuilder'
import { getGemCostResourceId } from './helpers'

type Npc = 'angler' | 'bluewizard' | 'briar' | 'dredger' | 'dummy' | 'greenwizard' | 'inspector' | 'orangewizard' | 'royal' | 'sawyer' | 'melter' | 'trapper' | 'prospector'

const originalCardHeight = 56 // px, size: 42x56
const fullsizeCardHeight = 1050 // px
const scale = fullsizeCardHeight / originalCardHeight

function generateAct2Card(card: Card & { npc?: Npc }, res: Resource, options: { border?: boolean, scanlines?: boolean } = {}): Buffer {
  const im = IM()

  // set up defaults
  im.font(res.get('font', 'default'))
    .pointsize(16)
    .gravity('Center')
    .background('#020a11')
    .background('None') // debug
    .filter('Box')

  const cardType = ((card: Card): 'common' | 'rare' | 'terrain' | 'terrain_rare' => {
    if (card.meta.terrain) {
      if (card.meta.rare) {
        return 'terrain_rare'
      }
      return 'terrain'
    }

    if (card.meta.rare) {
      return 'rare'
    }

    return 'common'
  })(card)

  // load card
  im.resource(res.get('card', cardType))

  // portrait
  if (card.portrait?.type === 'creature') {
    im.gravity('NorthWest')
      .resource(res.get('portrait', card.portrait.id))
      .geometry(1, 1)
      .composite()
  }

  // staticon or power
  if (card.statIcon) {
    im.gravity('SouthWest').resource(res.get('staticon', card.statIcon)).geometry(2, 2).composite()
  } else {
    im.gravity('SouthWest').command(`-draw 'text 2,0 "${Number(card.power)}"'`)
  }

  if (card.cost) {
    im.gravity('NorthEast')

    const costType = card.cost.type
    if (costType === 'blood' || costType === 'bone' || costType === 'energy') {
      const { type, amount } = card.cost
      const costPath = res.get('cost', `${type}_${amount}`)
      im.resource(costPath).composite()
    }

    if (costType === 'gem') {
      const gemCostResourceId = getGemCostResourceId(card.cost.gems)
      if (gemCostResourceId !== undefined) {
        im.resource(res.get('cost', gemCostResourceId)).composite()
      }
    }
  }

  // health
  im.gravity('SouthEast').command(`-draw 'text 0,0 "${card.health}"'`)

  // sigils
  if (card.sigils.length === 1) {

    const sigil = card.sigils[0]
    let sigilYOffset = 0

    if (sigil.startsWith('conduit')) {
      im.resource(res.get('misc', 'conduit')).gravity('North').geometry(1, 32).composite()
    } else if (sigil.startsWith('activated')) {
      sigilYOffset = 2
      im.resource(res.get('misc', 'ability_button')).gravity('NorthWest').geometry(8, 31).composite()
    }

    if (sigil !== 'conduitnull') {
      im.resource(res.get('sigil', sigil)).gravity('North').geometry(0, 31 + sigilYOffset).composite()
    }
  } else if (card.sigils.length >= 2) {
    im.gravity('NorthWest')
    im.resource(res.get('sigil', card.sigils[0])).geometry(4, 31).composite()
    im.resource(res.get('sigil', card.sigils[1])).geometry(22, 31).composite()
  }

  // fused
  if (card.flags.fused) {
    im.gravity('Center').resource(res.get('misc', 'stitches')).composite()
  }

  // black outline onto card
  im.command('-fill none -stroke rgb\\(2,10,17\\) -strokewidth 0 -draw "rectangle 0,0 41,55"')

  // npc
  if (card.npc) {
    im.resource(res.get('npc', card.npc)).composite()
  }

  // increase size for all cards, to account for frame
  im.gravity('Center').extent(44, 58)

  // frame
  if (card.meta.rare) {
    im.gravity('NorthWest').resource(res.get('frame', card.temple)).geometry(0, 0).composite()
  }

  // border
  if (options.border) {
    extendedBorder(im)
  }

  // scanlines
  if (options.scanlines) {
    scanlines(im)
  }

  // resize
  im.resizeExt(g => g.scale(scale * 100))

  return execSync(im.build('convert', '-'))
}

function extendedBorder(im: ImageMagickCommandBuilder): ImageMagickCommandBuilder {
  const extraSize = 12
  im.gravity('Center').background('#d7e2a3').extent(44 + extraSize, 58 + extraSize)

  return im
}

function scanlines(im: ImageMagickCommandBuilder): ImageMagickCommandBuilder {
  const tileableScanline = IM()
    .command('-stroke black')
    .size(1, 2)
    .command('xc:transparent')
    .command('-draw "rectangle 0,0 0,0"')

  const scanlines = IM()
    .parens(tileableScanline)
    .command('-write mpr:tile +delete -size 100x100 tile:mpr:tile')
    .command('-channel A -evaluate multiply 0.1 +channel')

  im.parens(scanlines)
    .compose('Atop')
    .composite()

  return im
}

function generateAct2BackCard(type: 'common' | 'submerged', res: Resource, options: { border?: boolean, scanlines?: boolean } = {}) {
  // npc
  const im = IM(res.get('cardback', type))
    .gravity('Center')
    .background('None')
    .filter('Box')

  // increase size to match regular cards
  im.extent(44, 58)

  // border
  if (options.border) {
    extendedBorder(im)
  }

  // scanlines
  if (options.scanlines) {
    scanlines(im)
  }

  // resize
  im.resizeExt(g => g.scale(scale * 100)) // 1050 pixels @ 300dpi = 3.5 inches

  return execSync(im.build('convert', '-'))
}

function generateAct2NpcCard(npc: Npc, res: Resource, options: { border?: boolean, scanlines?: boolean } = {}) {
  // npc
  const im = IM(res.get('npc', npc))
    .gravity('Center')
    .background('None')
    .filter('Box')

  // increase size to match regular cards
  im.extent(44, 58)

  // border
  if (options.border) {
    extendedBorder(im)
  }

  // scanlines
  if (options.scanlines) {
    scanlines(im)
  }

  // resize
  im.resizeExt(g => g.scale(scale * 100)) // 1050 pixels @ 300dpi = 3.5 inches

  return execSync(im.build('convert', '-'))
}
