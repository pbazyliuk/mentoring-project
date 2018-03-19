# Movies app

## Development process

! Disabling pre-commit hooks is not acceptable.

! pull should be done with rebase `git pull --rebase`

1.  Create a branch from the develop branch with an appropriate name (see Branch naming below)
2.  Commit messages should be written as following:

`FEATURE/BUG: what was done`

### Branch Naming:

`feature/<github-issue>`
`bug/<github-issue>`

3.  Create a Pull Request in GitHub
4.  Tagging the PR with informative tags is prefered (feature/bug)
5.  Assign the PR to the team member performing code reviews

### Reviewing code

1.  When a PR is assigned to you start a review, providing useful feedback
2.  Once the branch is ready for testing, assign to appropriate person for merging

### Merging branches

1.  Merge the **feature** branch into the **develop** branch, ensuring a commit is created (no fast forward)
2.  Once tested, the feature branch should be merged into the **master** branch where it will be deployed

## Developing code

### Dependencies

Packages should be installed via yarn only. To install dependencies from package.json run `yarn`.

Packages should be added with `yarn add <packagename> [--dev]`. When adding a new npm package, `yarn.lock` will automatically be run and the new shrinkwrap should be committed into the feature branch.

### Static files

Static files such as fonts and images should be placed in the `app/static` folder.
