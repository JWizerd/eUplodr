'use strict'

const { test, trait } = use('Test/Suite')('Listing')
const Factory = use('Factory')

trait('DatabaseTransactions')

test('it makes sure listing/listingImage relationships are properly set up', async ({ assert }) => {
  const l = await Factory.model('App/Models/Listing').create()
  const li = await Factory.model('App/Models/ListingImage').make()
  const saved = await l.images().create(li.$attributes)
  const linew = await l.images().first()
  assert.isTrue(saved.id === linew.listing_id)
})

test('it makes sure listing/listingFile relationships are properly set up', async ({ assert }) => {
  const l = await Factory.model('App/Models/Listing').create()
  const li = await Factory.model('App/Models/ListingFile').make()
  const saved = await l.files().create(li.$attributes)
  const linew = await l.files().first()
  assert.isTrue(saved.id === linew.listing_id)
})
