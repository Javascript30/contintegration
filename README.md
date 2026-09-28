# Continuous Integration & Testing

This project is a hands-on space for learning CI/CD, automated tests, and code formatting. As the project evolves, use the scripts in `package.json` and CI configuration as the source of truth for exact commands.

## Checks

Run the test suite and check formatting before committing:

```bash
npm test
npx prettier . --check
```

```bash
    // Adding prettier and ensuring evryone uses the same one
    npm install -save-dev --save-exact prettier
```

Format files with Prettier:

```bash
npx prettier . --write
```

If `package.json` provides dedicated scripts, use those (for example, `npm run test` or `npm run format`).

## What I'm learning

- **CI (continuous integration):** automatically run checks for changes pushed or proposed for merge.
- **Testing:** catch regressions and verify that code behaves as expected.
- **Prettier:** keep formatting consistent and let CI detect formatting issues.
- **CD (continuous delivery/deployment):** build on passing checks to prepare or release changes reliably.

## A typical CI pipeline

1. Check out the code and set up the required runtime.
2. Install dependencies from the lockfile.
3. Run automated tests and the Prettier check.
4. Report failures so they can be fixed before merging.

The pipeline's exact steps depend on the configuration in this repository.
