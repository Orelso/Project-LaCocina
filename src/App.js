import React, { useState } from "react";
import { styled, useTheme } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CssBaseline,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const theme = createTheme({
  typography: {
    fontFamily: '"Rock Salt", cursive',
  },
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const AppContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

const AppBarContainer = styled(AppBar)({
  padding: "0 1rem",
  "@media (min-width: 600px)": {
    padding: "0 2rem",
  },
});

const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0",
});

const SectionContainer = styled(Container)({
  marginBottom: "0.5rem",
  padding: "1rem",
  "@media (min-width: 600px)": {
    padding: "2rem",
  },
  width: "100%",
  maxWidth: "100%",
});

const SectionTitle = styled(Typography)({
  marginBottom: "0.25rem",
});

const SectionContent = styled(Box)({
  marginBottom: "0.5rem",
  backgroundColor: "#f5f5f5",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 600px)": {
    padding: "2rem",
  },
});

const CardContainer = styled(Card)({
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginBottom: "0.5rem",
});

function App() {
  const [language, setLanguage] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  const themeUsed = useTheme();
  const isMobile = useMediaQuery(themeUsed.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = () => {
    // Toggle between "en" and "fi" languages
    setLanguage(language === "en" ? "fi" : "en");
  };

  const getNavbarTextByLanguage = () => {
    if (language === "fi") {
      return {
        welcome: "Tervetuloa",
        menu: "Menu",
        contact: "Ota yhteyttä",
        open: "Aukioloajat",
        fusionText:
          "Kokemusta aitojen kuubalaisten makujen ja herkullisten birria-tacojen sulautumisesta pop-up-ravintolassamme. Nauti herkullisista tacoistamme, jotka on viimeistelty kiusoittelevilla kastikkeilla, kuten allekirjoitus Wander Sauce ja Yum Yum. Liity seikkailulle kulinaristisessa maailmassamme, jota et tule unohtamaan!",
        birriaTacos: "Birria Tacot",
      };
    } else {
      return {
        welcome: "Welcome",
        menu: "Menu",
        contact: "Contact",
        open: "We're Open",
        fusionText:
          "La Cocina is a delightful pop-up serving Latin cuisine with a Cuban-American twist. Specializing in Birria tacos, the slow-cooked meat and aromatic spices create an unforgettable flavor experience. To top it off, their homemade cookies are simply divine. Combining heritage and culinary expertise, La Cocina offers a small but unforgettable dining adventure.",
        birriaTacos: "Birria Tacos",
      };
    }
  };

  const navbarText = getNavbarTextByLanguage();

  const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
  };

  const drawer = (
    <div>
      <List>
        {["welcome", "menu", "contact"].map((text, index) => (
          <ListItemLink
            href={`#${text}`}
            key={text}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemText primary={navbarText[text]} />
          </ListItemLink>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBarContainer position="sticky" sx={{ backgroundColor: "#DA70D6" }}>
          {isMobile ? (
            <React.Fragment>
              <ToolbarContainer style={{ display: "flex" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ flexGrow: 1 }}
                >
                  <a href="#logo">
                    <img src="logo.png" alt="Logo" height="60px" width="auto" />
                  </a>
                </Typography>
                <Button
                  onClick={handleLanguageChange}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0.25rem 0.5rem",
                    fontSize: "15px",
                  }}
                >
                  🇬🇧/🇫🇮
                </Button>
              </ToolbarContainer>
              <Drawer
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="left"
              >
                {drawer}
              </Drawer>
            </React.Fragment>
          ) : (
            <ToolbarContainer style={{ display: "flex" }}>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                <a href="#logo">
                  <img src="logo.png" alt="Logo" height="60px" width="auto" />
                </a>
              </Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                <a href="#welcome">{navbarText.welcome}</a>
              </Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                <a href="#menu">{navbarText.menu}</a>
              </Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                <a href="#contact">{navbarText.contact}</a>
              </Typography>
              <Button
                onClick={handleLanguageChange}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.25rem 0.5rem",
                  fontSize: "15px",
                }}
              >
                🇬🇧 / 🇫🇮
              </Button>
            </ToolbarContainer>
          )}
        </AppBarContainer>
        <AppContainer>
          <CardContainer>
            <CardMedia
              component="img"
              height="400"
              image="https://www.living2cook.com/wp-content/uploads/2022/01/IMG_6179-1-scaled.jpg"
              alt="Restaurant Image"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" component="div">
                {navbarText.birriaTacos}
              </Typography>
            </Box>
          </CardContainer>

          <SectionContainer>
            <Offset id="welcome" />
            <SectionContent id="welcome">
              <SectionTitle variant="h4" component="div">
                {navbarText.welcome}
              </SectionTitle>
              <Typography variant="body1" component="p">
                {/* {navbarText.fusionText} */}
              </Typography>
              <br></br>
              {/* <Typography>{navbarText.bestOfBothText}</Typography> */}
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <Offset id="menu" />
            <SectionContent>
              <CardContainer>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/1.png"
                  alt="Restaurant Image"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </CardContainer>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <Offset id="contact" />
            <SectionContent id="contact">
              <SectionTitle variant="h4" component="div">
                {navbarText.contact}
              </SectionTitle>
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <PhoneIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textPrimary"
                      >
                        <a href="tel:+358451243334">+358 45 1243334</a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <LocationOnIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textPrimary"
                      >
                        <a
                          href="https://goo.gl/maps/VTV1oVcMLVNYGC389?coh=178571&entry=tt"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Myllytyry 25240 Salo
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <InstagramIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textPrimary"
                      >
                        <a
                          href="https://www.instagram.com/lacocinasuomi/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <TwitterIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textPrimary"
                      >
                        <a
                          href="https://twitter.com/lacocinasuomi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <GoogleIcon />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        component="p"
                        color="textPrimary"
                      >
                        <a
                          href="https://www.google.com/search?q=La+Cocina+Suomi&stick=H4sIAAAAAAAA_-NgU1I1qDAxs0g2MTQzNDQzTjIxTza2MqhIMTE0SkxKMjQ2MzewME81WMTK75Oo4JyfnJmXqBBcmp-bCQDdhw1ROwAAAA&hl=en-GB&mat=CRsgzpx924rQElcBpsFACwFx7UMX-2P3AGNPKgLNl4jgMnvAfrLB_vqKZ3ofLI5nuhL9Q9fNt-6Y6MUZWEiuXqT9nT4xzI4bURX2ednjV4T2gD6djvmivj7FykPRXtQ3W4Q&authuser=1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </SectionContent>
          </SectionContainer>
        </AppContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
