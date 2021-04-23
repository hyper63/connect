<h1 align="center">@hyper.io/connect</h1>
<p align="center">@hyper.io/connect is a configuration module for hyper clients, this module gives the developer two functions: `url` and `token`, which can take a `hyperio` connection string and create the proper url for a given service and the secure token to access that service.</p>
<p align="center"><img src="https://github.com/hyper63/connect/workflows/.github/workflows/test.yml/badge.svg" /></p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Install the `@hyper.io/connect` module

`npm install @hyper.io/connect`

Create an environment variable called `HYPER`

```sh
export HYPER=hyperio://u:p@test.hyper.io/svc
```

Use the `@hyper.io/connect` module in your Data Access Layer (DAL)

```js
import hyper from '@hyper.io/connect'

async function query(selector) {
await fetch(hyper.url('data') + '/_query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${hyper.token()}`
  },
  body: JSON.stringify({
    selector
  })
  .then(r => r.json())
})

query({ type: 'widget'}).then(console.log.bind(console))
```

## Installation

`npm install @hyper.io/connect`

or

`yarn add @hyper.io/connect`

## Features

* url

This method takes a hyper service port as an argument
and returns a full url to access the service for an app.

Currently, hyper supports the following service ports:

* data
* cache
* search
* storage
* queue

``` js
import hyper from '@hyper.io/connect'

console.log(hyper.url('search'))
```

* token

This method takes no arguments and returns a token based on the 
hyper connection string that should give the client secure access
to the hyper service.



## Contributing

All contributions welcome.

## License

Apache 2.0


