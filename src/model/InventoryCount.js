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
 * The InventoryCount model module.
 * @module model/InventoryCount
 */

/**
 * Constructs a new <code>InventoryCount</code>.
 * Represents the estimated quantity of items in a particular state at a particular location based on the known history of physical counts and inventory adjustments.
 * @alias module:model/InventoryCount
 * @class
 */
var exports = function() {
  var _this = this;







};

/**
 * Constructs a <code>InventoryCount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InventoryCount} obj Optional instance to populate.
 * @return {module:model/InventoryCount} The populated <code>InventoryCount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_type')) {
      obj['catalog_object_type'] = ApiClient.convertToType(data['catalog_object_type'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
    }
      if (data.hasOwnProperty('calculated_at')) {
      obj['calculated_at'] = ApiClient.convertToType(data['calculated_at'], 'String');
    }
    }
  return obj;
}

/**
 * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
 * @member {String} catalog_object_type
 */
exports.prototype['catalog_object_type'] = undefined;
/**
 * The current [InventoryState](#type-inventorystate) for the related quantity of items.
 * @member {module:model/InventoryCount.StateEnum} state
 */
exports.prototype['state'] = undefined;
/**
 * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The number of items in the count as a decimal string. Fractional quantities are not supported.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format that indicates when Square received the most recent physical count or adjustment that had an affect on the estimated count.
 * @member {String} calculated_at
 */
exports.prototype['calculated_at'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "CUSTOM"
     * @const
     */
    "CUSTOM": "CUSTOM",
    /**
     * value: "IN_STOCK"
     * @const
     */
    "IN_STOCK": "IN_STOCK",
    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",
    /**
     * value: "RETURNED_BY_CUSTOMER"
     * @const
     */
    "RETURNED_BY_CUSTOMER": "RETURNED_BY_CUSTOMER",
    /**
     * value: "RESERVED_FOR_SALE"
     * @const
     */
    "RESERVED_FOR_SALE": "RESERVED_FOR_SALE",
    /**
     * value: "SOLD_ONLINE"
     * @const
     */
    "SOLD_ONLINE": "SOLD_ONLINE",
    /**
     * value: "ORDERED_FROM_VENDOR"
     * @const
     */
    "ORDERED_FROM_VENDOR": "ORDERED_FROM_VENDOR",
    /**
     * value: "RECEIVED_FROM_VENDOR"
     * @const
     */
    "RECEIVED_FROM_VENDOR": "RECEIVED_FROM_VENDOR",
    /**
     * value: "IN_TRANSIT_TO"
     * @const
     */
    "IN_TRANSIT_TO": "IN_TRANSIT_TO",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "WASTE"
     * @const
     */
    "WASTE": "WASTE",
    /**
     * value: "UNLINKED_RETURN"
     * @const
     */
    "UNLINKED_RETURN": "UNLINKED_RETURN"  };


module.exports = exports;



