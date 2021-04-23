const test = require('tape')
const hyper = require('./index')
const jwt = require('jsonwebtoken')

test('get url', t => {
	t.equal(
		hyper.url('data'),
		'https://test.hyper.io/data/foo'
	)
	t.end()
})

test('get token', t => {
	const token = hyper.token()
	jwt.verify(token, 'p', (err) => {
	  t.equal(err, null)
	  t.end()
	})
})


