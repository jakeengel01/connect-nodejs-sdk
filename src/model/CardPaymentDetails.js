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
var DeviceDetails = require('./DeviceDetails');
var Error = require('./Error');




/**
 * The CardPaymentDetails model module.
 * @module model/CardPaymentDetails
 */

/**
 * Constructs a new <code>CardPaymentDetails</code>.
 * Reflects the current status of a card payment.
 * @alias module:model/CardPaymentDetails
 * @class
 */
var exports = function() {
  var _this = this;















};

/**
 * Constructs a <code>CardPaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CardPaymentDetails} obj Optional instance to populate.
 * @return {module:model/CardPaymentDetails} The populated <code>CardPaymentDetails</code> instance.
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
      if (data.hasOwnProperty('cvv_status')) {
      obj['cvv_status'] = ApiClient.convertToType(data['cvv_status'], 'String');
    }
      if (data.hasOwnProperty('avs_status')) {
      obj['avs_status'] = ApiClient.convertToType(data['avs_status'], 'String');
    }
      if (data.hasOwnProperty('auth_result_code')) {
      obj['auth_result_code'] = ApiClient.convertToType(data['auth_result_code'], 'String');
    }
      if (data.hasOwnProperty('application_identifier')) {
      obj['application_identifier'] = ApiClient.convertToType(data['application_identifier'], 'String');
    }
      if (data.hasOwnProperty('application_name')) {
      obj['application_name'] = ApiClient.convertToType(data['application_name'], 'String');
    }
      if (data.hasOwnProperty('application_cryptogram')) {
      obj['application_cryptogram'] = ApiClient.convertToType(data['application_cryptogram'], 'String');
    }
      if (data.hasOwnProperty('verification_method')) {
      obj['verification_method'] = ApiClient.convertToType(data['verification_method'], 'String');
    }
      if (data.hasOwnProperty('verification_results')) {
      obj['verification_results'] = ApiClient.convertToType(data['verification_results'], 'String');
    }
      if (data.hasOwnProperty('statement_description')) {
      obj['statement_description'] = ApiClient.convertToType(data['statement_description'], 'String');
    }
      if (data.hasOwnProperty('device_details')) {
      obj['device_details'] = DeviceDetails.constructFromObject(data['device_details']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The card payment's current state. It can be one of: `AUTHORIZED`, `CAPTURED`, `VOIDED`, `FAILED`.
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The credit card's non-confidential details.
 * @member {module:model/Card} card
 */
exports.prototype['card'] = undefined;
/**
 * The method used to enter the card's details for the payment.  Can be `KEYED`, `SWIPED`, `EMV`, `ON_FILE`, or `CONTACTLESS`.
 * @member {String} entry_method
 */
exports.prototype['entry_method'] = undefined;
/**
 * Status code returned from the Card Verification Value (CVV) check. Can be `CVV_ACCEPTED`, `CVV_REJECTED`, `CVV_NOT_CHECKED`.
 * @member {String} cvv_status
 */
exports.prototype['cvv_status'] = undefined;
/**
 * Status code returned from the Address Verification System (AVS) check. Can be `AVS_ACCEPTED`, `AVS_REJECTED`, `AVS_NOT_CHECKED`.
 * @member {String} avs_status
 */
exports.prototype['avs_status'] = undefined;
/**
 * Status code returned by the card issuer that describes the payment's authorization status.
 * @member {String} auth_result_code
 */
exports.prototype['auth_result_code'] = undefined;
/**
 * For EMV payments, identifies the EMV application used for the payment.
 * @member {String} application_identifier
 */
exports.prototype['application_identifier'] = undefined;
/**
 * For EMV payments, the human-readable name of the EMV application used for the payment.
 * @member {String} application_name
 */
exports.prototype['application_name'] = undefined;
/**
 * For EMV payments, the cryptogram generated for the payment.
 * @member {String} application_cryptogram
 */
exports.prototype['application_cryptogram'] = undefined;
/**
 * For EMV payments, method used to verify the cardholder's identity.  Can be one of `PIN`, `SIGNATURE`, `PIN_AND_SIGNATURE`, `ON_DEVICE`, or `NONE`.
 * @member {String} verification_method
 */
exports.prototype['verification_method'] = undefined;
/**
 * For EMV payments, the results of the cardholder verification.  Can be one of `SUCCESS`, `FAILURE`, or `UNKNOWN`.
 * @member {String} verification_results
 */
exports.prototype['verification_results'] = undefined;
/**
 * The statement description sent to the card networks.  Note: The actual statement description will vary and is likely to be truncated and appended with additional information on a per issuer basis.
 * @member {String} statement_description
 */
exports.prototype['statement_description'] = undefined;
/**
 * Details about the device that took the payment.
 * @member {module:model/DeviceDetails} device_details
 */
exports.prototype['device_details'] = undefined;
/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



