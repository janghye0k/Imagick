import { Magick } from '@imagemagick/magick-wasm';

onmessage = function (event) {
  console.log(event);
};

Magick.onLog = console.log;
