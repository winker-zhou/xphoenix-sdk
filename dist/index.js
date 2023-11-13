
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./xphoenix-sdk.cjs.production.min.js')
} else {
  module.exports = require('./xphoenix-sdk.cjs.development.js')
}
