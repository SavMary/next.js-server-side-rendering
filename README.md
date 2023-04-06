## **Project Title**
This project demonstrates different types of data rendering using Next.js, including server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and client-side rendering (CSR). The project is written in TypeScript using React and fetches all data from the https://mate.academy/students-api API.

**Getting Started**

To get started, clone the repository and run the following command:

`npm install`

This will install all the necessary dependencies. Once the installation is complete, you can start the development server by running:

`npm run dev`

This will start the server on http://localhost:3000.

**Features**

This project includes the following features:

* SSR: Server-side rendering is used to generate the initial HTML page on the server, which is then sent to the client. This improves SEO and initial page load time.
* SSG: Static site generation is used to generate pre-built HTML pages at build time. This improves performance for pages that don't change frequently.
* ISR: Incremental static regeneration is used to generate new HTML pages at runtime when data changes. This allows for dynamic content while still benefiting from the performance improvements of SSG.
* CSR: Client-side rendering is used to fetch and render data on the client after the initial page load. This allows for highly dynamic content.
*
**Technologies**

This project uses the following technologies:

* Next.js: A React-based framework for building server-rendered applications.
* TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
* React: A JavaScript library for building user interfaces.
* Fetch API: A modern, promise-based API for making HTTP requests.

**API Reference**

All data is fetched from the https://mate.academy/students-api API. Please refer to their documentation for details on the available endpoints and data format.

**Acknowledgments**

This project was inspired by the Next.js documentation.
Thanks to the team at https://mate.academy/students-api for providing the data used in this project.