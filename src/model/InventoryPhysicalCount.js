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
var SourceApplication = require('./SourceApplication');




/**
 * The InventoryPhysicalCount model module.
 * @module model/InventoryPhysicalCount
 */

/**
 * Constructs a new <code>InventoryPhysicalCount</code>.
 * Represents the quantity of an item variation that is physically present at a specific location, verified by a seller or a seller&#39;s employee. For example, a physical count might come from an employee counting the item variations on hand or from syncing with an external system.
 * @alias module:model/InventoryPhysicalCount
 * @class
 */
var exports = function() {
  var _this = this;












};

/**
 * Constructs a <code>InventoryPhysicalCount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InventoryPhysicalCount} obj Optional instance to populate.
 * @return {module:model/InventoryPhysicalCount} The populated <code>InventoryPhysicalCount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
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
      if (data.hasOwnProperty('source')) {
      obj['source'] = SourceApplication.constructFromObject(data['source']);
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
      if (data.hasOwnProperty('occurred_at')) {
      obj['occurred_at'] = ApiClient.convertToType(data['occurred_at'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
    }
  return obj;
}

/**
 * A unique ID generated by Square for the `InventoryPhysicalCount`.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * An optional ID provided by the application to tie the `InventoryPhysicalCount` to an external system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The Square generated ID of the `CatalogObject` being tracked.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The `CatalogObjectType` of the `CatalogObject` being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
 * @member {String} catalog_object_type
 */
exports.prototype['catalog_object_type'] = undefined;
/**
 * The current `InventoryState` for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values
 * @member {String} state
 */
exports.prototype['state'] = undefined;
/**
 * The Square ID of the `Location` where the related quantity of items are being tracked.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point.  _Important_: The Point of Sale app and Dashboard do not currently support decimal quantities. If a Point of Sale app or Dashboard attempts to read a decimal quantity on inventory counts or adjustments, the quantity will be rounded down to the nearest integer. For example, `2.5` will become `2`, and `-2.5` will become `-3`. Read [Decimal Quantities (BETA)](https://developer.squareup.com/docs/inventory-api/what-it-does#decimal-quantities-beta) for more information.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * Read-only information about the application that submitted the physical count.
 * @member {module:model/SourceApplication} source
 */
exports.prototype['source'] = undefined;
/**
 * The Square ID of the `Employee` responsible for the physical count.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;
/**
 * A client-generated timestamp in RFC 3339 format that indicates when the physical count took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
 * @member {String} occurred_at
 */
exports.prototype['occurred_at'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format that indicates when Square received the physical count.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;



module.exports = exports;



