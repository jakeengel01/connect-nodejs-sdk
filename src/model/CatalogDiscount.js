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
 * The CatalogDiscount model module.
 * @module model/CatalogDiscount
 */

/**
 * Constructs a new <code>CatalogDiscount</code>.
 * A discount in the Catalog object model.
 * @alias module:model/CatalogDiscount
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>CatalogDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogDiscount} obj Optional instance to populate.
 * @return {module:model/CatalogDiscount} The populated <code>CatalogDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('discount_type')) {
      obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('pin_required')) {
      obj['pin_required'] = ApiClient.convertToType(data['pin_required'], 'Boolean');
    }
      if (data.hasOwnProperty('label_color')) {
      obj['label_color'] = ApiClient.convertToType(data['label_color'], 'String');
    }
    }
  return obj;
}

/**
 * The discount's name. Searchable. This field has max length of 255 Unicode code points.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale. See [CatalogDiscountType](#type-catalogdiscounttype) for possible values
 * @member {String} discount_type
 */
exports.prototype['discount_type'] = undefined;
/**
 * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type` is `VARIABLE_PERCENTAGE`.  Do not include this field for amount-based or variable discounts.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The amount of the discount. Specify an amount of `0` if `discount_type` is `VARIABLE_AMOUNT`.  Do not include this field for percentage-based or variable discounts.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment in the Square Point of Sale app.
 * @member {Boolean} pin_required
 */
exports.prototype['pin_required'] = undefined;
/**
 * The color of the discount's display label in the Square Point of Sale app. This must be a valid hex color code.
 * @member {String} label_color
 */
exports.prototype['label_color'] = undefined;



module.exports = exports;



