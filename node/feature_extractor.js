const constants = require("../common/constants");
const featureFns = require("../common/feature_fns");
const utils = require("../common/utils");
const fs = require("fs");

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES));

for (const sample of samples) {
  const paths = JSON.parse(
    fs.readFileSync(constants.JSON_DIR + "/" + sample.id + ".json")
  );
  const fns = featureFns.inUse.map((fn) => fn.function);
  sample.point = fns.map((f) => f(paths));
}

const minMax = utils.normalizePoints(samples.map((s) => s.point));

const featureNames = featureFns.inUse.map((f) => f.name);
fs.writeFileSync(
  constants.FEATURES,
  JSON.stringify({
    featureNames,
    samples: samples.map((s) => {
      return {
        point: s.point,
        label: s.label,
      };
    }),
  })
);
fs.writeFileSync(
  constants.FEATURES_JS,
  `const features = ${JSON.stringify({ featureNames, samples })};`
);
fs.writeFileSync(
  constants.MINMAX_JS,
  `const minMax = ${JSON.stringify(minMax)};`
);
console.log("done");
