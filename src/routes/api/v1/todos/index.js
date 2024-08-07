const { getAllTodos, createTodo, getOneTodo } = require('../../../../controllers/todoController');

async function todoRouter(fastify, options) {
   fastify.get('/', getAllTodos)
   fastify.post('/', createTodo)
   fastify.get('/:id', getOneTodo)
}

module.exports = todoRouter;