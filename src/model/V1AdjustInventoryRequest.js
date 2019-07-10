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
 * The V1AdjustInventoryRequest model module.
 * @module model/V1AdjustInventoryRequest
 */

/**
 * Constructs a new <code>V1AdjustInventoryRequest</code>.
 * V1AdjustInventoryRequest
 * @alias module:model/V1AdjustInventoryRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>V1AdjustInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1AdjustInventoryRequest} obj Optional instance to populate.
 * @return {module:model/V1AdjustInventoryRequest} The populated <code>V1AdjustInventoryRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('quantity_delta')) {
      obj['quantity_delta'] = ApiClient.convertToType(data['quantity_delta'], 'Number');
    }
      if (data.hasOwnProperty('adjustment_type')) {
      obj['adjustment_type'] = ApiClient.convertToType(data['adjustment_type'], 'String');
    }
      if (data.hasOwnProperty('memo')) {
      obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
    }
    }
  return obj;
}

/**
 * The number to adjust the variation's quantity by.
 * @member {Number} quantity_delta
 */
exports.prototype['quantity_delta'] = undefined;
/**
 * The reason for the inventory adjustment. See [V1AdjustInventoryRequestAdjustmentType](#type-v1adjustinventoryrequestadjustmenttype) for possible values
 * @member {String} adjustment_type
 */
exports.prototype['adjustment_type'] = undefined;
/**
 * A note about the inventory adjustment.
 * @member {String} memo
 */
exports.prototype['memo'] = undefined;



module.exports = exports;



