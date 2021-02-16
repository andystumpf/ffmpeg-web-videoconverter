
  return Module['return'];
}

if (typeof module !== "undefined") {
  module.exports = fn; 
} else {
  self['ffmpeg_run'] = fn;
}