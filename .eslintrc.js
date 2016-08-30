module.exports = {
    'extends': 'airbnb',
    'env': {
      'mocha': true,
      'es6': true,
      'node': true,
      'browser': true
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "jsx": true
    },
    'plugins': [
        'react',
    ],
    'rules': {
      'no-alert': 2,
      'prop-types': 0,
      'indent': [1, 4],
      'react/jsx-indent': [1, 4]
    }
};
