const featureFns = {};

featureFns.getPathCount = (paths) => {
  return paths.length;
};

featureFns.getPointCount = (paths) => {
  const points = paths.flat();
  return points.length;
};

featureFns.getWidth = (paths) => {
  const points = paths.flat();
  const x = points.map((p) => p[0]);
  const min = Math.min(...x);
  const max = Math.max(...x);
  return max - min;
};

featureFns.getHeight = (paths) => {
  const points = paths.flat();
  const y = points.map((p) => p[1]);
  const min = Math.min(...y);
  const max = Math.max(...y);
  return max - min;
};

featureFns.inUse = [
  { name: "Width", function: featureFns.getWidth },
  { name: "Height", function: featureFns.getHeight },
  { name: "getPathCount", function: featureFns.getPathCount },
  { name: "getPointCount", function: featureFns.getPointCount },
];

if (typeof module !== "undefined") {
  module.exports = featureFns;
}
