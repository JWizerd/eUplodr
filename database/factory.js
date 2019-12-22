'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Listing', async (faker) => {
    return {
        id: 1,
        username: faker.username(),
        email: faker.email(),
        password: await Hash.make(faker.password()),
        first_name: faker.name(),
        last_name: faker.name(),
        etsy_id: faker.integer(),
        token: faker.string(),
        secret: faker.secret(),
        charge_date: faker.date({ string: true }),
        is_active: faker.bool(),
        remaining_daily_requests: faker.integer({ min: 0, max: 10000 }),
        queue_id: faker.string(),
        bucket_id: faker.string()
    }
})

Factory.blueprint('App/Models/Listing', async (faker) => {
    return {
        user_id: 1,
        id: 1,
        listing_id: 1,
        quantity: 1,
        title: faker.string(),
        description: faker.paragraph({ sentences: 1 }),
        price: 1.00,
        materials: ['material1', 'material2', 'material3'],
        shipping_template_id: faker.integer({ min: 1 }),
        shop_section_id: faker.integer({ min: 1 }),
        is_customizable: faker.bool(),
        non_taxable: faker.bool(),
        processing_min: faker.integer({ min: 1 }),
        processing_max: faker.integer({ min: 1 }),
        taxonomy_id: faker.integer({ min: 1 }),
        tags: ['tag1', 'tag2'],
        style: 'sample style',
        is_supply: faker.bool(),
        when_made: 'made_to_order',
        who_made: 'i_did',
        occassion: 'anniversary',
        recipient: 'men',
        /*let's keep this in draft state just to prevent
        any possibility of posting a live listing to etsy*/
        state: 'draft',

    }
})

Factory.blueprint('App/Models/ListingImage', async (faker) => {
    return {
        listing_id: 1,
        image: faker.string()
    }
})

Factory.blueprint('App/Models/ListingFile', async (faker) => {
    return {
        listing_id: 1,
        file: faker.string(),
        name: faker.name()
    }
})
