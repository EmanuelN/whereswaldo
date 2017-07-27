function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(arrpos) {
  console.log("Found him at index " + arrpos);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);