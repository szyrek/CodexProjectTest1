# Features

This document records completed features after each task is fulfilled. Move the completed task file to `work/completed/` and summarize the outcome here.

## 2025-07-25 - Version 0.0.1
- Initialized workflow scaffolding with CI template and governance documents.
- Added persistent messaging system for inter-agent communication via files in `messages/`.
- Added VERSION.txt with initial version 0.0.1.

## 2025-07-26 - Version 0.0.2
- Organized messages into `inbox/` and `read/` directories.
- Roles move processed messages from inbox to read and reference prior messages in replies.

## 2025-07-27 - Version 0.0.3
- Added `scripts/bootstrap.sh` for easy setup of new Codex projects.

## 2025-07-28 - Version 0.0.4
- Onboarded `ts_dev` and `qa_engineer` roles for the TypeScript physics project.
- Moved their initial tasks to `work/in_progress/`.

## 2025-07-29 - Version 0.0.5
- Created initial Node.js project using TypeScript.
- Added Jest configuration and sample vector class with test.
- Provided npm scripts for build, test, and lint.

## 2025-07-30 - Version 0.0.6
- Implemented `Vector3` subtract and scale operations.
- Added `RigidBody` class with delta-time based integration.
- Created Jest tests covering new physics features.
- Added CI workflow running lint, tests, and doc parity checks.
- Configured Jest coverage thresholds at 90% line and 80% branch.
- Documented testing strategy using `npm test`.
