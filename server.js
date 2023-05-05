const babelRegister = require('@babel/register')

babelRegister({
  ignore: [/\/(build|server|node_modules)\//],
  presets: [['react-app', {runtime: 'automatic'}]],
  plugins: ['@babel/transform-modules-commonjs'],
})

const express = require('express')
const App = require('./src/App').default
const {renderToString} = require('react-dom/server')
const React = require('react')

const app = express()

app.use(express.static('dist'))
app.get('/', (req, res, next) => {
  const str = renderToString(React.createElement(App))
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id='root'>${str}</div>
    <script src='/main.js'></script>
  </body>
  </html>`)
})

app.listen(8888, () => {
  console.log('listening at 8888...')
})
