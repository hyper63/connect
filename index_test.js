const test = require('tape')
const hyper = require('./index')
const jwt = require('jsonwebtoken')

test('get url', t => {
	t.equal(
		hyper.url('data'),
		'https://test.hyper63.com/data/foo'
	)
	t.end()
})

test('get url with identifier', t => {
  t.equal(
    hyper.url('data', '1'),
    'https://test.hyper63.com/data/foo/1'
  )
  t.end()
})

test('get url with identifier and group', t => {
  t.equal(
    hyper.url('data', '1', 'widgets'),
    'https://test.hyper63.com/data/foo/1/widgets'
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


