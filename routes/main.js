const { default: axios } = require('axios');
require('dotenv').config();

const httpClient = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 30 * 1e3,
    headers: {
        Accept: 'application/vnd.github.raw',
        Authorization: `token ${process.env.TOKEN}`
    }
});

function api(fastify, _options, done) {
    fastify.get('/', (_req, reply) => {
        reply.code(200).send({ status: true, message: 'Server is running...' });
    });

    fastify.get('/client/:ip', async (req, reply) => {
        let { data: data } = await httpClient.get('/repos/Adib23704/adib23704.github.io/contents/_old/useless/rpc.json');
        var len = Object.keys(data).length;
        
        for (let i = 0; i < len; i++) {
            if(data[i].ip == req.params.ip) {
                reply.code(200).send(data[i].client);
                break;
            }
        }
        reply.code(404).send('None');
    });
    fastify.get('/discord/:ip', async (req, reply) => {
        let { data: data } = await httpClient.get('/repos/Adib23704/adib23704.github.io/contents/_old/useless/rpc.json');
        var len = Object.keys(data).length;
        
        for (let i = 0; i < len; i++) {
            if(data[i].ip == req.params.ip) {
                reply.code(200).send(data[i].discord);
                break;
            }
        }
        reply.code(404).send('None');
    });
    fastify.get('/slot/:ip', async (req, reply) => {
        let { data: data } = await httpClient.get('/repos/Adib23704/adib23704.github.io/contents/_old/useless/rpc.json');
        var len = Object.keys(data).length;
        
        for (let i = 0; i < len; i++) {
            if(data[i].ip == req.params.ip) {
                reply.code(200).send(data[i].slot);
                break;
            }
        }
        reply.code(404).send('None');
    });
    fastify.get('/masked/:ip', async (req, reply) => {
        let { data: data } = await httpClient.get('/repos/Adib23704/adib23704.github.io/contents/_old/useless/rpc.json');
        var len = Object.keys(data).length;
        
        for (let i = 0; i < len; i++) {
            if(data[i].ip == req.params.ip) {
                reply.code(200).send(data[i].masked);
                break;
            }
        }
        reply.code(404).send('None');
    });
    done();
}

module.exports = api;