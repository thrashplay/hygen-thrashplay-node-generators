---
to: <%= projectDir %>/package.json
---
{
  "name": "<%= locals.name %>",
  "version": "0.1.0",
  "description": "<%= description %>",
  "private": true,
  "scripts": {
    "bootstrap": "yarn lerna bootstrap",
    "build": "yarn lerna run build",
    "release": "yarn lerna publish --conventional-commits",
    "test": "yarn lerna run test"
  },
  "dependencies": {
  },
  "devDependencies": {
    "app-root-path": "^2.2.1",
    "hygen": "^4.0.9",
    "lerna": "^3.16.4",
    "patch-package": "^6.2.0"
  }
}