import { Static, Record, Array, Literal, Union, String, Number, Boolean, InstanceOf } from 'runtypes'

export { Card, Sigil }

type Sigil = Static<typeof Sigil>
type Card = Static<typeof Card>

const Sigil = Union(
  Literal('deathtouch'),
  Literal('buffneighbours'),
  Literal('randomability'),
  Literal('ant'),
  Literal('drawant'),
  Literal('flying'),
  Literal('createdams'),
  Literal('beesonhit'),
  Literal('guarddog'),
  Literal('reach'),
  Literal('whackamole'),
  Literal('steeltrap'),
  Literal('cagedwolf'),
  Literal('sacrificial'),
  Literal('cat'),
  Literal('drawcopyondeath'),
  Literal('createbells'),
  Literal('daus'),
  Literal('strafe'),
  Literal('evolve'),
  Literal('drawcopy'),
  Literal('tripleblood'),
  Literal('submerge'),
  Literal('gainbattery'),
  Literal('jerseydevil'),
  Literal('submergesquid'),
  Literal('lammergeier'),
  Literal('corpseeater'),
  Literal('tutor'),
  Literal('splitstrike'),
  Literal('tristrike'),
  Literal('strafepush'),
  Literal('packmule'),
  Literal('ouroboros'),
  Literal('randomconsumable'),
  Literal('sharp'),
  Literal('quadruplebones'),
  Literal('tailonhit'),
  Literal('debuffenemy'),
  Literal('bellproximity'),
  Literal('cardsinhand'),
  Literal('mirror'),
  Literal('squirrelstrafe'),
  Literal('drawrabbits'),
  Literal('allstrike'),
  Literal('squirrelorbit'),
  Literal('giantcard'),
  Literal('giantmoon'),
  Literal('randomcard'),
  Literal('preventattack'),
  Literal('talkingcardchooser'),
  Literal('trapspawner'),
  Literal('conduitnull'),
  Literal('icecube'),
  Literal('bountyhunter'),
  Literal('brittle'),
  Literal('buffenemy'),
  Literal('sentry'),
  Literal('sniper'),
  Literal('drawrandomcardondeath'),
  Literal('movebeside'),
  Literal('conduitbuffattack'),
  Literal('explodeondeath'),
  Literal('bombspawner'),
  Literal('drawvesselonhit'),
  Literal('deletefile'),
  Literal('cellbuffself'),
  Literal('celldrawrandomcardondeath'),
  Literal('celltristrike'),
  Literal('gaingemblue'),
  Literal('gaingemgreen'),
  Literal('gaingemorange'),
  Literal('conduitenergy'),
  Literal('activatedrandompowerenergy'),
  Literal('conduitfactory'),
  Literal('explodegems'),
  Literal('conduitspawngems'),
  Literal('shieldgems'),
  Literal('conduitheal'),
  Literal('latchexplodeondeath'),
  Literal('latchbrittle'),
  Literal('latchdeathshield'),
  Literal('filesizedamage'),
  Literal('activateddealdamage'),
  Literal('deathshield'),
  Literal('swapstats'),
  Literal('gaingemtriple'),
  Literal('transformer'),
  Literal('activatedenergytobones'),
  Literal('activatedstatsup'),
  Literal('brokencoinleft'),
  Literal('brokencoinright'),
  Literal('drawnewhand'),
  Literal('skeletonstrafe'),
  Literal('bonedigger'),
  Literal('doubledeath'),
  Literal('gemdependant'),
  Literal('activateddrawskeleton'),
  Literal('gemsdraw'),
  Literal('greenmage'),
  Literal('activatedsacrificedrawcards'),
  Literal('loot'),
  Literal('buffgems'),
  Literal('droprubyondeath'),
  Literal('activatedstatsupenergy')
)

