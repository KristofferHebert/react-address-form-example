This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Concepts
The purpose of this project is to have an Address form in React that applies specific input validation rules and displays individual error comments. I was originally going to write this in TypeScript, but I thought of future developers who don't know TypeScript. I rely on PropTypes for type validation.

For state management, I used "useContext" hook to make it easy to get the values from the Address Form without prop drilling. A larger more mature application should use useReducer or Redux to keep state management simple as the application grows.

Input validation and onChange handling at the Address form component level. The input components are dummy components that only consume those values. This makes it much easier to extend and test forms. Input validation is stored in a separate utility file and is written in a way that allows other developers to easily add more validations in the future.

# Future Improvements
If I had more time...

- Prettier script or hook
- Prepush hook that runs tests before pushing code
- I would to add more tests to the Address form component to validate all inputs
- Refactor inputs to handle form types like select, radio
- Refactor Address form into reusable Form factory Component that uses a form schema
- Refactor form to use react form lib like formatik or unform for faster development and more complex forms

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.