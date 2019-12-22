'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Listing extends Model {
    /** @type {typeof import('./ListingFile')} */
    files() {
        return this.hasMany('App/Models/ListingFile')
    }

    /** @type {typeof import('./ListingImage')} */
    images() {
        return this.hasMany('App/Models/ListingFile')
    }
}

module.exports = Listing
