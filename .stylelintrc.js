const { propertyOrdering, selectorOrdering } = require('stylelint-semantic-groups');

module.exports = {
  'extends': 'stylelint-config-sass-guidelines',
  'plugins': [
    'stylelint-order',
  ],
  'rules': {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        'ignorePseudoElements': [
          '/^ng-/',
          'pseudo-element'
        ]
      }
    ],
    'order/properties-alphabetical-order': null,
    'order/order': selectorOrdering,
    'order/properties-order': propertyOrdering,
    'selector-max-id': 1
  }
}
