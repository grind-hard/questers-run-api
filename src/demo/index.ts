/** LOL 0.0.1 */

// import { DateTime } from 'luxon'
// import { v5 as uuidv5, v4 as uuidv4, v4 } from 'uuid'
// import { Effects } from '../interfaces/common'
// import { Armor, ArmorTypeClassification } from '../interfaces/entities/armor'
// import { Character, Equipment, Gender } from '../interfaces/entities/character'
// import { Class } from '../interfaces/entities/classes'
// import { Skill, SkillCategory } from '../interfaces/entities/skills'
// import { Stat, Stats } from '../interfaces/entities/stats'
// import { Universe } from '../interfaces/entities/universe'
// import { User } from '../interfaces/entities/user'
// import { Weapon, WeaponType } from '../interfaces/entities/weapons'
// import { World } from '../interfaces/entities/world'
// import { CharacterService } from '../services/character.service'

// async function demo (): Promise<void> {
//   console.log('Starting demonstration...')

//   const user: User = {
//     authentication: 'auth',
//     createdOn: DateTime.now().toUTC().toISO(),
//     email: 'h4yzl1t@gmail.com',
//     id: uuidv5('hayz', uuidv5('user', uuidv4())),
//     lastLoginOn: DateTime.now().toUTC().minus({ days: 1 }).toISO(),
//     phone: '715-555-5555',
//     twoFactor: true,
//     username: 'hayz'
//   }

//   /** Create a universe */
//   const universe: Universe = {
//     id: v4(),
//     title: 'hayzlits-universe',
//     description: 'Best universe around.',
//     worldIds: []
//   }
//   user.universeIds = []
//   user.universeIds.push(universe.id)

//   const world: World = {
//     id: v4(),
//     name: 'hayzlits-world',
//     characerIds: [],
//     maxCharacterAmount: 100,
//     universeId: universe.id
//   }

//   universe.worldIds.push(world.id)

//   /** Create Classes */
//   const paladin: Class = {
//     id: v4(),
//     title: 'Paladin',
//     description: 'Noble knight sworn to protect.',
//     skillIds: []
//   }

//   const skillCategoryId: SkillCategory = {
//     id: v4(),
//     title: 'Light',
//     description: 'Abilities used by the light, for the light.',
//     classRestrictionIds: [paladin.id]
//   }

//   const healingEffects: Effects = {
//     id: v4(),
//     chance: 90,
//     description: 'Healing effects.',
//     self: {
//       hp: 0,
//       mana: -5,
//       stamina: 0
//     },
//     target: {
//       hp: 5,
//       mana: 0,
//       stamina: 0
//     }
//   }

//   const healSkill: Skill = {
//     id: v4(),
//     title: 'Heal',
//     description: 'Heals the friendly target. Heals the party in distrubition if no member is selected.',
//     skillCategoryId: skillCategoryId.id,
//     effectIds: [healingEffects.id]
//   }

//   paladin.skillIds.push(healSkill.id)

//   /** Create basic armor */
//   const heavyArmorType: ArmorTypeClassification = { id: v4(), title: 'Heavy', description: 'Worn by those who are strong.' }

//   const equipment: Equipment = {
//     id: v4(),
//     description: 'My Equip Save 1',
//     armorIds: [],
//     weaponIds: []
//   }

//   const types = ['Head', 'Chest', 'Shoulders', 'Legs', 'Hands', 'Feet', 'Neck', 'Ring', 'Trinket']
//   const startArmor: Armor[] = []
//   for (const type of types) {
//     const armor: Armor = {
//       id: v4(),
//       title: `Lord Hayzlit's ${type}`,
//       descripton: `Wear your ${type} proud.`,
//       durability: 100,
//       slot: { id: v4(), title: `${type}`, description: `Put it on your ${type}.` },
//       levelRequirement: 0,
//       type: heavyArmorType,
//       value: 42,
//       price: 42.99
//     }

//     startArmor.push(armor)
//     equipment.armorIds.push(armor.id)
//   }

//   const oneHandSwordWeaponType: WeaponType = {
//     id: v4(),
//     title: '1h Sword',
//     description: 'Lefty or Righty'
//   }

