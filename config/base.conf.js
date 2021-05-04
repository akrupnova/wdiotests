module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        './test/specs/navigation.spec.js'
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us',

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]],

    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
}
