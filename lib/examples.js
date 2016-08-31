// Press RUN IT to hear the clip!

drumming();

//Try these too!

//strumming1();
//latinWalking1();
//strumming3();




// Try chaining promises!

latinStrumming().then(function() {
  return latinWalking2();
}).then(function() {
  return drumming();
});


// Explore promise behavior with sounds!

//Example 1: when then blocks don't return promises, they fall
//through and continue execution

drumming().then(function() {
  grooving();
}).then(strumming1);



// Explore promise behavior with sounds!

//Example 2: Promises can be invoked outside of chaining

drumming().then(strumming2()).then(strumming1);




// Explore promise behavior with sounds!

//Example 3: It's not necessary to wrap a Promise in an anonymous function

strumming1().then(strumming2).then(strumming3).then(grooving);


// Make your own music!

strumming2()
  .then(function() {
    strumming2();
    return strumming1();
  })
  .then(function() {
    drumming();
    grooving();
    return strumming2();
  })
  .then(function() {
    strumming1();
    strumming2();
  });
  