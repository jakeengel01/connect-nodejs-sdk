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
var Card = require('./Card');




/**
 * The TenderCardDetails model module.
 * @module model/TenderCardDetails
 */

/**
 * Constructs a new <code>TenderCardDetails</code>.
 * Represents additional details of a tender with &#x60;type&#x60; &#x60;CARD&#x60; or &#x60;SQUARE_GIFT_CARD&#x60;
 * @alias module:model/TenderCardDetails
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>TenderCardDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TenderCardDetails} obj Optional instance to populate.
 * @return {module:model/TenderCardDetails} The populated <code>TenderCardDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('card')) {
      obj['card'] = Card.constructFromObject(data['card']);
    }
      if (data.hasOwnProperty('entry_method')) {
      obj['entry_method'] = ApiClient.convertToType(data['entry_method'], 'String');
    }
    }
  return obj;
}

/**
 * The credit card payment's current state (such as `AUTHORIZED` or `CAPTURED`). See `TenderCardDetailsStatus` for possible values. See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The credit card's non-confidential details.
 * @member {module:model/Card} card
 */
exports.prototype['card'] = undefined;
/**
 * The method used to enter the card's details for the transaction. See [TenderCardDetailsEntryMethod](#type-tendercarddetailsentrymethod) for possible values
 * @member {String} entry_method
 */
exports.prototype['entry_method'] = undefined;



module.exports = exports;



