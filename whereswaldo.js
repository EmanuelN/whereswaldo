function findWaldo(arr, found) {
  var i = 0
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(i);   // execute callback
    }
    i++
  })
}

function actionWhenFound(arrpos) {
  console.log("Found him at index " + arrpos);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);