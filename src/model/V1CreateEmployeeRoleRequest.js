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
var V1EmployeeRole = require('./V1EmployeeRole');




/**
 * The V1CreateEmployeeRoleRequest model module.
 * @module model/V1CreateEmployeeRoleRequest
 */

/**
 * Constructs a new <code>V1CreateEmployeeRoleRequest</code>.
 * 
 * @alias module:model/V1CreateEmployeeRoleRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1CreateEmployeeRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1CreateEmployeeRoleRequest} obj Optional instance to populate.
 * @return {module:model/V1CreateEmployeeRoleRequest} The populated <code>V1CreateEmployeeRoleRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('employee_role')) {
      obj['employee_role'] = V1EmployeeRole.constructFromObject(data['employee_role']);
    }
    }
  return obj;
}

/**
 * An EmployeeRole object with a name and permissions, and an optional owner flag.
 * @member {module:model/V1EmployeeRole} employee_role
 */
exports.prototype['employee_role'] = undefined;



module.exports = exports;



