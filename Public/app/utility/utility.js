angular.module('pSandbox.utils', [])

.factory('Music', function() {
    
  //This buffer loader object lets us abstract away the details of loading up
  //our various clips asynchronously. It actually works using am async map, like from the toy problems!
  //That's cool!
  var BufferLoader = function(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  };

  BufferLoader.prototype.loadBuffer = function(url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    var loader = this;

    request.onload = function() {
      // Asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response,
        function(buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
          }
          loader.bufferList[index] = buffer;
          if (++loader.loadCount === loader.urlList.length) {
            loader.onload(loader.bufferList);
          }
        },
        function(error) {
          console.error('decodeAudioData error', error);
        }
      );
    };

    request.onerror = function() {
      alert('BufferLoader: XHR error');
    };

    request.send();
  };

  BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i) {
      this.loadBuffer(this.urlList[i], i);
    }
  };

  var pMaker = function(snipSource, audioContext) {
    return new Promise(function(resolve, reject) {
      snipSource.connect(audioContext.destination);
      snipSource.start();
      snipSource.onended = function() {
        resolve();
      };
    });
  };

  return {
    BufferLoader: BufferLoader,
    pMaker: pMaker
  };

});