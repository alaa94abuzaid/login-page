import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

import { StaticLink } from "../../constant/staticLink";
import { LOGIN_FORM_TEXT } from "../../strings/loginForm";
import { validateEmail } from "../../utils/validateEmail";
import styles from "./loginForm.module.css";

const {
  EMAIL,
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  LOGIN,
  LOGO_ALT,
  PASSWORD,
  PASSWORD_REQUIRED,
  SUCCESS_MSG,
  WHITE_SPACE,
} = LOGIN_FORM_TEXT;

export const LoginForm = () => {
  const [email, setEmail] = useState({
    //   helperText initial value is white space to reserve a location for error message and avoid fields movement,
    //   this increase the height of fields (including the height of error message) which increase the space between fields when there is no errors, same for password
    helperText: WHITE_SPACE,
    error: false,
    value: null,
  });

  const [password, setPassword] = useState({
    error: false,
    value: null,
  });

  const [isLoginSucceed, setIsLoginSucceed] = useState(false);

  const handleEmailChange = (e) => {
    setIsLoginSucceed(false);
    setEmail({
      helperText: WHITE_SPACE,
      error: false,
      value: e.target.value,
    });
  };

  const handleEmailBlur = () => {
    if (!email.value) {
      setEmail({ ...email, helperText: EMAIL_REQUIRED, error: true });
    } else if (!validateEmail(email.value)) {
      setEmail({
        ...email,
        helperText: `${email.value}${INVALID_EMAIL}`,
        error: true,
      });
    }
  };

  const handlePasswordChange = (e) => {
    setIsLoginSucceed(false);
    setPassword({
      error: false,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Below code is to validate email when it is auto filled by browser
    let isEmailValid = false;

    if (!email.error) {
      isEmailValid = validateEmail(email.value);
      setEmail({
        ...email,
        error: !isEmailValid,
        helperText: !isEmailValid
          ? `${email.value}${INVALID_EMAIL}`
          : WHITE_SPACE,
      });
    }

    if (email.value && password.value && isEmailValid && !password.error) {
      setIsLoginSucceed(true);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <img alt={LOGO_ALT} className={styles.logo} src={StaticLink.logo} />
        <TextField
          className={styles.textField}
          color="primary"
          error={email.error}
          fullWidth
          helperText={email.helperText}
          label={EMAIL}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          required
          variant="outlined"
        />
        <TextField
          className={styles.textField}
          error={password.error}
          fullWidth
          helperText={password.error ? PASSWORD_REQUIRED : WHITE_SPACE}
          label={PASSWORD}
          onBlur={() => setPassword({ ...password, error: !password.value })}
          onChange={handlePasswordChange}
          required
          type="password"
          variant="outlined"
        />
        <Button color="secondary" type="submit" variant="contained">
          {LOGIN}
        </Button>
        {isLoginSucceed && (
          <Typography
            align="left"
            className={styles.success}
            variant="subtitle1"
          >
            {SUCCESS_MSG}
          </Typography>
        )}
      </form>
    </div>
  );
};
