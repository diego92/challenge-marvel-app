# Marvel challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

### [`Node JS`](https://nodejs.org/es/)

As a prerequisite it is necessary to have Node JS installed in your development environment

### [`Yarn`](https://yarnpkg.com/) - Optional

Yarn installs packages in parallel. Yarn is optimized to fetch and install multiple packages simultaneously. This project has created with Yarn.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install the necessary dependencies to be able to compile the project in development mode.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Libraries Used

[Material UI](https://mui.com/) - For the application style

[React Router DOM](https://reactrouter.com/) - For the definition of the application routes

[Axios](https://github.com/axios/axios) - For HTTP requests

[md5](https://github.com/pvorb/node-md5) - For hashing messages

## Info

Set the following environment variables:

- REACT_APP_API_URL=????
- REACT_APP_API_KEY=????
- REACT_APP_PRIVATE_KEY=????

The api url used is https://gateway.marvel.com:443/v1/public