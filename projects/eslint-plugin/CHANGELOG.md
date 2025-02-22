## [eslint-plugin/v1.3.0](https://github.com/liferay/liferay-frontend-projects/tree/eslint-plugin/v1.3.0) (2022-06-15)

[Full changelog](https://github.com/liferay/liferay-frontend-projects/compare/eslint-plugin/v1.2.0...eslint-plugin/v1.3.0)

### :new: Features

-   feat(eslint-plugin): handful of additions ([\#949](https://github.com/liferay/liferay-frontend-projects/pull/949))
-   feat(eslint-plugin): add new rule against A.Url ([\#807](https://github.com/liferay/liferay-frontend-projects/pull/807))
-   feat(eslint-plugin): Add new rule that preferes length checks ([\#815](https://github.com/liferay/liferay-frontend-projects/pull/815))

### :book: Documentation

-   docs(eslint-plugin): Update eslint docs ([\#835](https://github.com/liferay/liferay-frontend-projects/pull/835))

## [eslint-plugin/v1.2.0](https://github.com/liferay/liferay-frontend-projects/tree/eslint-plugin/v1.2.0) (2021-12-08)

[Full changelog](https://github.com/liferay/liferay-frontend-projects/compare/eslint-plugin/v1.1.0...eslint-plugin/v1.2.0)

### :wrench: Bug fixes

-   fix(eslint-plugin): update aui rules to only error if used outside of an aui module ([\#781](https://github.com/liferay/liferay-frontend-projects/pull/781))
-   fix(eslint-plugin): dataset uses camelCased keys instead of kebab-case. ([\#754](https://github.com/liferay/liferay-frontend-projects/pull/754))

## [eslint-plugin/v1.1.0](https://github.com/liferay/liferay-frontend-projects/tree/eslint-plugin/v1.1.0) (2021-11-04)

[Full changelog](https://github.com/liferay/liferay-frontend-projects/compare/eslint-plugin/v1.0.0...eslint-plugin/v1.1.0)

### :new: Features

-   add new rule to check for null before typeof object
-   add new rule to disalllow anonymous functions as exports
-   add new rule to disallow 'use strict' in es modules
-   add one-var rule to our rulelist
-   add plugin to enforce 'catch' for every promise
-   add rule for enforcing useState naming pattern
-   add rule for useRef naming pattern
-   add rule to avoid explicit references to localhost
-   add rule to make sure expect() has an assertion
-   add rule to prefer dataset
-   apply new sorting rule
-   enable eqeqeq rule to enforce type-safe equality operators
-   enable rule for sorting interface keys
-   enable valid-typeof rule
