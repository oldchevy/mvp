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
      './assets/latinguitar.wav',
      './assets/latinWalking1.wav',
      './assets/latinwalking2.wav',
      './assets/groovyRiff.wav',
      './assets/strumming1.wav',
      './assets/strumming2.wav',
      './assets/strumming3.wav'     
    ];


    var finishedLoading = function(bufferList) {

      //This is unfortunately very wet... I wonder if there is a better way to do this
      var drumming = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[0];
        return Music.pMaker(source, audioContext);
      };

      var latinStrumming = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[1];
        return Music.pMaker(source, audioContext);
      };

      var latinWalking1 = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[2];
        return Music.pMaker(source, audioContext);
      };

      var latinWalking2 = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[3];
        return Music.pMaker(source, audioContext);
      };

      var grooving = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[4];
        return Music.pMaker(source, audioContext);
      };

      var strumming1 = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[5];
        return Music.pMaker(source, audioContext);
      };
      var strumming2 = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[6];
        return Music.pMaker(source, audioContext);
      };
      var strumming3 = function() {
        var source = audioContext.createBufferSource();
        source.buffer = bufferList[7];
        return Music.pMaker(source, audioContext);
      };

      eval(codeString);

    };

    //Wrap this all in the code where we load up the audio clip buffers
    var audioContext = new AudioContext();
    var bufferLoader = new Music.BufferLoader(audioContext, clipsList, finishedLoading);
    bufferLoader.load();

  }; 

  return {
    runCode: runCode,
  };
});