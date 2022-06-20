import { Amplify } from "aws-amplify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import Embed from "./Embed";
import logo from "./AnyCLogo.png";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Toolbar } from "@mui/material";

Amplify.configure(awsExports);

const drawerWidth = 240;
const navItems = ["Logout"];

function App({ signOut }) {
  return (
    <Authenticator loginMechanisms={["username"]} variation="modal">
      {({ signOut, user }) => (
        <main>
          <Container sx={{ p: 2 }} maxWidth="sm">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      p: 2,
                      maxWidth: 200,
                      objectFit: "scale-down",
                    }}
                    src={logo}
                  />

                  <Button color="inherit" onClick={signOut}>
                    Logout
                  </Button>
                </Toolbar>
              </AppBar>
            </Box>

            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
              <Embed />
            </Box>
          </Container>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
