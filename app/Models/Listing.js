'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Listing
 */
class Listing extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ListingHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Listing's schema
   */
  static get schema() {
    return {
      userId: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      materials: {
        type: [String]
      },
      shipping_template_id: {
        type: Number
      },
      shop_section_id: {
        type: Number
      },
      image_ids: {
        type: [Number]
      },
      is_customizable: {
        type: Boolean
      },
      non_taxable: {
        type: Boolean
      },
      state: {
        type: String,
        enum: ['active', 'draft']
      },
      processing_min: {
        type: Number
      },
      processing_max: {
        type: Number
      },
      category_id: {
        type: Number
      },
      taxonomy_id: {
        type: Number
      },
      tags: {
        type: [String]
      },
      who_made: {
        type: String,
        enum: ["i_did", "collective", "someone_else"],
        required: true
      },
      is_supply: {
        type: Boolean
      },
      when_made: {
        type: String,
        enum: [
          "made_to_order", "2010_2019", "2000_2009",
          "before_2000", "1990s", "1980s", "1970s",
          "1960s", "1950s", "1940s", "1930s", "1920s",
          "1910s", "1900s", "1800s", "1700s", "before_1700"
        ],
        required: true
      },
      recipient: {
        type: String,
        enum: [
          "men", "women", "unisex_adults", "teen_boys",
          "teen_girls", "teens", "boys", "girls", "children",
          "baby_boys", "baby_girls", "babies", "birds",
          "cats", "dogs", "pets", "not_specified"
        ]
      },
      occassion: {
        type: String,
        enum: [
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
      },
      style: {
        type: String,
        required: true
      }
    }
  }
}

module.exports = Listing.buildModel('Listing')
