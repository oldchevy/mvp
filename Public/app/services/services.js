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

      console.log('The buffer loader worked');
      eval(codeString);
      
      var source1 = audioContext.createBufferSource();
      var source2 = audioContext.createBufferSource();
      source1.buffer = bufferList[0];
      source2.buffer = bufferList[1];

      source1.connect(audioContext.destination);
      source2.connect(audioContext.destination);
      source1.onended = function() {
        console.log('Event handler worked');
        source2.start();
      };
      source1.start();
    };

    var bufferLoader = new Music.BufferLoader(audioContext, clipsList, finishedLoading);

    bufferLoader.load();

  }; 

  return {
    runCode: runCode,
  };
});