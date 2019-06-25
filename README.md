PR onAir [![Netlify Status](https://api.netlify.com/api/v1/badges/0cfcd3b9-05ff-443c-89d8-422a1f34211c/deploy-status)](https://app.netlify.com/sites/pronair/deploys) [![CircleCI](https://circleci.com/gh/pr-onair/website.svg?style=svg)](https://circleci.com/gh/pr-onair/website)
========

## Contents

* [How to run](#how-to-run)
* [Hosting](#hosting)
* [Developing](#developing)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## How to run

Install dependencies with preferably [`yarn`](https://yarnpkg.com/) and run one of the following commands:

| Command      | Description                                       |
|--------------|---------------------------------------------------|
| `yarn build` | Build css and the static site                     |
| `yarn watch` | Build, watch for changes and start a local server |


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Hosting

The site is hosted via [GitHub pages](https://pages.github.com/) and needs to be build to properly deploy.
The static files are being generated into the `./docs/` folder with [Cuttlebelle](https://cuttlebelle.com/).

As a suggestion for future development: [CircleCI](http://circleci.com/) has already been setup and the site deploys automatically to [Netlify](https://www.netlify.com/) but the domain needs to be changed over to point to the Netlify sites.

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Developing

The site was built with [Cuttlebelle](https://cuttlebelle.com/).
Configurations to the default settings of Cuttlebelle can be found in the `package.json` file.

Folder have been moved to make it easier for code and content to live separately:
```
"code": "code/layout",
"assets": "code/assets",
"site": "docs",
"docs": "docs/docs",
```

And the markdown render has been extended via the [`./code/markdown/index.js`](https://github.com/pr-onair/website/blob/master/code/markdown/index.js) file.


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Dominik Wilkowski.
Licensed under [GNU-GPLv3](https://raw.githubusercontent.com/https://github.com/pr-onair/website.com/master/LICENSE).


**[⬆ back to top](#contents)**

# };
