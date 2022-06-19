import { Amplify } from "aws-amplify";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Embed from "./Embed";
import logo from "./AnyCLogo.png";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const drawerWidth = 240;
const navItems = ["Logout"];

function App({ signOut }) {
  return (
    <Authenticator loginMechanisms={["username"]} variation="modal">
      {({ signOut, user }) => (
        <main>
          <Container sx={{ p: 2 }} maxWidth="sm">
            <AppBar>
              <Box
                component="img"
                sx={{
                  height: auto;
                  max-width: 30%;
                }}
                src={logo}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                AnyCompany Dashboard
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </AppBar>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
              <Typography variant="h4" component="div" gutterBottom>
                Hello {user.username}
              </Typography>
              <Button variant="contained" onClick={signOut}>
                <Typography variant="button" display="block" gutterBottom>
                  Logout
                </Typography>
              </Button>
              <Embed />
            </Box>
          </Container>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
