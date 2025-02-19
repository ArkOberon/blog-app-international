<div>   
  <img src="https://github.com/ArkOberon/blog-app-international/blob/dev/project-banner-blog-app.png?raw=true" alt="banner" />
 
  <div align="center">
    <img src="https://img.shields.io/badge/-react-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-sass-black?style=for-the-badge&logoColor=white&logo=sass&color=CC6699" alt="sass" />
    <img src="https://img.shields.io/badge/-css-black?style=for-the-badge&logoColor=white&logo=css&color=663399" alt="css" />
    <img src="https://img.shields.io/badge/-Bootstrap-black?style=for-the-badge&logoColor=white&logo=bootstrap&color=7952B3" alt="bootstrap" />
    <img src="https://img.shields.io/badge/-react_bootstrap-black?style=for-the-badge&logoColor=white&logo=reactbootstrap&color=41E0FD" alt="reactbootstrap" />
    <img src="https://img.shields.io/badge/-crowdin-black?style=for-the-badge&logoColor=white&logo=crowdin&color=2E3340" alt="crowdin" />
    <img src="https://img.shields.io/badge/-vercel-black?style=for-the-badge&logoColor=white&logo=vercel&color=000000" alt="vercel" />
    <img src="https://img.shields.io/badge/-redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-wordpress-black?style=for-the-badge&logoColor=white&logo=wordpress&color=21759B" alt="wordpress" />
    <img src="https://img.shields.io/badge/-graphql-black?style=for-the-badge&logoColor=white&logo=graphql&color=E10098" alt="graphql" />
  </div>

  <h3 align="center">Blog App Multilanguage (beta)</h3>
  <div align="center">
    Multilanguage web application that allows to use a wordpress headless as a CMS and at the same time integrate it to the frontend in NextJS. In this case, we would use the Wordpress API to display the different blog posts, as well as categories and subcategories.
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Installation](#id1)
2. [Environment variables](#id2)
3. [Translation management](#id3)
4. [Automated Version Control](#id4)
5. [Sitemaps Generator](#id5)


## **1. Installation** <div id='id1' />

**Prerequisites**

Make sure you have the following installed on your machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Wordpress](https://wordpress.org/download/) 

Make sure you have the following plugins installed on your wordpress:
- [WPGraphQL](https://www.wpgraphql.com/)
- [WPGraphQL for ACF](https://acf.wpgraphql.com/)
- [WPGraphQL JWT](https://github.com/wp-graphql/wp-graphql-jwt-authentication)

Check the src/pages/api folder and make sure to add the GrapQL queries to your Wordpress Headless

The application has been developed with [`ReactJS`](https://react.dev/learn) using the metaframework [`NextJS`](https://nextjs.org/docs). It used [`create-next-app`](https://nextjs.org/docs/getting-started/installation) so it requires NodeJS to be installed. In order to use the repository in a local development environment it is required:

Execute package installation command:

```bash
npm install

```

Execute command to start server in development mode:

```bash
npm run dev

```

## **2. Environment variables** <div id='id2' />

For the correct functioning of the APP, the environment variables must be used. Create a **.env.local** file in the repository root folder (**IMPORTANT:** It must be at the same level as the package.json or README.md file. Do not insert in /src or any other existing folder).

````bash
# IMPORTANT: These variables are for the local development environment only.
# Do not use these values in production environments.
````

Copy and paste the following variables into the **.env.local** file

```env
# .env

#
# API URL
#
NEXT_PUBLIC_API_URL = "https://yourapiwordpressheadles.com/v1"

#
# HOST WEB URL
#
NEXT_PUBLIC_SITE_NAME = "Hermenautas"
NEXT_PUBLIC_HOST_URL = "http://localhost:3000"
NEXT_PUBLIC_PORT = 3000

```

## **3. Translation management** <div id='id3' />

To manage the translations we use the [`next-intl`](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/) dependency and integrate it with the [`crowdin`](https://crowdin.com/) platform with which we can synchronise all the translations of our frontends without the need to send information manually to the translations team.

All English translations are registered in the ‘messenger’ folder in the file en.json.

In order to properly use the crowdin middleware you must follow the installation instructions of the [`Crowdin CLI`](https://crowdin.github.io/crowdin-cli/installation).

Once installed you can push the en.json file to the translation team.


```bash
crowdin push
```

When the translation team has finished translating you can use the pull to get all translated files in all languages.

```bash
crowdin pull
```

## **4. Automated Version Control** <div id='id4' />

### How to commit?

To add a commit, enter the following command:

```bash
git commit -a
```

A new terminal opens in VIM.

Write the commit type: fix, feat, docs, etc. (following the parameters set in the package.json lines 70 to 85).

EXAMPLE
```bash
fix: this is a bug fix
```

```bash
feat: this is an important update
```

Exit VIM terminal using ctrl+c then introduce the following command and press enter

```bash
:wq
```

Execute release-it

```bash
npm run release
```

You can Configure Release according to the needs of the project.
For +Info see [`Official Documentation`](https://github.com/release-it/release-it)

## **5. Performing the Installation** <div id='id5' />
An automatic sitemap generator for Google Search Console using next-sitemap is implemented. [`Next Sitemap`](https://github.com/iamvishnusankar/next-sitemap)
