[![codecov](https://codecov.io/gh/neurobagel/react-bagel/graph/badge.svg?token=mK0zZ2A86F)](https://codecov.io/gh/neurobagel/react-bagel)
![Tests](https://github.com/neurobagel/react-bagel/actions/workflows/tests.yaml/badge.svg)
![Checks](https://github.com/neurobagel/react-bagel/actions/workflows/checks.yaml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# React Bagel

This template provides a minimal setup to get React working in Vite with HMR along with Cypress, Typescript, tailwind, ESLint, husky, and lint staged configured.

---

### **Important Note**

After using this template to create your own repository, you must update the **Codecov token** in the [`tests.yaml`](https://github.com/neurobagel/react-bagel/blob/main/.github/workflows/tests.yaml) file for Codecov to work. Replace the `token` field in the [`upload coverage to Codecov`](https://github.com/neurobagel/react-bagel/blob/a84fc0a18f6c430bc69793c5ac3518d72b48059d/.github/workflows/tests.yaml#L132) job with your repository's unique Codecov token.

---

- Project structure
  - bulletproof react: https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md
- Tests
  - e2e with cypress
  - component with cypress
  - unit with vitest
- Code
  - format prettier (with minor changes)
  - linting eslint
  - style airbnb
  - typescript
- CI
  - lintstaged
  - spellcheck
  - coverage with istanbul/nyc and codecov
- UI
  - MUI
  - tailwind
