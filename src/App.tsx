import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Pages from "./app/pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#E6B800", // color seleccionado
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#E6B800", // línea inferior
        },
      },
    },
  },
});


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Pages />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;



