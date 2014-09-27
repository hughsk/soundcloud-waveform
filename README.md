# soundcloud-waveform [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Get the waveform data for a given [SoundCloud](http://soundcloud.com/) track
URL as an array. Works with [node](http://nodejs.org) and
[browserify](http://browserify.org/).

## Usage

[![NPM](https://nodei.co/npm/soundcloud-waveform.png)](https://nodei.co/npm/soundcloud-waveform/)

### `waveform(client_id, url, callback)`

Takes a `client_id` and the resource's permalink `url`, calling
`callback(err, wavedata)` when complete.

`wavedata` is an array of amplitudes over time for the track. See
[waveform.js](http://waveformjs.org/) for further information.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/soundcloud-waveform/blob/master/LICENSE.md) for details.
