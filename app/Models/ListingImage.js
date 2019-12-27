'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ListingImage extends Model {
    /** @type {typeof import('./Listing')} */
    listing() {
        return this.belongsTo('App/Models/Listing')
    }
}

module.exports = ListingImage
