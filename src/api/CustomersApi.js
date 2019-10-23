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
var CreateCustomerCardRequest = require('../model/CreateCustomerCardRequest');
var CreateCustomerCardResponse = require('../model/CreateCustomerCardResponse');
var CreateCustomerRequest = require('../model/CreateCustomerRequest');
var CreateCustomerResponse = require('../model/CreateCustomerResponse');
var DeleteCustomerCardResponse = require('../model/DeleteCustomerCardResponse');
var DeleteCustomerResponse = require('../model/DeleteCustomerResponse');
var ListCustomersResponse = require('../model/ListCustomersResponse');
var RetrieveCustomerResponse = require('../model/RetrieveCustomerResponse');
var SearchCustomersRequest = require('../model/SearchCustomersRequest');
var SearchCustomersResponse = require('../model/SearchCustomersResponse');
var UpdateCustomerRequest = require('../model/UpdateCustomerRequest');
var UpdateCustomerResponse = require('../model/UpdateCustomerResponse');

/**
 * Customers service.
 * @module api/CustomersApi
 */

/**
 * Constructs a new CustomersApi. 
 * @alias module:api/CustomersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateCustomer
   * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;company_name&#x60; - &#x60;email_address&#x60; - &#x60;phone_number&#x60;
   * @param {module:model/CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCustomerResponse} and HTTP response
   */
  this.createCustomerWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createCustomer");
    }


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
    var returnType = CreateCustomerResponse;

    return this.apiClient.callApi(
      '/v2/customers', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateCustomer
   * Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;company_name&#x60; - &#x60;email_address&#x60; - &#x60;phone_number&#x60;
   * @param {module:model/CreateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCustomerResponse}
   */
  this.createCustomer = function(body) {
    return this.createCustomerWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateCustomerCard
   * Adds a card on file to an existing customer.  As with charges, calls to &#x60;CreateCustomerCard&#x60; are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.  Cards on file are automatically updated on a monthly basis to confirm they are still valid and can be charged.
   * @param {String} customerId The Square ID of the customer profile the card is linked to.
   * @param {module:model/CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateCustomerCardResponse} and HTTP response
   */
  this.createCustomerCardWithHttpInfo = function(customerId, body) {
    var postBody = body;

    // verify the required parameter 'customerId' is set
    if (customerId === undefined || customerId === null) {
      throw new Error("Missing the required parameter 'customerId' when calling createCustomerCard");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createCustomerCard");
    }


    var pathParams = {
      'customer_id': customerId
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
    var returnType = CreateCustomerCardResponse;

    return this.apiClient.callApi(
      '/v2/customers/{customer_id}/cards', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateCustomerCard
   * Adds a card on file to an existing customer.  As with charges, calls to &#x60;CreateCustomerCard&#x60; are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.  Cards on file are automatically updated on a monthly basis to confirm they are still valid and can be charged.
   * @param {String} customerId The Square ID of the customer profile the card is linked to.
   * @param {module:model/CreateCustomerCardRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateCustomerCardResponse}
   */
  this.createCustomerCard = function(customerId, body) {
    return this.createCustomerCardWithHttpInfo(customerId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteCustomer
   * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to delete merged profiles.
   * @param {String} customerId The ID of the customer to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteCustomerResponse} and HTTP response
   */
  this.deleteCustomerWithHttpInfo = function(customerId) {
    var postBody = null;

    // verify the required parameter 'customerId' is set
    if (customerId === undefined || customerId === null) {
      throw new Error("Missing the required parameter 'customerId' when calling deleteCustomer");
    }


    var pathParams = {
      'customer_id': customerId
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
    var returnType = DeleteCustomerResponse;

    return this.apiClient.callApi(
      '/v2/customers/{customer_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteCustomer
   * Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to delete merged profiles.
   * @param {String} customerId The ID of the customer to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteCustomerResponse}
   */
  this.deleteCustomer = function(customerId) {
    return this.deleteCustomerWithHttpInfo(customerId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteCustomerCard
   * Removes a card on file from a customer.
   * @param {String} customerId The ID of the customer that the card on file belongs to.
   * @param {String} cardId The ID of the card on file to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteCustomerCardResponse} and HTTP response
   */
  this.deleteCustomerCardWithHttpInfo = function(customerId, cardId) {
    var postBody = null;

    // verify the required parameter 'customerId' is set
    if (customerId === undefined || customerId === null) {
      throw new Error("Missing the required parameter 'customerId' when calling deleteCustomerCard");
    }

    // verify the required parameter 'cardId' is set
    if (cardId === undefined || cardId === null) {
      throw new Error("Missing the required parameter 'cardId' when calling deleteCustomerCard");
    }


    var pathParams = {
      'customer_id': customerId,
      'card_id': cardId
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
    var returnType = DeleteCustomerCardResponse;

    return this.apiClient.callApi(
      '/v2/customers/{customer_id}/cards/{card_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteCustomerCard
   * Removes a card on file from a customer.
   * @param {String} customerId The ID of the customer that the card on file belongs to.
   * @param {String} cardId The ID of the card on file to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteCustomerCardResponse}
   */
  this.deleteCustomerCard = function(customerId, cardId) {
    return this.deleteCustomerCardWithHttpInfo(customerId, cardId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListCustomers
   * Lists a business&#39;s customers.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   * @param {String} opts.sortField Indicates how Customers should be sorted. Default: &#x60;DEFAULT&#x60;.
   * @param {String} opts.sortOrder Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order. Default: &#x60;ASC&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCustomersResponse} and HTTP response
   */
  this.listCustomersWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'cursor': opts['cursor'],
      'sort_field': opts['sortField'],
      'sort_order': opts['sortOrder']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-10-23';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListCustomersResponse;

    return this.apiClient.callApi(
      '/v2/customers', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListCustomers
   * Lists a business&#39;s customers.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   * @param {String} opts.sortField Indicates how Customers should be sorted. Default: &#x60;DEFAULT&#x60;.
   * @param {String} opts.sortOrder Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order. Default: &#x60;ASC&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCustomersResponse}
   */
  this.listCustomers = function(opts) {
    return this.listCustomersWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveCustomer
   * Returns details for a single customer.
   * @param {String} customerId The ID of the customer to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveCustomerResponse} and HTTP response
   */
  this.retrieveCustomerWithHttpInfo = function(customerId) {
    var postBody = null;

    // verify the required parameter 'customerId' is set
    if (customerId === undefined || customerId === null) {
      throw new Error("Missing the required parameter 'customerId' when calling retrieveCustomer");
    }


    var pathParams = {
      'customer_id': customerId
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
    var returnType = RetrieveCustomerResponse;

    return this.apiClient.callApi(
      '/v2/customers/{customer_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveCustomer
   * Returns details for a single customer.
   * @param {String} customerId The ID of the customer to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveCustomerResponse}
   */
  this.retrieveCustomer = function(customerId) {
    return this.retrieveCustomerWithHttpInfo(customerId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchCustomers
   * Searches the customer profiles associated with a Square account. Calling SearchCustomers without an explicit query parameter returns all customer profiles ordered alphabetically based on &#x60;given_name&#x60; and &#x60;family_name&#x60;.
   * @param {module:model/SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchCustomersResponse} and HTTP response
   */
  this.searchCustomersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchCustomers");
    }


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
    var returnType = SearchCustomersResponse;

    return this.apiClient.callApi(
      '/v2/customers/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchCustomers
   * Searches the customer profiles associated with a Square account. Calling SearchCustomers without an explicit query parameter returns all customer profiles ordered alphabetically based on &#x60;given_name&#x60; and &#x60;family_name&#x60;.
   * @param {module:model/SearchCustomersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchCustomersResponse}
   */
  this.searchCustomers = function(body) {
    return this.searchCustomersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateCustomer
   * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to update merged profiles.  You cannot edit a customer&#39;s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-customers-createcustomercard) endpoint.
   * @param {String} customerId The ID of the customer to update.
   * @param {module:model/UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateCustomerResponse} and HTTP response
   */
  this.updateCustomerWithHttpInfo = function(customerId, body) {
    var postBody = body;

    // verify the required parameter 'customerId' is set
    if (customerId === undefined || customerId === null) {
      throw new Error("Missing the required parameter 'customerId' when calling updateCustomer");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateCustomer");
    }


    var pathParams = {
      'customer_id': customerId
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
    var returnType = UpdateCustomerResponse;

    return this.apiClient.callApi(
      '/v2/customers/{customer_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateCustomer
   * Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to update merged profiles.  You cannot edit a customer&#39;s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-customers-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-customers-createcustomercard) endpoint.
   * @param {String} customerId The ID of the customer to update.
   * @param {module:model/UpdateCustomerRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateCustomerResponse}
   */
  this.updateCustomer = function(customerId, body) {
    return this.updateCustomerWithHttpInfo(customerId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
