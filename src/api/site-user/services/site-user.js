'use strict';

/**
 * site-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-user.site-user');
