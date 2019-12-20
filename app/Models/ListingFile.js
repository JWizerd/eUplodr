'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class ListingFile
 */
class ListingFile extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ListingFileHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * ListingFile's schema
   */
  static get schema() {
    return {
      listing_id: {
        type: Number,
        required: true,
        index: true
      },
      file: {
        type: String,
        required: true
      },
      rank: {
        type: Number
      },
      name: {
        type: String
      }
    }
  }
}

module.exports = ListingFile.buildModel('ListingFile')
