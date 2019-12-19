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
 * The V1ListEmployeesRequest model module.
 * @module model/V1ListEmployeesRequest
 */

/**
 * Constructs a new <code>V1ListEmployeesRequest</code>.
 * 
 * @alias module:model/V1ListEmployeesRequest
 * @class
 */
var exports = function() {
  var _this = this;










};

/**
 * Constructs a <code>V1ListEmployeesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListEmployeesRequest} obj Optional instance to populate.
 * @return {module:model/V1ListEmployeesRequest} The populated <code>V1ListEmployeesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
      if (data.hasOwnProperty('begin_updated_at')) {
      obj['begin_updated_at'] = ApiClient.convertToType(data['begin_updated_at'], 'String');
    }
      if (data.hasOwnProperty('end_updated_at')) {
      obj['end_updated_at'] = ApiClient.convertToType(data['end_updated_at'], 'String');
    }
      if (data.hasOwnProperty('begin_created_at')) {
      obj['begin_created_at'] = ApiClient.convertToType(data['begin_created_at'], 'String');
    }
      if (data.hasOwnProperty('end_created_at')) {
      obj['end_created_at'] = ApiClient.convertToType(data['end_created_at'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('external_id')) {
      obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('batch_token')) {
      obj['batch_token'] = ApiClient.convertToType(data['batch_token'], 'String');
    }
    }
  return obj;
}

/**
 * The order in which employees are listed in the response, based on their created_at field.      Default value: ASC See [SortOrder](#type-sortorder) for possible values
 * @member {String} order
 */
exports.prototype['order'] = undefined;
/**
 * If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
 * @member {String} begin_updated_at
 */
exports.prototype['begin_updated_at'] = undefined;
/**
 * If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
 * @member {String} end_updated_at
 */
exports.prototype['end_updated_at'] = undefined;
/**
 * If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
 * @member {String} begin_created_at
 */
exports.prototype['begin_created_at'] = undefined;
/**
 * If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
 * @member {String} end_created_at
 */
exports.prototype['end_created_at'] = undefined;
/**
 * If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). See [V1ListEmployeesRequestStatus](#type-v1listemployeesrequeststatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * If provided, the endpoint returns only employee entities with the specified external_id.
 * @member {String} external_id
 */
exports.prototype['external_id'] = undefined;
/**
 * The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
 * @member {String} batch_token
 */
exports.prototype['batch_token'] = undefined;



module.exports = exports;



