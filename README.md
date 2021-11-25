# Github Action Template

This is a template repository for creating new Github Actions.

## Prerequisites

None

## Running

Add action `eficode/github-action-template@latest` to your actions. The outputs of the action (if any) can be used in the following actions with `${{ steps.<your action id>.outputs.output_example }}`.

```
name: Using the Github Action Template

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
    - uses: eficode/github-action-template@latest
      id: output_id
      with:
        input_example: "input"
    - name: update status
      run: |
        echo "output_example: ${{ steps.output_id.outputs.output_example }}"
```

## Building

```bash
npm run build
```

## Releasing

Release writes [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to `CHANGELOG.md`, creates a new tag for the next version and pushes the changes. Actions in `release.yml` will then create a new release in Github.

```bash
npm run release
```

## Testing

You can run the tests with:

```bash
npm test
```

And lint with:

```bash
npm run lint
```
