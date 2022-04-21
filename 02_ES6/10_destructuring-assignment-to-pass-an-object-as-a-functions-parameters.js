
/**
 * Destructuring Assignment to Pass an Object as a Function's Parameters
 * In some cases, you can destructure the object in a function argument itself.
 */

// Instead of doing this:
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;
// }

// You can do this
const profileUpdate = ({ name, age, nationality, location }) => {
}

/**
 * When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
 */

 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;
