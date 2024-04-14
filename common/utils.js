const utils = {};

utils.flaggedUsers = [1663053145814];

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
      group[val] = [];
    } else {
      group[val].push(el);
    }
  }
  return group;
};

if (typeof module !== "undefined") {
  module.exports = utils;
}
