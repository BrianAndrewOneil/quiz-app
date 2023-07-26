# A Quiz App in React that Uses LocalStorage

This quiz app can handle any number of questions. The user can navigate through the quiz, answer the questions, and see their previous answers and update those if they'd like. Then, when the user is ready, they can have their quiz scored and review their results. Once scored, the user can review each question again and the app indicates whether their selected answer was correct and provides a rationale for the correct answer. The user can close their browser and return to the quiz later, and their previous answers will be saved. They can also clear their answers and retake the quiz as often as they'd like.

**Link to project:** https://quiz-react-oneil.netlify.app/

<img alt="image of web app" src="https://brianoneil.netlify.app/assets/img/portfolio/quiz.gif" width=50%>

## How It's Made

**Tech used:** HTML, CSS (bootstrap), and React. I use the browser's native localStorage to save the user's answers so that they can close their browser and return to the quiz at a later time without losing their work.

## Lessons Learned

This was a good refersher on using the features of react, including components, props, state, etc. 

## To Run It Yourself

In the project directory, you can run:

- clone repo
- npm install
- npm start

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
