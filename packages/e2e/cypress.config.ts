import {defineConfig} from 'cypress'
import codeCoverageTask from '@cypress/code-coverage/task'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            codeCoverageTask(on, config);
            return config
        },
    },
    defaultCommandTimeout: 15000, // Sets the timeout for commands like .get(), .click(), .type(), etc.
    requestTimeout: 15000, // Sets the timeout for cy.request() calls.
    pageLoadTimeout: 60000, // Sets the timeout for cy.visit() and cy.go() calls.
    responseTimeout: 15000,
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
    env: {
        codeCoverage: {
            coverage: true
        },
    },
})
