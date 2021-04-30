const jwt = require('jsonwebtoken')

if (!process.env.HYPER) { throw new Error('HYPER connection string is not set') }

const u = new URL(process.env.HYPER)

module.exports = {
  url: (svc, ...paths) => 
    [{svc, paths}]
      .map(({svc, paths}) => ({svc, pathname: [u.pathname, ...paths].join('/')}))
      .map(({svc, pathname}) => `https://${u.host}/${svc}${pathname}`)
      .shift()
  ,
	token: () => jwt.sign({ sub: u.username }, u.password)
}
