# Test Strategy

Testing uses Jest with `ts-jest`. The default goal is 90% line coverage and 80% branch coverage.

Run tests locally with:

```bash
npm test
```

CI will fail if coverage falls below the configured thresholds.
