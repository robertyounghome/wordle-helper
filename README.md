# Wordle Helper

Enter your Wordle results, word by word, press enter to search.
Wordle Helper will give you a list of words below that could be your answer.
See the screen shots for an idea, it looks very similar to the Wordle game.

Upon entering the following for the first word:

![Screenshot](/img/wordle-shot1.png)

The results are as follows:

![Screenshot](/img/wordle-shot2.png)

Now we enter another word:

![Screenshot](/img/wordle-shot3.png)

The results are further filtered as follows:

![Screenshot](/img/wordle-shot4.png)

# Installing Wordle Helper 

This repository contains two main parts:
    1) React front end (Installed via npx create-react-app wordle-helper)
    2) Flask (pip install Flask python-dotenv)

Each is run as follows:
    1) yarn start
    2) yarn start-api

# Installing the Wordle python package

This front end consumes the Python code as stored in my github wordle repository: https://github.com/robertyounghome/wordle-python

This can also be downloaded to your environment, or you can install it as a package from TestPyPi as follows:

python3 -m pip install --index-url https://test.pypi.org/simple/ wordle-robertyounghome 

# The word list
Yes, a Wordle word search can only be as good as its list. Or in this case, its lists. I tried loading five letter words from my LINUX operating system, but I found this list of words to be very incomplete. I also found a word list that was used at Stanford University (I believe), but I also rejected this word list. Finally, I found two lists that you can find in my api directory:

wordle-allowed-guesses.txt and wordle-answers-alphabetical.txt 

It appears that Wordle does indeed use two lists. One list is to validate your word guesses. And the other is a list of the possible answers, or in our case here it is ordered alphabetically, because in the original version of this list it is actually ordered in the same order as the Wordle of the day, and who wants to ruin all of our fun?

# Feel free to contact me with any questions and or comments
email: robertyounghome@gmail.com

Enjoy.

--------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

