'use strict';

/**
 * department-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::department-user.department-user');
