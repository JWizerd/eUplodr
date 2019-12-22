'use strict'

const { test, trait } = use('Test/Suite')('User')
const Factory = use('Factory')

trait('DatabaseTransactions')

test('it makes sure listing relationships are properly set up', async ({ assert }) => {
  const user = await Factory.model('App/Models/User').create()
  const listing = await Factory.model('App/Models/Listing').create()

  assert.isTrue(1 === 2)
})

