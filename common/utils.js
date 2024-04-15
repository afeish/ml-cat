const utils = {};

utils.flaggedUsers = [1663053145814];

utils.flaggedSamples = [
  509, 514, 515, 499, 658, 714, 715, 803, 802, 805, 804, 842, 890, 898, 1363,
  1362, 1364, 1366, 1365, 1367, 1426, 1487, 1579, 1587, 1610, 1611, 1627, 1938,
  1965, 2018, 2020, 2022, 2031, 2069, 2488, 2603, 2652, 2723, 2850, 2904, 2965,
  3080, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3197, 3381, 3382, 3383, 3384,
  3379, 3378, 3403, 3399, 3426, 3430, 3429, 3428, 3427, 3538, 3539, 3540, 3541,
  3542, 3543, 3544, 3562, 3694, 3698, 3699, 3702, 3703, 3704, 3714, 3717, 3875,
  3878, 3995, 4004, 4006, 4008, 4005, 4010, 4043, 4211, 4475, 4610, 4611, 4612,
  4613, 4614, 4615, 4701, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4874, 4875,
  4876, 4877, 4878, 4879, 4880, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4950,
  4955, 4954, 4956, 4957, 4958, 4959, 4960, 4967, 4968, 4962, 4963, 5258, 5259,
  5260, 5261, 5262, 5263, 5264, 5256, 5255, 5254, 5250, 5365, 5366, 5367, 5368,
  5364, 5391, 5390, 5392, 5389, 5388, 5386, 5431, 5432, 5430, 5429, 5428, 5540,
  5541, 5542, 5543, 5544, 5627, 5628, 1315, 683, 659, 643, 434, 435, 436, 437,
  438, 439, 440, 379, 381, 354, 339, 568, 608, 640, 760, 893, 1295, 1966, 1999,
  2040, 2679, 2749,
];

utils.classes = [
  "car",
  "fish",
  "house",
  "tree",
  "bicycle",
  "guitar",
  "pencil",
  "clock",
];

utils.styles = {
  car: { color: "gray", text: "🚗" },
  fish: { color: "red", text: "🐟" },
  house: { color: "yellow", text: "🏠" },
  tree: { color: "green", text: "🌳" },
  bicycle: { color: "cyan", text: "🚲" },
  guitar: { color: "blue", text: "🎸" },
  pencil: { color: "magenta", text: "✏️" },
  clock: { color: "lightgray", text: "🕰️" },
};

utils.styles["?"] = { color: "red", text: "❓" };

utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
};

utils.printProgess = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(count / max);
  process.stdout.write(count + "/" + max + " (" + percent + ")");
};

utils.groupBy = (arr, key) => {
  const group = {};
  for (let el of arr) {
    let val = el[key];
    if (group[val] == null) {
      group[val] = [el];
    } else {
      group[val].push(el);
    }
  }
  return group;
};

utils.distance = (p1, p2) => {
  return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
};

utils.getNearest = (loc, points, k = 1) => {
  const obj = points.map((val, ind) => {
    return { ind, val };
  });
  const sorted = obj.sort((a, b) => {
    return utils.distance(loc, a.val) - utils.distance(loc, b.val);
  });
  const indices = sorted.map((obj) => obj.ind);
  return indices.slice(0, k);
};

utils.invLerp = (a, b, v) => {
  return (v - a) / (b - a);
};

utils.normalizePoints = (points, minMax) => {
  let min, max;
  const dim = points[0].length;
  if (minMax) {
    min = minMax.min;
    max = minMax.max;
  } else {
    min = [...points[0]];
    max = [...points[0]];
    for (let i = 1; i < points.length; i++) {
      for (let j = 0; j < dim; j++) {
        min[j] = Math.min(min[j], points[i][j]);
        max[j] = Math.max(max[j], points[i][j]);
      }
    }
  }
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < dim; j++) {
      points[i][j] = utils.invLerp(min[j], max[j], points[i][j]);
    }
  }

  return { min, max };
};

utils.toCsv = (headers, samples) => {
  let str = headers.join(",") + "\n";
  for (const sample of samples) {
    str += sample.join(",") + "\n";
  }
  return str;
};

if (typeof module !== "undefined") {
  module.exports = utils;
}
