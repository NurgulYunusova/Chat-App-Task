import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Layout = () => {
  const { isLoggedIn, logout, setName, name } = useContext(AuthContext);

  const handleLogout = () => {
    setName("");
    logout();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Stack direction="row" spacing={2} flexGrow={1}>
            <Typography
              color="white"
              noWrap
              variant="h6"
              component={NavLink}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              ChatApp
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {isLoggedIn ? (
              <>
                <Typography
                  color="white"
                  noWrap
                  variant="h6"
                  component={NavLink}
                  to="/"
                  sx={{ textDecoration: "none" }}
                >
                  {name}
                </Typography>
                <Button
                  component={NavLink}
                  to="/signin"
                  variant="outlined"
                  color="inherit"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={NavLink}
                  to="/signin"
                  variant="outlined"
                  color="inherit"
                >
                  Sign In
                </Button>
                <Button
                  component={NavLink}
                  to="/signup"
                  variant="outlined"
                  color="inherit"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
