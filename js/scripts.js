function encrypt(text) {
  const noSpaceText = text.replace(/[\W0-9_]/gi, "");
  const numOfColumns = Math.floor(Math.sqrt(noSpaceText.length));
  const frame = [];

  let tempArray = [];
  let positionCounter = 0;

  for (let i = 0; i < noSpaceText.length; i++) {
    tempArray.push(noSpaceText[i]);
    positionCounter++;
    if (positionCounter === numOfColumns || i === noSpaceText.length - 1 ) {
      //push and reset
      frame.push(tempArray);
      tempArray = [];
      positionCounter = 0;
    }
  }
  console.table(frame);
  let codedText = "";
  fiveCounter = 0;

  for (let j = 0; j < frame[0].length; j++) {
    for (let i = 0; i < frame.length; i++) {
      if (frame[i][j]) {
        if (fiveCounter === 5) {
          codedText += " ";
          fiveCounter = 0;
        }
        codedText += frame[i][j];
        fiveCounter++;
      }
    }
  }
  console.log(codedText);
}

//edge cases: 0, 1, low numbers, punct,

// make a square
// calc the number of characters (remove spaces)
// use square if possible
// use the number of columns that corresponds to the closest square

// push/populate rectangle
// traverse and parse 5 character strings, concatenating them to a string

//ui logic
$(document).ready(function () {
  $("form#word-form").submit(function (event) {
    event.preventDefault();
    const text = $("#input1").val();
    const table = encrypt(text);
    $("#display").html(table);
  });
});
