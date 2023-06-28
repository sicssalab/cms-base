'use strict';

/**
 * workstation-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workstation-user.workstation-user');
