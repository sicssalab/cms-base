'use strict';

/**
 * message-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::message-post.message-post');
