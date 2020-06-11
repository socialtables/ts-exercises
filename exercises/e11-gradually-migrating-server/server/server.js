const restify = require('restify');
const Logger = require('@socialtables/logger');
const OnUncaughtException = require('./middleware/uncaught-exception.js');
const routes = require('./routes');

const {ContextMiddleware, LoggingMiddleware} = Logger.RestifySupport();

module.exports = (config, rootLogger) => {
  const server = restify.createServer({
    name: config.name,
    version: config.version,
    log: rootLogger,
  });

  if (config.eventIndexerQueue) {
    Object.assign(server, {
      eventIndexerQueueConfig: {
        config: config.eventIndexerQueue,
        logger: rootLogger,
      },
    });
  }

  server.pre(ContextMiddleware());
  server.pre(LoggingMiddleware({ignorePaths: ['/health-check']}));
  server.use(restify.plugins.bodyParser({maxBodySize: config.maxBodySize}));
  server.use(restify.plugins.queryParser());

  routes(server);

  // Handle uncaught exceptions
  server.on('uncaughtException', OnUncaughtException);
  // Handle generic errors, which get emitted as ""
  server.on('', (req, res, err) => {
    if (err) {
      OnUncaughtException(req, res, req.path(), err);
    }
  });

  return server;
};
