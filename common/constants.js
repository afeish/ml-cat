const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DASET_DIR + "/json";
constants.IMG_DIR = constants.DASET_DIR + "/img";
constants.SAMPLES = constants.DASET_DIR + "/samples.json";
constants.JS_OBJECTS = "../common/js_objects";
constants.SAMPLES_JS = constants.JS_OBJECTS + "/samples.js";
constants.FEATURES = constants.DASET_DIR + "/features.json";
constants.FEATURES_JS = constants.JS_OBJECTS + "/features.js";
constants.MINMAX_JS = constants.JS_OBJECTS + "/minMax.js";
if (typeof module !== "undefined") {
  module.exports = constants;
}
