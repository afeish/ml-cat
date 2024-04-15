if (typeof utils === "undefined") {
  utils = require("../utils");
}
class KNN {
  constructor(samples, k) {
    this.samples = samples;
    this.k = k;
  }

  predict(point) {
    const samplePoints = this.samples.map((s) => s.point);
    const indices = utils.getNearest(point, samplePoints, this.k);
    const nearestSamples = indices.map((i) => this.samples[i]);
    const labels = nearestSamples.map((s) => s.label);
    const count = {};
    for (const label of labels) {
      count[label] = count[label] ? count[label] + 1 : 1;
    }
    const max = Math.max(...Object.values(count));
    const label = labels.find((l) => count[l] == max);
    return { label: label, nearestSamples };
  }
}

if (typeof module !== "undefined") {
  module.exports = KNN;
}
