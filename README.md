<a name="readme-top"></a>

<!-- PROJECT LOGO -->

<br />
<div align="center">
    <img src="https://iili.io/64kT2p.png" alt="Logo" width="150" height="150">
  </a>
<br />
<br />
  <h2 align="center">JENSENfy Backend</h2>
<br />
  <h3 align="center">
    An awesome music app created by group IV for Paketering, leverans och uppföljning!
  </h3>
</div>
<br />

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About Tis Project

<img src="https://iili.io/64LDl9.png" alt="Dashboard" >

The purpose of this project is to develope and deploy a music web application in which users are able to search for their favorite music, singer, band or genre and listen to them along with the specific lyrics.

Here's why:

- Noone likes to listen to music in one tab and look up the lyrics on the other; Unfortunately we dont live in a perfect world and many worldwide famous applications make you do that, still, in 2022, yes I'm looking at you Spotify! 😉
- Calling several APIs using a single server is something that we as a group have never done before and thought it'd be cool to do so.
- You should implement DRY principles to the rest of your life

Of course, no application is perfect, but this one is; At least we did our best!😅

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section lists the major frameworks/libraries used to bootstrap this project.

- [![React][react.js]][react-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![JQuery][jquery.com]][jquery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Once you have installed the dependencies, you can start by running the following command:

```bash
npm run devStart
```

### Installation

1. Get a free API Key at (https://developer.spotify.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Gogoreds/JENSENfy-backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```
5. You might need to install the following dependencies manualy:
   ```sh
    npm install --save-dev spotify-web-api-node
   ```
   ```sh
   npm install lyrics-finder
   ```
6. Run the following command to start the server:
   ```sh
    npm run devStart
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Mo Arefi - (https://www.linkedin.com/in/mo-arefi/) - m-arefi@live.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [To Get Your Free API Key](https://developer.spotify.com/)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [If You Want To Learn More About Spotify API](https://www.npmjs.com/package/spotify-web-api-node)
- [Lyrics Finder API](https://www.npmjs.com/package/lyrics-finder)
- [Swagger Inspiration](https://petstore.swagger.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
