const { send } = require('micro')
const { router, get } = require('microrouter')
const GeoPattern = require('geopattern')

const pattern = (text = 'Noodles 2') =>
  GeoPattern.generate(text, { baseColor: '#ff6d00' })

const data = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'image/svg+xml')
  send(res, 200, pattern(req.params.text).toString())
}

module.exports = router(get('/', data), get('/:text', data))
