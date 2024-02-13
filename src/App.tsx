import { faker } from '@faker-js/faker'

function createRandomUser() {
  const sex = faker.person.sexType()
  const firstName = faker.person.firstName(sex)
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName })

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  }
}

function App() {
  const user = createRandomUser()
  console.log(user)

  return (
    <div className='container'>
      <h1>Generate Mock Data</h1>
    </div>
  )
}

export default App

