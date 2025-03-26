module.exports = {
    testEnvironment: 'node', // ou 'jsdom' para testes no navegador
    transform: {
      '^.+\\.(t|j)sx?$': 'babel-jest', // ou 'ts-jest' se estiver usando TypeScript
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    setupFilesAfterEnv: ['./jest.setup.js'], // Arquivo opcional para configuração global
  };  