module.exports = {
    testEnvironment: 'node', // Среда выполнения тестов
    transform: {
        '^.+\\.js$': 'babel-jest' // Обработка JS файлов с помощью babel-jest
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
    ],
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    coverageDirectory: 'coverage'
};