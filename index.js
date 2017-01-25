
const express = require('express')
const GeoPattern = require('geopattern')

const pattern = (text = 'Noodles') => (
  GeoPattern.generate(text, { baseColor: '#ff6d00' }).toString()
)

express().get('/:text?', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.set('Content-Type', 'image/svg+xml')
  res.send(pattern(req.params.text))
}).listen(4000)
