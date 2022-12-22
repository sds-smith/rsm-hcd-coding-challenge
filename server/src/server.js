const http = require('http');

const {mongoConnect} = require('./services/mongo');
const {loadBreweriesData} = require('./models/breweries/breweries.model')

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadBreweriesData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    });
};

startServer();