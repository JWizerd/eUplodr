'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Listing
 */
class Listing extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ListingHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Listing's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = Listing.buildModel('Listing')
