const GeoPattern = require('geopattern')

const pattern = (text = 'Noodles 2') =>
  GeoPattern.generate(text, { baseColor: '#ff6d00' })

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(pattern(req.query.slug).toString())
}