const CardType = Union(Literal('common'), Literal('rare'), Literal('terrain'))
const Tribe = Union(Literal('reptile'), Literal('canine'), Literal('bird'), Literal('hooved'), Literal('insect'))
const StatIcon = Union(Literal('ants'), Literal('bones'), Literal('bell'), Literal('cardsinhand'), Literal('mirror'), Literal('greengems'))
const Decal = Union(Literal('snelk'), Literal('child'), Literal('leshy'), Literal('smoke'), Literal('smoke_abilityhole'), Literal('stitches'), Literal('blood'), Literal('fungus'), Literal('paint'))
const Temple = Union(Literal('nature'), Literal('tech'), Literal('undead'), Literal('wizard'))
const CreatureId = Union(
  Literal('adder'),
  Literal('alpha'),
  Literal('amalgam'),
  Literal('amoeba'),
  Literal('ant'),
  Literal('antqueen'),
  Literal('bat'),
  Literal('beaver'),
  Literal('bee'),
  Literal('beehive'),
  Literal('bloodhound'),
  Literal('bullfrog'),
  Literal('burrowingtrap'),
  Literal('cagedwolf'),
  Literal('cat'),
  Literal('catundead'),
  Literal('cockroach'),
  Literal('coyote'),
  Literal('daus'),
  Literal('defaulttail'),
  Literal('elk'),
  Literal('elkcub'),
  Literal('fieldmouse'),
  Literal('fieldmouse_fused'),
  Literal('geck'),
  Literal('goat'),
  Literal('grizzly'),
  Literal('hawk'),
  Literal('hrokkall'),
  Literal('jerseydevil'),
  Literal('kingfisher'),
  Literal('kraken'),
  Literal('lammergeier'),
  Literal('maggots'),
  Literal('magpie'),
  Literal('mantis'),
  Literal('mantisgod'),
  Literal('mole'),
  Literal('moleman'),
  Literal('moose'),
  Literal('mothman_stage1'),
  Literal('mothman_stage2'),
  Literal('mothman_stage3'),
  Literal('mule'),
  Literal('opossum'),
  Literal('otter'),
  Literal('ouroboros'),
  Literal('packrat'),
  Literal('porcupine'),
  Literal('pronghorn'),
  Literal('rabbit'),
  Literal('ratking'),
  Literal('rattler'),
  Literal('raven'),
  Literal('ravenegg'),
  Literal('salmon'),
  Literal('shark'),
  Literal('skink'),
  Literal('skinktail'),
  Literal('skunk'),
  Literal('snapper'),
  Literal('snelk'),
  Literal('sparrow'),
  Literal('squidbell'),
  Literal('squidcards'),
  Literal('squidmirror'),
  Literal('squirrel'),
  Literal('squirrelball'),
  Literal('stoat'),
  Literal('tail_bird'),
  Literal('tail_furry'),
  Literal('tail_insect'),
  Literal('urayuli'),
  Literal('vulture'),
  Literal('warren'),
  Literal('wolf'),
  Literal('wolfcub'),
  Literal('!deathcard_base'),
  Literal('!deathcard_leshy'),
  Literal('!deathcard_victory'),
  Literal('!giantcard_moon'),
  Literal('!static!glitch'),
  Literal('baitbucket'),
  Literal('cardmergestones'),
  Literal('dam'),
  Literal('dausbell'),
  Literal('goldnugget'),
  Literal('peltgolden'),
  Literal('pelthare'),
  Literal('peltwolf'),
  Literal('ringworm'),
  Literal('smoke'),
  Literal('smoke_improved'),
  Literal('smoke_nobones'),
  Literal('starvation'),
  Literal('stinkbug_talking'),
  Literal('stoat_talking'),
  Literal('trap'),
  Literal('trapfrog'),
  Literal('wolf_talking'),
  Literal('!corrupted'),
  Literal('!deathcard_pixel_base'),
  Literal('!inspector'),
  Literal('!melter'),
  Literal('!bountyhunter_base'),
  Literal('!buildacard_base'),
  Literal('!friendcard_base'),
  Literal('!myco_old_data'),
  Literal('!mycocard_base'),
  Literal('angler_fish_bad'),
  Literal('angler_fish_good'),
  Literal('angler_fish_more'),
  Literal('angler_talking'),
  Literal('bluemage_talking'),
  Literal('dummy_5-5'),
  Literal('mole_telegrapher'),
  Literal('mummy_telegrapher'),
  Literal('ouroboros_part3'),
  Literal('abovecurve'),
  Literal('alarmbot'),
  Literal('amoebot'),
  Literal('attackconduit'),
  Literal('automaton'),
  Literal('batterybot'),
  Literal('bolthound'),
  Literal('bombbot'),
  Literal('bombmaiden'),
  Literal('bustedprinter'),
  Literal('captivefile'),
  Literal('cellbuff'),
  Literal('cellgift'),
  Literal('celltri'),
  Literal('closerbot'),
  Literal('cxformeradder'),
  Literal('cxformerelk'),
  Literal('cxformerraven'),
  Literal('cxformerwolf'),
  Literal('emptyvessel'),
  Literal('emptyvessel_bluegem'),
  Literal('emptyvessel_greengem'),
  Literal('emptyvessel_orangegem'),
  Literal('energyconduit'),
  Literal('energyroller'),
  Literal('factoryconduit'),
  Literal('gemexploder'),
  Literal('gemripper'),
  Literal('gemsconduit'),
  Literal('gemshielder'),
  Literal('giftbot'),
  Literal('healerconduit'),
  Literal('insectodrone'),
  Literal('latcherbomb'),
  Literal('latcherbrittle'),
  Literal('latchershield'),
  Literal('leapbot'),
  Literal('librarian'),
  Literal('meatbot'),
  Literal('minecart'),
  Literal('nullconduit'),
  Literal('plasmagunner'),
  Literal('robomice'),
  Literal('roboskeleton'),
  Literal('sentinelblue'),
  Literal('sentinelgreen'),
  Literal('sentinelorange'),
  Literal('sentrybot'),
  Literal('sentrybot_fused'),
  Literal('shieldbot'),
  Literal('shutterbug'),
  Literal('sniper'),
  Literal('steambot'),
  Literal('swapbot'),
  Literal('techmoxtriple'),
  Literal('thickbot'),
  Literal('xformerbatbeast'),
  Literal('xformerbatbot'),
  Literal('xformergrizzlybeast'),
  Literal('xformergrizzlybot'),
  Literal('xformerporcupinebeast'),
  Literal('xformerporcupinebot'),
  Literal('annoytower'),
  Literal('boulder'),
  Literal('bridgerailing'),
  Literal('brokenbot'),
  Literal('conduittower'),
  Literal('deadtree'),
  Literal('frozenopossum'),
  Literal('stump'),
  Literal('tombstone'),
  Literal('tree'),
  Literal('tree_hologram'),
  Literal('tree_hologram_snowcovered'),
  Literal('tree_snowcovered'),
  Literal('banshee'),
  Literal('bonehound'),
  Literal('bonelordhorn'),
  Literal('bonepile'),
  Literal('coinleft'),
  Literal('coinright'),
  Literal('deadhand'),
  Literal('deadpets'),
  Literal('draugr'),
  Literal('drownedsoul'),
  Literal('family'),
  Literal('franknstein'),
  Literal('ghostship'),
  Literal('gravedigger'),
  Literal('gravedigger_fused'),
  Literal('headlesshorseman'),
  Literal('mummy'),
  Literal('necromancer'),
  Literal('revenant'),
  Literal('sarcophagus'),
  Literal('skeleton'),
  Literal('skeletonmage'),
  Literal('tombrobber'),
  Literal('zombie'),
  Literal('bluemage'),
  Literal('bluemage_fused'),
  Literal('flyingmage'),
  Literal('forcemage'),
  Literal('gemfiend'),
  Literal('greenmage'),
  Literal('juniorsage'),
  Literal('mageknight'),
  Literal('marrowmage'),
  Literal('masterbleene'),
  Literal('mastergoranj'),
  Literal('masterorlu'),
  Literal('moxdualbg'),
  Literal('moxdualgo'),
  Literal('moxdualob'),
  Literal('moxemerald'),
  Literal('moxruby'),
  Literal('moxsapphire'),
  Literal('moxtriple'),
  Literal('musclemage'),
  Literal('orangemage'),
  Literal('practicemage'),
  Literal('practicemagesmall'),
  Literal('pupil'),
  Literal('rubygolem'),
  Literal('stimmage'),
)

