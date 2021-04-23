const jwt = require('jsonwebtoken')

if (!process.env.HYPER) { throw new Error('HYPER connection string is not set') }

const u = new URL(process.env.HYPER)

module.exports = {
	url: svc => `https://${u.host}/${svc}${u.pathname}`,
	token: () => jwt.sign({ sub: u.username }, u.password)
}
