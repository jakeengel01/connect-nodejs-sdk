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
var ListMerchantsResponse = require('../model/ListMerchantsResponse');
var RetrieveMerchantResponse = require('../model/RetrieveMerchantResponse');

/**
 * Merchants service.
 * @module api/MerchantsApi
 */

/**
 * Constructs a new MerchantsApi. 
 * @alias module:api/MerchantsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListMerchants
   * Returns &#x60;Merchant&#x60; information for a given access token.  If you don&#39;t know a &#x60;Merchant&#x60; ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant)  endpoint to get the merchant information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMerchantsResponse} and HTTP response
   */
  this.listMerchantsWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-10-23';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListMerchantsResponse;

    return this.apiClient.callApi(
      '/v2/merchants', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListMerchants
   * Returns &#x60;Merchant&#x60; information for a given access token.  If you don&#39;t know a &#x60;Merchant&#x60; ID, you can use this endpoint to retrieve the merchant ID for an access token. You can specify your personal access token to get your own merchant information or specify an OAuth token to get the information for the  merchant that granted you access.  If you know the merchant ID, you can also use the [RetrieveMerchant](#endpoint-merchants-retrievemerchant)  endpoint to get the merchant information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMerchantsResponse}
   */
  this.listMerchants = function() {
    return this.listMerchantsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveMerchant
   * Retrieve a &#x60;Merchant&#x60; object for the given &#x60;merchant_id&#x60;.
   * @param {String} merchantId The ID of the merchant to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveMerchantResponse} and HTTP response
   */
  this.retrieveMerchantWithHttpInfo = function(merchantId) {
    var postBody = null;

    // verify the required parameter 'merchantId' is set
    if (merchantId === undefined || merchantId === null) {
      throw new Error("Missing the required parameter 'merchantId' when calling retrieveMerchant");
    }


    var pathParams = {
      'merchant_id': merchantId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-10-23';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveMerchantResponse;

    return this.apiClient.callApi(
      '/v2/merchants/{merchant_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveMerchant
   * Retrieve a &#x60;Merchant&#x60; object for the given &#x60;merchant_id&#x60;.
   * @param {String} merchantId The ID of the merchant to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveMerchantResponse}
   */
  this.retrieveMerchant = function(merchantId) {
    return this.retrieveMerchantWithHttpInfo(merchantId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
