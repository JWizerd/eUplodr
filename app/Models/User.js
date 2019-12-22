'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    static get hidden() {
        return ['password']
    }

    /** @type {typeof import('./Listing')} */
    listings() {
        return this.hasMany('App/Models/Listing')
    }
}

module.exports = User
