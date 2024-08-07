const fp = require('fastify-plugin');
const apiRouter = require('./routes/api/apiRouter');
const db = require('./db/index');
const todoRepository = require('./repository/todoRepository');
const todoService = require('./services/todoService');

async function app(fastify, options) {
    await fastify.register(db);
    await fastify.register(todoRepository);
    await fastify.register(todoService);

    fastify.register(apiRouter, {prefix: '/api'});
}

module.exports = fp(app);