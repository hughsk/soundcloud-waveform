var resolve = require('soundcloud-resolve')
var qs      = require('querystring')
var request = require('request/')
var url     = require('url/')

module.exports = getWaveform

function getWaveform(client_id, uri, done) {
  var host = url.parse(uri).hostname
  if (host.indexOf('sndcdn.com') !== -1) {
    return handle(uri)
  }

  resolve(client_id, uri, function(err, data) {
    if (err) return done(err)
    handle(data.waveform_url)
  })

  function handle(uri) {
    var wuri = 'http://www.waveformjs.org/w?' + qs.stringify({
      url: uri
    })

    request.get(wuri, function(err, res, body) {
      done(err, body)
    })
  }
}
