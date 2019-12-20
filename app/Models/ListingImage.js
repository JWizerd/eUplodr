'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class ListingImage
 */
class ListingImage extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ListingImageHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * ListingImage's schema
   */
  static get schema() {
    return {
      listing_id: {
        type: Number,
        required: true,
        index: true
      },
      image: {
        type: String,
        required: true
      },
      rank: {
        type: Number
      }
    }
  }
}

module.exports = ListingImage.buildModel('ListingImage')
