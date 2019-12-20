'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    this.addHook('preSave', self.hashPassword)
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }

  static async hashPassword(userInstance) {
    if (userInstance.dirty.password) {
      userInstance.password = await Hash.make(userInstance.password)
    }
  }

  /**
   * User's schema
   */
  static get schema() {
    return {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      etsyId: {
        type: Number
      },
      token: {
        type: String
      },
      secret: {
        type: String
      },
      chargeDate: {
        type: Date
      },
      isActive: {
        type: Boolean,
        required: true
      },
      remainingRequests: {
        type: Number
      },
      queueId: {
        type: String
      },
      bucketId: {
        type: String
      }
    }
  }
}

module.exports = User.buildModel('User')
