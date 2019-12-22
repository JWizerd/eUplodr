'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingsSchema extends Schema {
  up() {
    this.create('listings', (table) => {
      const whenMadeDates = [
        "made_to_order", "2010_2019", "2000_2009",
        "before_2000", "1990s", "1980s", "1970s",
        "1960s", "1950s", "1940s", "1930s", "1920s",
        "1910s", "1900s", "1800s", "1700s", "before_1700"
      ]

      const recipients = [
        "men", "women", "unisex_adults", "teen_boys",
        "teen_girls", "teens", "boys", "girls", "children",
        "baby_boys", "baby_girls", "babies", "birds",
        "cats", "dogs", "pets", "not_specified"
      ]

      const occassions = [
        "anniversary", "baptism", "bar_or_bat_mitzvah",
        "birthday", "canada_day", "chinese_new_year",
        "cinco_de_mayo", "confirmation", "christmas",
        "day_of_the_dead", "easter", "eid",
        "engagement", "fathers_day",
        "get_well", "graduation",
        "halloween", "hanukkah", "housewarming",
        "kwanzaa", "prom", "july_4th",
        "mothers_day", "new_baby", "new_years",
        "quinceanera", "retirement", "st_patricks_day",
        "sweet_16", "sympathy", "thanksgiving",
        "valentines", "wedding"
      ]

      table.increments()
      table.timestamps()

      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('listing_id').notNullable().index()
      table.integer('quantity').notNullable()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.integer('price').notNullable()
      table.text('materials', 'mediumtext')
      table.integer('shipping_template_id').index()
      table.integer('shop_section_id')
      table.boolean('is_customizable')
      table.boolean('non_taxable')
      table.integer('processing_min')
      table.integer('processing_max')
      table.integer('taxonomy_id')
      table.text('tags', 'mediumtext')
      table.string('style').notNullable()
      table.boolean('is_supply').notNullable()

      table.enu('state', ['active', 'draft']).notNullable().index()
      table.enu('who_made', ["i_did", "collective", "someone_else"]).notNullable()
      table.enu('when_made', whenMadeDates).notNullable()
      table.enu('recipient', recipients)
      table.enu('occassion', occassions)
    })
  }

  down() {
    this.drop('listings')
  }
}

module.exports = ListingsSchema
