# My personal blog
- 2021-08-27: Removed Python script that connects to Notion api. From now on, the blog is simply a static site built with GatsbyJS

## Setup for development

- One must install dependencies via `yarn` with:

```bash
yarn
```

- Launch sample pages

```bash
gatsby develop
```
Note: `FAST_DEV` flag is enabled inside `gatsby-config.js`

- Create a dev directory to hold dev scripts (will not be committed):

```bash
cp -r bin bin_dev
```

- To run all files through Prettier formatter:

```bash
yarn format
```
