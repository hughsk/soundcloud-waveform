var test     = require('tape')
var waveform = require('./')

test('Track URL', function(t) {
  waveform('ded451c6d8f9ff1c62f72523f49dab68'
  , 'https://soundcloud.com/intuitiv/whats-left'
  , function(err, wave) {
    if (err) return t.fail(err.message)
    t.ok(wave.length, 'wave has a length and it\'s above 1')
    t.end()
  })
})

test('Waveform URL', function(t) {
  waveform('ded451c6d8f9ff1c62f72523f49dab68'
  , 'https://w1.sndcdn.com/keeC0JO7VtsY_m.png'
  , function(err, wave) {
    if (err) return t.fail(err.message)
    t.ok(wave.length, 'wave has a length and it\'s above 1')
    t.end()
  })
})
