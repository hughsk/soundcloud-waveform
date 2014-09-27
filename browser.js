var resolve = require('soundcloud-resolve')
var remove  = require('remove-element')
var qs      = require('querystring/')
var url     = require('url/')

module.exports = getWaveform

var count  = Math.floor(1000000 * Math.random())
var prefix = 'soundcloud_waveform_'

function getWaveform(client_id, uri, done) {
  var host = url.parse(uri).hostname
  if (host.indexOf('sndcdn.com') !== -1) {
    return handle(uri)
  }

  resolve(client_id, uri, function(err, data) {
    if (err) return done(err)
    handle(data.waveform_url)
  })

  // Why JSONP but not Access-Control-Allow-Origin? :(
  function handle(uri) {
    var script = document.createElement('script')
    var name = prefix + count++
    var wuri = 'http://www.waveformjs.org/w?' + qs.stringify({
        url: uri
      , callback: name
    })

    script.src = wuri
    document.body.appendChild(script)

    window[name] = resolved
    function resolved(wave) {
      delete window[name]
      remove(script)
      done(null, wave)
    }
  }
}
