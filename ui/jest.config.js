module.exports = {
    globalSetup: "jest-preset-angular/global-setup",
    preset: "jest-preset-angular",
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$",
        },
    },
    // setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
    reporters: ["default"],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/utils/",
        "<rootDir>/src/test.ts",
        "<rootDir>/libs/test.ts",
        "<rootDir>/src/app - Copy/",
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|js|mjs|html)$": "jest-preset-angular",
    },
    moduleNameMapper: {
        "@sttx/(.*)": "<rootDir>/libs/src/ui-elements/$1",
    },
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ["ts", "html", "js", "json", "mjs"],
    resolver: "jest-preset-angular/build/resolvers/ng-jest-resolver.js",
    testResultsProcessor: "./resultsProcessor"
};
