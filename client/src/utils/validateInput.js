const userRegex = /^\w{4,12}$/;
const passwordRegex = /^(?=.*[A-Z])[A-Za-z0-9!£$%^&*()_+-=[\]{}:@~#,./\\]{8,}$/;
const emailRegex = /\S+@\S+\.\S+/;

export default (name, val, currentUserData) => {
  switch (name) {
    case "username": 
      if (val) {
        if (true) { //DB Check if username exists.
          if (userRegex.test(val)) {
            return [true, null];
          } else {
            return [false, "Username must be between 4-12 characters, with no spaces or symbols."];
          }
        } else {
          return [false, "That username is already in use."];
        }
      } else {
        return [false, "Field cannot be empty."];
      }
    case "email": 
      if (val) {
        if (true) { //DB Check if email exists
          if (emailRegex.test(val)) {
            return [true, null]
          } else {
            return [false, "Email format must match example@email.com"];
          }
        } else {
          return [false, "That email is already in use."];
        }
      } else {
        return [false, "Field cannot be empty"];
      }
    case "password": 
      if (val) {
        if (passwordRegex.test(val)) {
          return [true, null];
        } else {
          return [false, "Password must be at least 8 characters, with one uppercase and no spaces."];
        }
      } else {
        return [false, "Field cannot be empty"];
      }
    case "confirmPassword": 
      if (val) {
        if (val === currentUserData.password) {
          return [true, null];
        } else {
          return [false, "Passwords do not match"];
        }
      } else {
        return [false, "Field cannot be empty"];
      }
      default: {
        return [true, " "];
      }
  }
}