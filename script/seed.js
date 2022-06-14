'use strict'

const db = require('../server/db')
const {User, Hue} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const hues = await Promise.all([
    Hue.create({
      emotionName: 'Petrichor',
      emotionHue: '#283618',
      description:
        'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
      hueColorFamily: 'green',
      quantity: 10,
      price: 20.0
    }),
    Hue.create({
      emotionName: 'Dès Vue',
      emotionHue: '#aa767c',
      description: 'the awareness that this moment will become a memory.',
      hueColorFamily: 'red',
      quantity: 10,
      price: 25.0
    }),
    Hue.create({
      emotionName: 'Kairosclerosis',
      emotionHue: '#a4161a',
      description:
        "the moment you look around and realize that you're currently happy",
      hueColorFamily: 'red',
      quantity: 10,
      price: 75.0
    }),
    Hue.create({
      emotionName: 'Vemödalen',
      emotionHue: '#ffcdb2',
      description: 'the fear that originality is no longer possible',
      hueColorFamily: 'orange',
      quantity: 5,
      price: 30.0
    }),
    Hue.create({
      emotionName: 'Harmonia',
      emotionHue: '#b5838d',
      description:
        'an itchy sense of dread when life feels just a hint too peaceful.',
      hueColorFamily: 'purple',
      quantity: 15,
      price: 20.0
    }),
    Hue.create({
      emotionName: 'Liberosis',
      emotionHue: '#eec170',
      description:
        'the desire to care less about things; to figure out a way to relax your grip on your life.',
      hueColorFamily: 'yellow',
      quantity: 15,
      price: 35.0
    }),
    Hue.create({
      emotionName: 'Nikhedonia',
      emotionHue: '#87a330',
      description:
        'the feeling of excitement or elation that comes from anticipating success.',
      hueColorFamily: 'green',
      quantity: 20,
      price: 50.0
    }),
    Hue.create({
      emotionName: 'Euneirophrenia',
      emotionHue: '#ba6a49',
      description:
        'the feeling of contentment that comes from waking up from a pleasant dream.',
      hueColorFamily: 'red',
      quantity: 30,
      price: 30.0
    }),
    Hue.create({
      emotionName: 'Dolce far niente',
      emotionHue: '#a56336',
      description: 'the pleasure of doing nothing.',
      hueColorFamily: 'red',
      quantity: 25,
      price: 25.0
    }),
    Hue.create({
      emotionName: 'Ambedo',
      emotionHue: '#ffedd8',
      description: 'a momentary trance of emotional clarity',
      hueColorFamily: 'yellow',
      quantity: 35,
      price: 75.0
    }),
    Hue.create({
      emotionName: 'Suente',
      emotionHue: '#718355',
      description:
        'the state of being so familiar with someone that you can be in a room with them without thinking, without holding anything back, or without having to say a word.',
      hueColorFamily: 'green',
      quantity: 15,
      price: 20.0
    }),
    Hue.create({
      emotionName: 'Amoransia',
      emotionHue: '#6d3b47',
      description:
        'the melodramatic thrill of unrequited love; the longing for someone you can never have.',
      hueColorFamily: 'red',
      quantity: 20,
      price: 75.0
    }),
    Hue.create({
      emotionName: 'Hubilance',
      emotionHue: '#d55d92',
      description:
        'the quiet poignance of your own responsibility for someone, with a mix of prise, fear, love and humility—much like feeling a baby fall asleep on your chest or driving at night surrounded by loved ones fast asleep in the car with you.',
      hueColorFamily: 'purple',
      quantity: 5,
      price: 100.0
    }),
    Hue.create({
      emotionName: 'Ledsome',
      emotionHue: '#18435a',
      description:
        'feeling lonely in a crowd; drifting along in a sea of anonymous faces but unable to communicate with or confide in any of them.',
      hueColorFamily: 'blue',
      quantity: 30,
      price: 25.0
    }),
    Hue.create({
      emotionName: 'Etterath',
      emotionHue: '#fbb3a5',
      description:
        'the feeling of complete emptiness after a long and arduous process is complete.',
      hueColorFamily: 'yellow',
      quantity: 35,
      price: 50.0
    }),
    Hue.create({
      emotionName: 'Galagog',
      emotionHue: '#ffb200',
      description:
        'the state of being simultaneously entranced and unsettled by the vastness of the cosmos, which makes your deepest concerns feel laughably quaint.',
      hueColorFamily: 'yellow',
      quantity: 20,
      price: 50.0
    }),
    Hue.create({
      emotionName: 'Whipgraft Delusion',
      emotionHue: '#3891a6',
      description:
        "the phenomenon in which you catch your reflection in the mirror and get the sense that you're ppeering into the eyes of a stranger.",
      hueColorFamily: 'green',
      quantity: 25,
      price: 75.0
    }),
    Hue.create({
      emotionName: 'Apolytus',
      emotionHue: '#c05c35',
      description:
        'the moment you realize you are changing as a person, finally outgrowing your old problems.',
      hueColorFamily: 'red',
      quantity: 25,
      price: 100
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${hues.length} hues`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed