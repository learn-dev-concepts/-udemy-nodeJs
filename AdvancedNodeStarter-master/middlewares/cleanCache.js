const { clearHash } = require('../services/cache');

// looks dangerous
module.exports = async (req, res, next) => {
  await next();

  clearHash(req.user.id);
}