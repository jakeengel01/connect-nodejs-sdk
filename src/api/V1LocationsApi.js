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
var V1Merchant = require('../model/V1Merchant');

/**
 * V1Locations service.
 * @module api/V1LocationsApi
 */

/**
 * Constructs a new V1LocationsApi. 
 * @alias module:api/V1LocationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * @deprecated
   * ListLocations
   * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.  ---  - __Deprecation date__: 2019-11-20 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2020-11-18 - [Migration guide](/migrate-from-v1/guides/v1-locations)  ---
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Merchant>} and HTTP response
   */
  this.listLocationsWithHttpInfo = function() {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: V1LocationsApi.listLocations");
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-12-17';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Merchant];

    return this.apiClient.callApi(
      '/v1/me/locations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListLocations
   * Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.  ---  - __Deprecation date__: 2019-11-20 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2020-11-18 - [Migration guide](/migrate-from-v1/guides/v1-locations)  ---
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Merchant>}
   */
  this.listLocations = function() {
    return this.listLocationsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * RetrieveBusiness
   * Get the general information for a business.  ---  - __Deprecation date__: 2019-11-20 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2020-11-18 - [Migration guide](/migrate-from-v1/guides/v1-locations)  ---
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Merchant} and HTTP response
   */
  this.retrieveBusinessWithHttpInfo = function() {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: V1LocationsApi.retrieveBusiness");
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-12-17';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Merchant;

    return this.apiClient.callApi(
      '/v1/me', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveBusiness
   * Get the general information for a business.  ---  - __Deprecation date__: 2019-11-20 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2020-11-18 - [Migration guide](/migrate-from-v1/guides/v1-locations)  ---
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Merchant}
   */
  this.retrieveBusiness = function() {
    return this.retrieveBusinessWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