//   const shieldWeaponType: WeaponType = {
//     id: v4(),
//     title: 'Shield',
//     description: 'Blocks things.'
//   }

//   const plungerSword: Weapon = {
//     id: v4(),
//     title: 'Plunger',
//     description: 'Used by a famous Italian man in the past.',
//     effects: [
//       { id: v4(), description: 'Slash 1h', self: { hp: 0, mana: 0, stamina: 0 }, target: { hp: -4, mana: 0, stamina: 0 }, chance: 90 },
//       { id: v4(), description: 'Slash 1h Stamina Use', self: { hp: 0, mana: 0, stamina: 5 }, target: { hp: 0, mana: 0, stamina: 0 }, chance: 100 }
//     ],
//     levelRequirement: 1,
//     weaponTypeId: oneHandSwordWeaponType.id
//   }

//   const stoolShield: Weapon = {
//     id: v4(),
//     title: 'Stool',
//     description: 'Used by lion tamers.',
//     effects: [
//       { id: v4(), description: 'Block', self: { hp: 2, mana: 0, stamina: 4 }, target: { hp: 0, mana: 0, stamina: 0 }, chance: 13 }
//     ],
//     levelRequirement: 1,
//     weaponTypeId: shieldWeaponType.id
//   }

//   equipment.weaponIds.push(plungerSword.id, stoolShield.id)

//   const attackHelicopter: Gender = {
//     id: v4(),
//     title: 'Attack Helicopter',
//     description: 'Pew pew pew.'
//   }

//   /** Create stats */
//   const luckyGoldStat: Stat = {
//     id: v4(),
//     title: 'Luck - Gold Find',
//     desciption: 'Higher values increase gold find.'
//   }

//   const luckyDropStat: Stat = {
//     id: v4(),
//     title: 'Luck - Gear Find',
//     desciption: 'Higher values increase loot find.'
//   }

//   const luckStatEffects: Effects = {
//     id: v4(),
//     description: 'Luck base stat effects.',
//     chance: 0.07,
//     stats: [luckyGoldStat, luckyDropStat]
//   }

//   const stats: Stats = {
//     id: v4(),
//     statIds: [luckStatEffects.id]
//   }

//   /** Create a character */
//   const character: Character = {
//     id: v4(),
//     userId: user.id,
//     age: 42,
//     classId: paladin.id,
//     equipmentId: equipment.id,
//     genderId: attackHelicopter.id,
//     level: 1,
//     name: 'Hayzlit',
//     savedEquipmentIds: [equipment.id],
//     weaponIds: equipment.weaponIds,
//     statsId: stats.id
//   }

//   const characterService = new CharacterService()
//   await characterService.upsert([character])

//   const characterSheet =
// `${character.name}
// --------------------]
// ${character.age} - ${attackHelicopter.title} [${attackHelicopter.description}]
// --------------------]
// ${paladin.title} [${paladin.description}]
// ${healSkill.title} [${healSkill.description}]\n[${`\n\t${healingEffects.description} - Self: ${JSON.stringify(healingEffects.self) ?? 'N/A'} | Target: ${JSON.stringify(healingEffects.target) ?? 'N/A'} | (De)Buffs: ${JSON.stringify(healingEffects.stats) ?? 'N/A'}`}\n]
// --------------------]
// Equipment
// --------------------]
// ${startArmor.map(o => o.title).join(' | ')}
// ${stoolShield.title} [${stoolShield.effects.map(o => `\n\t${o.description} - Self: ${JSON.stringify(o.self) ?? 'N/A'} | Target: ${JSON.stringify(o.target) ?? 'N/A'} | (De)Buffs: ${JSON.stringify(o.stats) ?? 'N/A'}`)}\n]
// ${plungerSword.title} [${plungerSword.effects.map(o => `\n\t${o.description} - Self: ${JSON.stringify(o.self) ?? 'N/A'} | Target: ${JSON.stringify(o.target) ?? 'N/A'} | (De)Buffs: ${JSON.stringify(o.stats) ?? 'N/A'}`)}\n]
// `

//   console.log('Finished demonstration...')
//   console.log(`\n${characterSheet}`)
// }

// export default demo()
