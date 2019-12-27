'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingImagesSchema extends Schema {
  up() {
    this.create('listing_images', (table) => {
      table.increments()
      table.timestamps()

      table.integer('listing_id').unsigned().references('id').inTable('listings').notNullable()
      table.text('image', 'mediumtext').notNullable()
      table.integer('rank')
    })
  }

  down() {
    this.drop('listing_images')
  }
}

module.exports = ListingImagesSchema
