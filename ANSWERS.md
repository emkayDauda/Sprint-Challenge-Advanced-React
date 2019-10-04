# Answers

- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components provide various lifecycle methods which make it easier and more readable to modify state in response to different events in an app.

- [ ] Name three lifecycle methods and their purposes.

- Answer: 1. `render()` - The purpose of the render method is to display (render) components unto the UI.
          2. `componentDidMount()` - This allows some operations (sideEffects?) to be carried out immediately a component is rendered.
          3. `componentDidUpdate()` - This method is called every time state changes.

- [ ] What is the purpose of a custom hook?

Answer - The most significant purpose of custom hooks is to avoid repetition in code. This means that any portion of code that may be repeated multiple times in an app is best refactored into its own custom hook.

- [ ] Why is it important to test our apps?

Answer - Testing provides a means of verifying that an app meets the product requirements. It is more useful in large apps where updating some other portion of the app may alter the behaviour of another portion. A failed test in that scenario is an early indication that something is wrong.
