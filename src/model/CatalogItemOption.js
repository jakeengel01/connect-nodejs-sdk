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
var CatalogObject = require('./CatalogObject');




/**
 * The CatalogItemOption model module.
 * Note: This model is in beta.
 * @module model/CatalogItemOption
 */

/**
 * Constructs a new <code>CatalogItemOption</code>.
 * A group of variations for a [CatalogItem](#type-catalogitem)&#39;s.
 * @alias module:model/CatalogItemOption
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>CatalogItemOption</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogItemOption} obj Optional instance to populate.
 * @return {module:model/CatalogItemOption} The populated <code>CatalogItemOption</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('display_name')) {
      obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('show_colors')) {
      obj['show_colors'] = ApiClient.convertToType(data['show_colors'], 'Boolean');
    }
      if (data.hasOwnProperty('values')) {
      obj['values'] = ApiClient.convertToType(data['values'], [CatalogObject]);
    }
      if (data.hasOwnProperty('item_count')) {
      obj['item_count'] = ApiClient.convertToType(data['item_count'], 'Number');
    }
    }
  return obj;
}

/**
 * The item option's display name for the seller. Must be unique across all item options. Searchable.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The item option's display name for the customer. Searchable.
 * @member {String} display_name
 */
exports.prototype['display_name'] = undefined;
/**
 * The item option's human-readable description. Displays for in the Square Point of Sale app for the seller and in the Online Store or on receipts for the buyer.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * If true, display colors for entries in `values` when present.
 * @member {Boolean} show_colors
 */
exports.prototype['show_colors'] = undefined;
/**
 * A list of `CatalogObject`s containing the `CatalogItemOptionValue`s for this item.
 * @member {Array.<module:model/CatalogObject>} values
 */
exports.prototype['values'] = undefined;
/**
 * The number of `CatalogItem`s currently associated with this item option. Present only if the `include_counts` was specified in the request. Any count over 100 will be returned as `100`.
 * @member {Number} item_count
 */
exports.prototype['item_count'] = undefined;



module.exports = exports;



