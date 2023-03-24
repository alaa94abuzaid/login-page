# Login page App

## Getting Started

### Running the frontend

1. `npm i`
2. `npm start`

You can now view login page in the browser http://localhost:3000

### Login

You can use any valid format email and any password for login

## Description

Login page App is a single login page with a login form including logo, email, and password input text fields and a login button.
Both fields are required, there is an validation on email filed to check if the entered value is a valid email format.
Once you entered a valid email address and any password and click on the login button you can see a successfully logged in message.

## Structure

The `src/components` directory represents the components including the login form, which called in `src/App.js`.
Also there are helpers folders;
- `src/constant` includes external static link to fetch the logo.
- `src/strings` includes strings used in the login form.
- `src/utils` includes validate email function.

## CSS Modules

This repo utilizes component-level CSS Modules to organize its styles. Login form have an adjacent
`ComponentName.module.css` file that can be imported into its `.jsx`. These classes
are used to set the `className` property on various `jsx` elements.
