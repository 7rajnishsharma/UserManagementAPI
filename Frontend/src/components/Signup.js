import Card from "./UI/Card/Card";
import classes from "./Login/Login.module.css";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import useInput from "./../hooks/use-input";

const Signup = (props) => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailInputHandler,
    reset: resetEmail,
  } = useInput((value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordInputHandler,
    reset: resetPassword,
  } = useInput((value) => value.length > 7);

  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameInputHandler,
    reset: resetName,
  } = useInput((value) => value.length > 3);

  const {
    value: selectedRole,
    hasError: roleHasError,
    isValid: roleIsValid,
    valueChangeHandler: roleInputHandler,
    reset: resetRole,
  } = useInput((value) => value !== "");

  const submitHandler = (event) => {
    event.preventDefault();
    props.addUser({
      name: enteredName,
      email: enteredEmail.toLowerCase(),
      password: enteredPassword,
      role: selectedRole, // Include role in the submission
    });
    resetEmail();
    resetPassword();
    resetName();
    resetRole();
  };

  const formIsValid = emailIsValid && passwordIsValid && nameIsValid && roleIsValid;

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="name"
          label="Name"
          type="text"
          onChange={nameInputHandler}
          isValid={!nameHasError}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          onChange={emailInputHandler}
          isValid={!emailHasError}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          onChange={passwordInputHandler}
          isValid={!passwordHasError}
        />

        {/* Role selection dropdown */}
        <div className={classes.input}>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={selectedRole}
            onChange={roleInputHandler}
            className={`${classes.inputField} ${roleHasError ? classes.invalid : ""}`}
          >
            <option value="">Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Seller">Seller</option>
          </select>
          {roleHasError && <p className={classes.errorText}>Please select a role.</p>}
        </div>

        <h6 className={classes.error}>{props.error}</h6>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Sign Up
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Signup;
