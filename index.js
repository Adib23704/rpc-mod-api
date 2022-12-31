const fastify = require('fastify')({ logger: true })
fastify.register(require('./routes/main'));

const port = 80;

const start = async () => {
    try {
        await fastify.listen({ port });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();