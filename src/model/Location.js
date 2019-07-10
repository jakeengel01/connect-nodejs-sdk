/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Address = require('./Address');
var BusinessHours = require('./BusinessHours');
var Coordinates = require('./Coordinates');




/**
 * The Location model module.
 * @module model/Location
 */

/**
 * Constructs a new <code>Location</code>.
 * Represents one of a business&#39;s locations.
 * @alias module:model/Location
 * @class
 */
var exports = function() {
  var _this = this;























};

/**
 * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Location} obj Optional instance to populate.
 * @return {module:model/Location} The populated <code>Location</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('address')) {
      obj['address'] = Address.constructFromObject(data['address']);
    }
      if (data.hasOwnProperty('timezone')) {
      obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
    }
      if (data.hasOwnProperty('capabilities')) {
      obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
      if (data.hasOwnProperty('country')) {
      obj['country'] = ApiClient.convertToType(data['country'], 'String');
    }
      if (data.hasOwnProperty('language_code')) {
      obj['language_code'] = ApiClient.convertToType(data['language_code'], 'String');
    }
      if (data.hasOwnProperty('currency')) {
      obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
    }
      if (data.hasOwnProperty('phone_number')) {
      obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
    }
      if (data.hasOwnProperty('business_name')) {
      obj['business_name'] = ApiClient.convertToType(data['business_name'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('website_url')) {
      obj['website_url'] = ApiClient.convertToType(data['website_url'], 'String');
    }
      if (data.hasOwnProperty('business_hours')) {
      obj['business_hours'] = BusinessHours.constructFromObject(data['business_hours']);
    }
      if (data.hasOwnProperty('business_email')) {
      obj['business_email'] = ApiClient.convertToType(data['business_email'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('twitter_username')) {
      obj['twitter_username'] = ApiClient.convertToType(data['twitter_username'], 'String');
    }
      if (data.hasOwnProperty('instagram_username')) {
      obj['instagram_username'] = ApiClient.convertToType(data['instagram_username'], 'String');
    }
      if (data.hasOwnProperty('facebook_url')) {
      obj['facebook_url'] = ApiClient.convertToType(data['facebook_url'], 'String');
    }
      if (data.hasOwnProperty('coordinates')) {
      obj['coordinates'] = Coordinates.constructFromObject(data['coordinates']);
    }
    }
  return obj;
}

/**
 * The location's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The location's name. Location names are set by the account owner and displayed in the dashboard as the location's nickname
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The location's physical address.
 * @member {module:model/Address} address
 */
exports.prototype['address'] = undefined;
/**
 * The [IANA Timezone Database](https://www.iana.org/time-zones) identifier for the location's timezone.
 * @member {String} timezone
 */
exports.prototype['timezone'] = undefined;
/**
 * Indicates which Square features are enabled for the location. See [LocationCapability](#type-locationcapability) for possible values
 * @member {Array.<String>} capabilities
 */
exports.prototype['capabilities'] = undefined;
/**
 * The location's status See [LocationStatus](#type-locationstatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The time when the location was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The identifier of the merchant that owns the location.
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;
/**
 * The location's country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values
 * @member {String} country
 */
exports.prototype['country'] = undefined;
/**
 * The language associated with the location in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A).
 * @member {String} language_code
 */
exports.prototype['language_code'] = undefined;
/**
 * The currency used for all transactions at this location, specified in __ISO 4217 format__. For example, the currency for a location processing transactions in the United States is 'USD'. See [Currency](#type-currency) for possible values
 * @member {String} currency
 */
exports.prototype['currency'] = undefined;
/**
 * The location's phone_number.
 * @member {String} phone_number
 */
exports.prototype['phone_number'] = undefined;
/**
 * The location's business_name which is shown to its customers. For example, this is the name printed on its customer's receipts.
 * @member {String} business_name
 */
exports.prototype['business_name'] = undefined;
/**
 * The location's type, as set by the account owner in the Square dashboard. Typically used to indicate whether or not the location object represents a physical space like a building or mall space. See [LocationType](#type-locationtype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * The location's website, as set by the account owner in the Square dashboard.  Default: none; only exists if explicitly set.
 * @member {String} website_url
 */
exports.prototype['website_url'] = undefined;
/**
 *   The hours of operation for a business location.  Default: none; only exists if explicitly set.
 * @member {module:model/BusinessHours} business_hours
 */
exports.prototype['business_hours'] = undefined;
/**
 * The email of the location.
 * @member {String} business_email
 */
exports.prototype['business_email'] = undefined;
/**
 * The business description of the location.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The Twitter username of the location without the '
 * @member {String} twitter_username
 */
exports.prototype['twitter_username'] = undefined;
/**
 * The Instagram username of the location without the '
 * @member {String} instagram_username
 */
exports.prototype['instagram_username'] = undefined;
/**
 * The Facebook profile URL of the location. The URL should begin with 'facebook.com/'.
 * @member {String} facebook_url
 */
exports.prototype['facebook_url'] = undefined;
/**
 * The physical coordinates (latitude and longitude) of the location.
 * @member {module:model/Coordinates} coordinates
 */
exports.prototype['coordinates'] = undefined;



module.exports = exports;



