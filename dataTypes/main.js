// Write code to convert the following into something for the computer and something for the human;

// var fullText1 = "MAN67584758;Manchester Piccadilly"; // -> Expected Solution: Computer: MAN67584758, Human: Manchester Piccadilly

// var fullText2 = "GNF5767465;Greenfield"; // -> Expected Solution: Computer: GNF5767465, Human: Greenfield

// var fullText3 = "LIV5hg65hd7374;Liverpool Lime Street"; // -> Expected Solution: Computer: LIV5hg65hd7374, Human: Liverpool Lime Street

// var fullText4 = "SYB4f;Stalybridge"; // -> Expected Solution: Computer: SYB4f, Human: Stalybridge

const fullText5 = "HUD5767ghtyfyr45;Huddersfield"; // -> Expected Solution: Computer: HUD5767ghtyfyr45, Human: Huddersfield

// console.log("Computer: " + computerText + ", Human:" + humanText);

const stringConverter = (str) => {
  const dividerArray = str.split(";");
  console.log(`Computer: ${dividerArray[0]}, Human: ${dividerArray[1]}`);
};
stringConverter(fullText5);

let str = "Hello World.";
str = str.replace(".", "!");
console.log(str);
