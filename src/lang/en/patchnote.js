export default {
  releasedOn: 'released on',
  changeCount: 'Also changed {0} things that are not unlocked yet',
  versionType: {
    major: 'New major version',
    minor: 'New version',
    patch: 'Patch'
  },
  type: {
    bugfix: 'Bugfix',
    balance: 'Balancing',
    qol: 'Quality of life',
    clarity: 'Clarity',
    info: 'Info',
    context: 'Context',
    new: 'New',
    remove: 'Removed',
    change: 'Change',
    accessibility: 'Accessibility',
    appearance: 'Appearance'
  },
  text: {
    addedFeature: 'Added the feature',
    addedUpgrade: 'Added {0} new upgrade(s)',
    addedPrestigeUpgrade: 'Added {0} new prestige upgrade(s)',
    addedBuilding: 'Added {0} new building(s)',
    addedAchievement: 'Added {0} achievement(s)',
    secretAchievement: 'Added {0} secret achievement(s)',
    addedHordeItem: 'Added {0} new equipment items',
    addedHordeSigil: 'Added {0} new sigils',
    addedHordeHeirloom: 'Added {0} new heirlooms',

    // v1.0.1
    0: 'Slighlty increased the amount of scrap gained at the early mining depths',
    1: 'Shows a hint for new players about not getting scrap when digging down',
    2: 'The building queue now shows progress of the currently constructed building',
    3: 'Buildings now stay in the list until the building is finished when reaching the maximum amount',
    4: 'Using the answer button now keeps the textbox focused',
    5: 'Explained the process of using cards on prestige',
    6: 'Upgrade lists now remember the last page you were on',
    7: 'Shows a hint for new players that reach a high zone without discovering monster parts',
    8: 'Added tooltips explaining depth dweller values',
    9: 'Achievements with a relic reward now state in the tooltip that the relic is given when completing the next achievement level',
    10: 'The school feature was never intended to feel like something you are forced to do for its rewards, but rather as an option to spend spare time for a little boost. I am making a few changes to the reward systems of this feature to make school more optional, especially in the early game where time skipping is much more valuable.',
    11: 'Golden dust gain reduced if your global level is below 250 (linear)',
    12: 'The "Know-it-all" achievement is now secret, which means it does not contribute to gem gain or "Overachiever"',
    13: 'Using the X button in literature no longer causes an error',

    // v1.1.0
    14: 'Last patch I already introduced some band-aid solutions to address the school system. While they did help a little in making the game less about grinding school all the time, they did not fix the underlying issues. This rework is aimed at reducing the amount of time pressure some players felt, and removing the grind aspects while still keeping school as an occasional option to get golden dust. After all, Gooboo is supposed to be a long-term idle game, not an active incremental. This was also a great opportunity to clean up the intransparent system of elo and grades.',
    15: 'Elo system removed',
    16: 'Grades no longer decay over time',
    17: 'You can now switch between all grades you already reached',
    18: 'Studying no longer gives golden dust as reward',
    19: 'Base book gain per subject',
    20: 'Grades no longer increase book gain',
    21: 'You can now buy students for rubies to gather more books for you',
    22: 'Studying time',
    23: 'You now only get grade progress when studying on your best grade, but can also lose progress for bad performance',
    24: 'Practice mode: here you can try the subject without time pressure and leave at any time, but get no rewards',
    25: 'Exam mode: You have 1m 15s to reach the best score you can. At the end, you get golden dust based on your performance and chosen grade',
    26: 'Exam passes, they are needed to take exams. Get more daily or by raising your global level, exceeding the capacity converts it to golden dust',
    27: 'Reduced the amount of grades (removed -- and ++, as well as F- and F+), and adjusted difficulty to be about 2/3 of a full grade lower (if you had a C-- before you can now expect to reach C+)',
    28: 'Math optimal score requirement',
    29: 'Pressing answer in the math minigame with an empty text field no longer counts as a mistake',
    30: 'Literature optimal score requirement',
    31: 'Literature now picks from a list of words instead of random letters, and makes you type sentences instead of words. Numbers, capitalization and special characters still exist for higher grades though!',
    32: '"Still learning" penalty amount',
    33: '"Still learning" penalty removed at global level',
    34: 'Your new grade is based on your old grade and elo, whichever was higher. Exam passes gained from previous global levels are awarded retroactively',
    35: 'Perfect exam results (2x optimal score) end school early and get you to the next grade immediately',
    36: 'Having extra time at the end of the history minigame does not yield bonus points, but now ends the lesson early',
    37: 'Added an extra hint to the cards feature for players who collected cards, but didn\'t prestige yet',
    38: 'Expanded the description for the depth dweller with a section about its speed',
    39: 'When out of exam passes, you can buy one for 35 sapphires',
    40: 'Added exam passes to the reward pool of some small events',
    41: 'Centered settings on the new game screen for smaller - medium display sizes',

    // v1.1.1
    42: 'Bonus exam golden dust reward per grade',
    43: 'Getting a perfect exam now only unlocks the next grade if you did it on your best grade',
    44: 'Exam pass capacity removed',

    // v1.1.2
    45: 'Changed the way savefile exports are handled. This should fix the exporting issues some players had',
    46: 'Added a notification if autosaving fails',
    47: 'The note hint can now be seen on the features icon',
    48: 'Added a notification when crops are ready',
    49: 'Card packs now show the feature they belong to',
    50: 'Quest tasks now show the feature they belong to',
    51: 'Active effects now show their remaining cooldown in the tooltip',
    52: 'Active effects now cool down at a reduced rate when their items are not equipped',
    53: 'Bosses now state their resistance against biological damage in the damage types tooltip',
    54: 'Added equipment loadouts',
    55: 'Reduced soul gain on prestige to 10% - 100% if you spent less than 8 hours on the current run',
    56: 'Changed the depth dweller formula and speed increasing upgrades to be a bit more consistent at all stages',
    57: 'Maximum dweller depth can now be reached',
    58: 'The depth dweller tooltip now shows how much time is needed to reach certain depths',
    59: 'Prestige reward increase interval',
    60: 'Fixed some rounding errors when values were at exactly 0',
    61: 'The literature minigame now ignores the first space character',
    62: 'Literature now awards partial scores for sentences, depending on how many characters you typed correctly',
    63: 'Slightly reduced the word count per sentence for literature',
    64: 'Exams now have a warning in their tooltip if your hourglass is (almost) full',
    65: 'You can now see the time left until you get your daily exam pass',
    66: 'Mining autoprogress is now explained in the settings',
    67: 'Added an option to see relative upgrade values',
    68: 'Total building and housing count can now be seen in the building list. Players with existing savefiles may need to finish a building to see the correct amount',
    69: 'Added the option to convert exam passes to golden dust',
    70: 'Explained premium crafting slots on the gem upgrade',
    71: 'The savefile name now includes the current day',
    72: 'Nostalgia decay per defeated boss',
    73: 'Reduced heirloom chance from most external sources',
    74: 'Minimum enemy defeats required to fight boss',
    75: 'Ritual tome soul chance per level',
    76: 'Base soul chance',
    77: 'Added some cheap early-game levels for a few gem upgrades',
    78: 'Added a button to unequip all items',
    79: 'Changed the wording of some equipment effects to be more accurate',
    80: 'No longer get a guaranteed 35 soul drop on zone 20',
    81: 'Heirloom drops are no longer guaranteed every 10 zones',
    82: 'Nostalgia effect is no longer capped at +50%',
    83: 'Changed the description of the "Deeprun" achievement to prevent confusion between meters and minutes',
    84: 'Soul increase per zone',
    85: 'Base soul amount',
    86: 'Base heirloom chance',
    87: 'Heirloom chance modifier per zone',
    88: 'Turning off note notifications now clears existing hints',
    89: 'Over the last few days, it became clear that quick 15-minute-prestiges were by far the best strategy to get souls in the horde. Runs that took a day could barely get twice the amount of souls, and existing elements to combat this are clearly not working. This is against the idle-focused philosophy of Gooboo, and while active gameplay should always be the most efficient option, it should not render other options of progress meaningless. These changes aim to reduce the gap between players with very fast prestiges and others who prestige one or two times a day.',

    // v1.2.0
    90: 'Fixed a rounding issue with corruption when it is at exactly 0',
    91: 'Fixed a bug where you could use loadouts to equip items you did not find yet',
    92: 'Fixed some treasure bonuses not applying',
    93: 'Made the global level description more clear',
    94: 'Fixed some equipment effects not working while dead',
    95: 'Fixed a bug where upgrading or deleting a treasure sometimes shows an error',
    96: 'Adjusted the prices of some endgame buildings for a more seamless transition with the new content',
    97: 'Fixed a bug in the depth dweller preview showing 0s to reach next depth',
    98: 'Added prestige currency gain to depth dweller preview',
    99: 'Gold coins now show their gain from food conversion',
    100: 'Upgrade descriptions now hide when the first level is bought',
    101: 'Added upgrade descriptions for most upgrades that unlock new game mechanics',
    102: 'Added a gold chance breakdown for crops',
    103: 'History dates now have text shadows for better readability',
    104: 'Reworded some tooltips and added a few new ones to the night hunt event',
    105: 'Slightly changed the UI',
    106: 'Added tooltips for buying treasure and fragments',
    107: 'Farm fertilizers now show their effect when shown as prize',
    108: 'The essence gain multiplier from your global level is now shown in the essence tooltip',

    // v1.3.0
    109: 'General quests now have text shadows for better readability',
    110: 'Equipment can now be upgraded in collapsed view',
    111: 'Inactive sigils are now shown',
    112: 'Reduced the amount of moving UI elements when fighting different enemies',
    113: 'Enemies now take time to respawn',
    114: 'Monster parts are now gained when enemies cannot spawn',
    115: 'Added minibosses with all of the loot the old bosses had',
    116: 'Bosses no longer drop loot, they now increase loot gain from minibosses',
    117: 'Soul chance removed, they now always drop',
    118: 'Achievements now only count damage from basic attacks',
    119: 'Fixed a bug with enemies when their stats reach Infinity',
    120: 'Soul gain on prestige is no longer reduced for the first 8 hours',
    121: 'Empty loadouts can now be set to your currently equipped items',
    122: 'Some sigils give active effects to enemies',
    123: 'Player active effects are split into combat and utility actives',
    124: 'Combat actives replace the next basic attack',
    125: 'Utility actives can store multiple charges',
    126: 'Added the silence status effect, it prevents the use of combat actives',
    127: 'Stun resist is now shown like other stats',
    128: 'Boss stun resist',
    129: 'You now get -2 boss requirement for each boss you beat at zone 20 or higher',
    130: 'Boss requirement now has a maximum value of 50',
    131: 'Respawn time now has a maximum value of 5 minutes',
    132: 'Increased most heirloom effects',
    133: 'Added text shadows to a few horde UI elements for better readability',
    134: 'Sigils now show the zone they start appearing',
    135: 'Added towers',
    136: 'Nostalgia now increases the heirloom chance on your first few tries instead of increasing heirloom chance over time',
    137: 'Slightly changed price tag visuals',
    138: 'Corrupted souls now have a capacity that can be increased by defeating bosses',
    139: 'Changed most upgrades and removed / added a few',
    140: 'Added tower keys to the reward pool of some small events',
    141: 'Slightly changed the wording of premium crafting slots to make them more accurate',
    142: 'Base bones',
    143: 'Bone increase per zone',
    144: 'Clearing a zone no longer increases bone capacity',
    145: 'Bosses no longer drop regular enemy loot',
    146: 'Enemies now get +1 stun resist on each rampage',
    147: 'Rampaging enemies can no longer have their attack reduced',
    148: 'Fixed a bug where the "Knock on wood" achievement would count the sum instead of taking the highest value',
    149: 'Changed some card effects to match the changed horde environment',
    150: 'The cryolab now ticks every second instead of every minute',
    151: 'Crop experience now states it gives less for certain crops',
    152: 'You can now click on discovered potion recipes to set them as your current ritual',
    153: 'Most combat actives have been changed to deal less damage and stun for longer',
    154: 'Achievement notifications now stay until closed if you got a relic',
    155: 'Because of the big differences between the old and new version of the horde, all upgrade levels were reset and some adjustments to other forms of progression were made. Don\'t forget to re-buy your upgrades!',
    156: 'Reduced the effect of the "More bones" gem upgrade at level 3+',

    // v1.3.1
    157: 'Fixed a game crash if you had empty treasure slots',

    // v1.3.2
    158: 'The horde level bonus now affects soul capacity as well',
    159: 'Restored general relics lost in v1.3.0',
    160: 'For those who obtained special relics during events, there is no way to trace them back to your savefile. If you have a backup before v1.3.0, you can load it in this version to restore them',
    161: 'Reduced exp gain for the horde based on souls collected',
    162: 'Equipment upgrades now show when they reach max level',
    163: 'Minibosses now show their loot in the miniboss timer tooltip',
    164: 'Increased the requirement for the final task of "Combat training"',
    165: 'Heirloom chance per nostalgia',
    166: 'Next enemy stats can now be seen while waiting for enemies to spawn',
    167: 'The regular enemy tooltip now states defeating a boss respawns all enemies',
    168: 'Miniboss attack multiplier',
    169: 'Miniboss biological damage taken',
    170: 'Fixed the corrupted soul display showing NaN for some players',
    171: 'Fixed some badges being hard to read on light mode',

    // v1.3.3
    172: 'Added taunt mode to speed up reaching the boss',
    173: 'Minibosses now also count as defeating 4 regular enemies',
    174: 'Fixed a bug where stacking utility actives caused numbers to be hard to read on light mode',
    175: 'Changed the required level of one horde relic because of faster progression with taunt mode',
    176: 'Fixed a bug with bone calculation if you bought the "Milk" prestige upgrade',
    177: 'Enemy actives are now shown on sigils',
    178: 'Resources unaffected by "All resource gain" now state it in the currency tooltip',

    // v1.3.4
    179: 'Updated all dependencies to the newest version. This could introduce some unexpected bugs, but also accelerates the release process in the future',
    180: 'Replaced RNG pre-rolls with random number seeding',
    181: 'The anti-savescum system of pickaxe crafting can no longer be circumvented by using low amounts of ores',
    182: 'Bosses and minibosses now have the same sigils until you defeat them',
    183: 'Savefiles are now encoded and use the .txt ending',
    184: 'Due to optimizations and other changes, savefiles should be ~30% smaller for the average player',
    185: 'You now receive an error message when savefile loads or imports fail',
    186: 'Upcoming upgrade levels can now be viewed',
    187: 'The feature list should now be fully visible on all mobile devices',
    188: 'Fixed an error message that showed up for some players when viewing price tags',
    189: 'Added a new stat to break division shield faster',
    190: 'Added buttons to go down / up by 10 meters',
    191: 'Added buttons to go to forward / backward 10 zones',
    192: 'Changed the note UI on the desktop version - notes are now viewed on hover / click',
    193: 'Added a new type of note that is unrelated to the game story and characters',
    194: 'Relics with stat bonuses now show the feature the stat is from',
    195: 'Offerings now have an indicator with tooltip when they are not unlocked in the current run',
    196: 'The offline summary is now always shown on a new version',
    197: 'Book upgrades now show the linked upgrade',
    198: 'The art minigame now works correctly',
    199: 'Upgrades that have their maximum level increased by books now always use linear scaling after their regular maximum level',
    200: 'Added a keybind to go to the previous feature',
    201: 'You now get 5 times as much nostalgia from all sources',
    202: 'Soul capacity doubled',
    203: 'Raised the prices of most mid-game prestige upgrades',
    204: '"Red card" bonus monster part capacity',
    205: 'Base bone capacity',
    206: 'Moved the "Broken stopwatch" equipment from zone 40 to 31 and greatly increased the chance to find it',
    207: 'Moved the "Cleansing spring" equipment from zone 32 to 40',
    208: 'Bone gain increase per level of the "Monster soup" upgrade',
    209: 'Fixed some book upgrades not unlocking at maximum level',
    210: 'Treasures can now be moved by dragging them',
    211: 'The garden gnome description now states that it needs to be placed on the field to give its bonus',
    212: 'Small events should now be the same for everyone',
    213: 'All event content is now based on a random seed',
    214: 'All equipment actives that remove stuns can now be used while stunned',
    215: 'Base gold chance',
    216: 'Reduced the gold cost of early-game upgrades',
    217: 'Gene growth time reduction',
    218: 'Gene yield increase',
    219: 'Gene gold chance increase',
    220: '"Double" gene rare drop chance increase',
    221: 'The "Nihilist" and "Black hole" achievement now state correctly that they count sacrifices instead of offerings',
    222: 'You can now buy max upgrades in collapsed view',
    223: 'Gene experience increase',
    224: 'Added an experimental setting to show resource gain timers',
    225: 'The pickaxe crafting tooltip now explains ore quality',

    // v1.3.5
    226: 'The game should now be able to save again if your loadout names contained emojis',
    227: 'Fixed backups from the offline summary breaking if migrations occur',

    // v1.3.6
    228: 'Fixed a bug where seeded numbers were not restored on savefile load',
    229: 'Fixed topaz showing time to next capacity when they are full',
  },
  v: {
    1: {
      0: 'An explosive beginning',
      1: 'Principal replaced!',
      2: 'Eco-friendly',
      3: 'Neverending bosses',
      4: 'Slow and steady',
    }
  }
}
