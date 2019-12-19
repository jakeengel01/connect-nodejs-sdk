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




/**
 * The DeviceDetails model module.
 * @module model/DeviceDetails
 */

/**
 * Constructs a new <code>DeviceDetails</code>.
 * Details about the device that took the payment.
 * @alias module:model/DeviceDetails
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>DeviceDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DeviceDetails} obj Optional instance to populate.
 * @return {module:model/DeviceDetails} The populated <code>DeviceDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
    }
      if (data.hasOwnProperty('device_name')) {
      obj['device_name'] = ApiClient.convertToType(data['device_name'], 'String');
    }
    }
  return obj;
}

/**
 * Square-issued ID of the device.
 * @member {String} device_id
 */
exports.prototype['device_id'] = undefined;
/**
 * The name of the device set by the merchant.
 * @member {String} device_name
 */
exports.prototype['device_name'] = undefined;



module.exports = exports;



