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

constants.TRAINING = constants.DASET_DIR + "/training.json";
constants.TRAINING_CSV = constants.DASET_DIR + "/training.csv";
constants.TRAINING_JS = constants.JS_OBJECTS + "/training.js";
constants.TESTING = constants.DASET_DIR + "/testing.json";
constants.TESTING_CSV = constants.DASET_DIR + "/testing.csv";
constants.TESTING_JS = constants.JS_OBJECTS + "/testing.js";
constants.DECISION_BOUNDARY = constants.DASET_DIR + "/decision_boundary.png";
if (typeof module !== "undefined") {
  module.exports = constants;
}
