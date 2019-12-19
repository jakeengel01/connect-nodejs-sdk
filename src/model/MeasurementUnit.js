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
var MeasurementUnitCustom = require('./MeasurementUnitCustom');




/**
 * The MeasurementUnit model module.
 * Note: This model is in beta.
 * @module model/MeasurementUnit
 */

/**
 * Constructs a new <code>MeasurementUnit</code>.
 * Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one of the following fields are required: &#x60;custom_unit&#x60;, &#x60;area_unit&#x60;, &#x60;length_unit&#x60;, &#x60;volume_unit&#x60;, and &#x60;weight_unit&#x60;.
 * @alias module:model/MeasurementUnit
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>MeasurementUnit</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/MeasurementUnit} obj Optional instance to populate.
 * @return {module:model/MeasurementUnit} The populated <code>MeasurementUnit</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('custom_unit')) {
      obj['custom_unit'] = MeasurementUnitCustom.constructFromObject(data['custom_unit']);
    }
      if (data.hasOwnProperty('area_unit')) {
      obj['area_unit'] = ApiClient.convertToType(data['area_unit'], 'String');
    }
      if (data.hasOwnProperty('length_unit')) {
      obj['length_unit'] = ApiClient.convertToType(data['length_unit'], 'String');
    }
      if (data.hasOwnProperty('volume_unit')) {
      obj['volume_unit'] = ApiClient.convertToType(data['volume_unit'], 'String');
    }
      if (data.hasOwnProperty('weight_unit')) {
      obj['weight_unit'] = ApiClient.convertToType(data['weight_unit'], 'String');
    }
      if (data.hasOwnProperty('generic_unit')) {
      obj['generic_unit'] = ApiClient.convertToType(data['generic_unit'], 'String');
    }
      if (data.hasOwnProperty('time_unit')) {
      obj['time_unit'] = ApiClient.convertToType(data['time_unit'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
    }
  return obj;
}

/**
 * A custom unit of measurement defined by the seller using the Point of Sale app or ad-hoc as an order line item.
 * @member {module:model/MeasurementUnitCustom} custom_unit
 */
exports.prototype['custom_unit'] = undefined;
/**
 * Represents a standard area unit. See [MeasurementUnitArea](#type-measurementunitarea) for possible values
 * @member {String} area_unit
 */
exports.prototype['area_unit'] = undefined;
/**
 * Represents a standard length unit. See [MeasurementUnitLength](#type-measurementunitlength) for possible values
 * @member {String} length_unit
 */
exports.prototype['length_unit'] = undefined;
/**
 * Represents a standard volume unit. See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values
 * @member {String} volume_unit
 */
exports.prototype['volume_unit'] = undefined;
/**
 * Represents a standard unit of weight or mass. See [MeasurementUnitWeight](#type-measurementunitweight) for possible values
 * @member {String} weight_unit
 */
exports.prototype['weight_unit'] = undefined;
/**
 * Reserved for API integrations that lack the ability to specify a real measurement unit See [MeasurementUnitGeneric](#type-measurementunitgeneric) for possible values
 * @member {String} generic_unit
 */
exports.prototype['generic_unit'] = undefined;
/**
 * Represents a standard unit of time. See [MeasurementUnitTime](#type-measurementunittime) for possible values
 * @member {String} time_unit
 */
exports.prototype['time_unit'] = undefined;
/**
 * Represents the type of the measurement unit. See [MeasurementUnitUnitType](#type-measurementunitunittype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;



module.exports = exports;



