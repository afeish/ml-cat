const constants = require("../common/constants");
const utils = require("../common/utils");

const KNN = require("../common/classifiers/knn");

const fs = require("fs");

console.log("RUNNIGN CLASSFICATION ...");

const { samples: traingSamples } = JSON.parse(
  fs.readFileSync(constants.TRAINING)
);

const knn = new KNN(traingSamples, 50);

const { samples: testingSamples } = JSON.parse(
  fs.readFileSync(constants.TESTING)
);

let totalCount = 0;
let correctCount = 0;
for (const sample of testingSamples) {
  const { label: predictedLabel } = knn.predict(sample.point);
  correctCount += predictedLabel == sample.label;
  totalCount++;
}

console.log(
  "ACCURACY: " +
    correctCount +
    "/" +
    totalCount +
    " (" +
    utils.formatPercent(correctCount / totalCount) +
    ")"
);

console.log(`GENERATING DECISION BOUNDARY ...`);

const { createCanvas } = require("canvas");
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    const point = [x / canvas.width, 1 - y / canvas.height];
    const { label } = knn.predict(point);
    const color = utils.styles[label].color;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }
}

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(constants.DECISION_BOUNDARY, buffer);
console.log(`DONE.`);
