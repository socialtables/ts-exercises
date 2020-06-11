const Logger = require('@socialtables/logger');
const createServer = require('./server/server');
const config = require('./config');

const rootLogger = Logger.init({
  name: config.name,
});

const server = createServer(config, rootLogger);
server.listen(config.port, () => {
  rootLogger.info(
    `${
      config.name
    } ${`v${config.version} [${config.env}] listening on ${config.port}`}`
  );
});

module.exports = {config, createServer};
