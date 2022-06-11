# TopTrip UI

## Branch naming

**Allowed prefixes:**

- feature;
- fix;
- chore;
- refactor;
- hotfix _(for release branches only)_;

**Example of usage**: `feature/<short-description>`

## Versions increase

We increase version only when we deploy to production. To increase the prod version of the app you need to create a PR `develop -> main`, receive approvals, select `Squash and merge`, and the commit message field should contain one of types: `major, minor, or patch`. If none of the values were provided, `patch` will be applied.
