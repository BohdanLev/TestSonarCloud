module.exports = function() {
    require('./node_modules/jest-junit-reporter').apply(this, arguments);
    return require('./node_modules/jest-sonar-reporter').apply(this, arguments);
}