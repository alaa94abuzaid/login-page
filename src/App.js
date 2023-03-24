import { LoginForm } from "./components/loginForm";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000001F",
    },
    secondary: {
      main: "#C3001E",
    },
    error: {
      main: "#B00020",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;
