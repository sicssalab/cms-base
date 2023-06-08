'use strict';

/**
 * gender-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gender-user.gender-user');