const CreaturePortrait = Record({
  type: Literal('creature'),
  id: CreatureId
})
const DeathcardPortrait = Record({
  type: Literal('deathcard'),
  data: Record({
    headType: Union(Literal('chief'), Literal('enchantress'), Literal('gravedigger'), Literal('prospector'), Literal('robot'), Literal('settlerman'), Literal('settlerwoman'), Literal('wildling')),
    mouthIndex: Number.withConstraint(n => [0, 1, 2, 3, 4, 5].includes(n)),
    eyesIndex: Number.withConstraint(n => [0, 1, 2, 3, 4, 5].includes(n)),
    lostEye: Boolean,
  })
})
const CustomPortrait = Record({
  type: Literal('custom'),
  data: InstanceOf(Buffer),
})
const ResourcePortrait = Record({
  type: Literal('resource'),
  resourceId: String,
})
const Portrait = Union(CreaturePortrait, DeathcardPortrait, CustomPortrait, ResourcePortrait)

const BloodCost = Record({
  type: Literal('blood'),
  amount: Number.withConstraint(n => [1, 2, 3, 4].includes(n)),
})
const BoneCost = Record({
  type: Literal('bone'),
  amount: Number.withConstraint(n => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(n)),
})
const EnergyCost = Record({
  type: Literal('energy'),
  amount: Number.withConstraint(n => [0, 1, 2, 3, 4, 5, 6].includes(n)),
})
const GemCost = Record({
  type: Literal('gem'),
  gems: Array(Union(Literal('blue'), Literal('green'), Literal('orange')))
})
const Cost = Union(BloodCost, BoneCost, EnergyCost, GemCost)

const Card = Record({
  gameId: String.optional(),
  name: String,
  type: CardType,
  portrait: Portrait.optional(),
  cost: Cost.optional(),
  power: Number,
  health: Number,
  sigils: Array(Sigil),
  tribes: Array(Tribe),
  statIcon: StatIcon.optional(),
  decals: Array(Decal),
  temple: Temple,
  flags: Record({
    golden: Boolean,
    terrain: Boolean,
    squid: Boolean,
    enhanced: Boolean,
    fused: Boolean,
    hidePower: Boolean,
    hideHealth: Boolean,
  }),
  meta: Record({
    rare: Boolean,
    terrain: Boolean,
  })
})
