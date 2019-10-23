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
var Money = require('./Money');




/**
 * The OrderLineItemAppliedDiscount model module.
 * Note: This model is in beta.
 * @module model/OrderLineItemAppliedDiscount
 */

/**
 * Constructs a new <code>OrderLineItemAppliedDiscount</code>.
 * Represents an applied portion of a discount to a line item in an order.  Order scoped discounts will automatically have applied discounts present for each line item. Line item scoped discounts must have applied discounts added manually for any applicable line items. The corresponding applied money will automatically be computed based on participating line items.
 * @alias module:model/OrderLineItemAppliedDiscount
 * @class
 * @param discountUid {String} The `uid` of the discount the applied discount represents. Must reference a discount present in the `order.discounts` field.  This field is immutable. To change which discounts apply to a line item, you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
 */
var exports = function(discountUid) {
  var _this = this;


  _this['discount_uid'] = discountUid;

};

/**
 * Constructs a <code>OrderLineItemAppliedDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemAppliedDiscount} obj Optional instance to populate.
 * @return {module:model/OrderLineItemAppliedDiscount} The populated <code>OrderLineItemAppliedDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('discount_uid')) {
      obj['discount_uid'] = ApiClient.convertToType(data['discount_uid'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the applied discount only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The `uid` of the discount the applied discount represents. Must reference a discount present in the `order.discounts` field.  This field is immutable. To change which discounts apply to a line item, you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
 * @member {String} discount_uid
 */
exports.prototype['discount_uid'] = undefined;
/**
 * The amount of money applied by the discount to the line item.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;



module.exports = exports;



