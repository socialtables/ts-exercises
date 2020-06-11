const {BadRequestError} = require('restify-errors');
const {evaluate} = require('mathjs');

module.exports = (server) => {
  server.get('/health-check', (req, res, next) => {
    res.send('I am fine. How are you?');
    return next();
  });
  server.get('/add', (req, res, next) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);

    if (isNaN(a) || isNaN(b)) {
      return next(new BadRequestError('a and b need to be numbers'));
    }

    res.send((a + b).toString());
    return next();
  });
  server.get('/calc', (req, res, next) => {
    const expression = req.query.expr;

    try {
      const calced = evaluate(expression);

      if (calced) {
        res.send(calced.toString());
        return next();
      }
    } catch (err) {
      return next(new BadRequestError(`invalid expression: ${err}`));
    }
    return next(new BadRequestError('invalid expression'));
  });
};
