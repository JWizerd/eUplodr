'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('first_name', 60).notNullable()
      table.string('last_name', 60).notNullable()
      table.integer('etsy_id').unique()
      table.string('token').unique()
      table.string('secret').unique()
      table.date('charge_date')
      table.boolean('is_active')
      table.integer('remaining_daily_requests')
      table.string('queue_id')
      table.string('bucket_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
