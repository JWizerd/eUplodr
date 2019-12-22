'use strict'

const { test, trait } = use('Test/Suite')('User')
const Factory = use('Factory')

trait('DatabaseTransactions')

/** @type {typeof import('../../app/Models/User')} */

test('it makes sure user/listing relationships are properly set up', async ({ assert }) => {
  const user = await Factory.model('App/Models/User').create()
  const listing = await Factory.model('App/Models/Listing').make()
  const saved = await user.listings().create(listing.$attributes)
  const newListing = await user.listings().first()
  assert.isTrue(saved.id === newListing.id)
})

