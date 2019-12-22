'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListingFilesSchema extends Schema {
  up() {
    this.create('listing_files', (table) => {
      table.increments()
      table.timestamps()

      table.integer('listing_id').unsigned().references('id').inTable('listings').notNullable()
      table.text('file', 'mediumtext').notNullable()
      table.integer('rank')
      table.string('name')
    })
  }

  down() {
    this.drop('listing_files')
  }
}

module.exports = ListingFilesSchema
