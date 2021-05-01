const jwt = require('jsonwebtoken')

if (!process.env.HYPER) { throw new Error('HYPER connection string is not set') }

const u = new URL(process.env.HYPER)

/**
 * @param {string} svc - hyper service
 * @param {...string} paths - zero to many additional path names
 * @retuns {string}
 */
function url(svc, ...paths) {
  // 0 dependency identity functor
  return [{svc, paths}]
      .map(({svc, paths}) => ({svc, pathname: [u.pathname, ...paths].join('/')}))
      .map(({svc, pathname}) => `https://${u.host}/${svc}${pathname}`)
      .shift()
}

/**
 * @param {object} [payload]
 * @returns {string}
 */
function token(payload) {
  return jwt.sign({ sub: u.username, ...payload}, u.password)
}

module.exports = { url, token }
