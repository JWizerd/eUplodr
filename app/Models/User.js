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
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      token: String,
      secret: String,
      chargeDate: Date,
      isActve: Boolean,
      remainingRequests: Number,
      queueId: String,
      bucketId: String
    }
  }
}

module.exports = User.buildModel('User')
