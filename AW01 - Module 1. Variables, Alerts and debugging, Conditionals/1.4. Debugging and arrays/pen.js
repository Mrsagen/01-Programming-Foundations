let pens = [
    ["🐶", "🐶", "🐶"], // Pen 0
    ["🐱", "🐱"],       // Pen 1
    ["🐰"]              // Pen 2
];

for (let i = 0; i < pens.length; i++) {
    console.log(`Pen ${i} has ${pens[i].length} animals: ${pens[i].join(", ")}`);
    }

pens[0].push("🐶"); 
pens[1].pop();

pens[1] = pens[1].concat(pens[2]);
pens[2] = [];


//let rabbit = pens[2].shift();
//pens[1].push(rabbit);

//pens[2].concat[1] = "🐰";
//pens[0][3] = "🐶";
//pens[1] = ["🐱"];


for (let i = 0; i < pens.length; i++) {
    console.log(`Pen ${i} has ${pens[i].length} animals: ${pens[i].join(", ")}`);
    }