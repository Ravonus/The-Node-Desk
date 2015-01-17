/**
 * Companies.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        companyName: {
            type: 'string',
            required: true
        },

        location: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: true,
            unique: true
        },

        billing: {
            type: 'string',
            required: true
        }

    }
};