angular.module('pSandbox.services', [])

.factory('Snippets', function ($http) {
  var addOne = function(data) {
    return $http({
      method: 'POST',
      url: '/data/snippets',
      data: data // {username: snippet: title:} JSON FORMATTED
    });
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/data/snippets'
    }).then(function(res) {
      return res.data;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})
.factory('Code', function ($http, $location, $window, Music) {

  var runCode = function(codeString) {

    var clipsList = [
      './assets/drums.wav',
      './assets/latinguitar.wav'
    ];

    var audioContext = new AudioContext();
    //Wrap this all in the code where we load up the audio clip buffers

    var finishedLoading = function(bufferList) {

      var drumming = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[0];
        return Music.pMaker(source, audioContext);
      };

      var strumming = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[1];
        return Music.pMaker(source, audioContext);
      };

      eval(codeString);

    };

    var bufferLoader = new Music.BufferLoader(audioContext, clipsList, finishedLoading);

    bufferLoader.load();

  }; 

  return {
    runCode: runCode,
  };
});