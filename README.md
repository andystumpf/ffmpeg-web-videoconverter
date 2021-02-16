# .smk to .mp4 converter

A JavaScript library that runs in the browser and converts .smk files into .mp4 files using FFmpeg and libx264.

## Building

    docker run --rm -v $(pwd):/src -it apiaryio/emcc:1.35 bash -c 'apt update && apt -y install binutils pkg-config && cd /src/build && ./build.sh'
