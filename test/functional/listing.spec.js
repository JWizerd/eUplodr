'use strict'

const { test, trait } = use('Test/Suite')('Listing')
const Factory = use('Factory')

trait('DatabaseTransactions')

test('it makes sure listing/listingImage relationships are properly set up', async ({ assert }) => {
  const listing = await Factory.model('App/Models/Listing').create()
  const listingChild = await Factory.model('App/Models/ListingImage').make()
  const saved = await listing.images().create(listingChild.$attributes)
  const newListing = await listing.images().first()
  assert.isTrue(saved.id === newListing.listing_id)
})

test('it makes sure listing/listingFile relationships are properly set up', async ({ assert }) => {
  const listing = await Factory.model('App/Models/Listing').create()
  const listingChild = await Factory.model('App/Models/ListingFile').make()
  const saved = await listing.files().create(listingChild.$attributes)
  const linew = await listing.files().first()
  assert.isTrue(saved.id === linew.listing_id)
})
