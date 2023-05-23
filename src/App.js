import React, { useState } from "react";
import { styled } from "@mui/system";
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
} from "@mui/material";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme({
  typography: {
    fontFamily: '"Rock Salt", cursive',
  },
});

const AppContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",
  paddingBottom: "2rem",
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
  marginBottom: "2rem",
  padding: "1rem",
  "@media (min-width: 600px)": {
    padding: "2rem",
  },
  width: "100%",
  maxWidth: "100%",
});

const SectionTitle = styled(Typography)({
  marginBottom: "1rem",
});

const SectionContent = styled(Box)({
  marginBottom: "2rem",
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
  marginBottom: "2rem",
});
function App() {
  const [language, setLanguage] = useState("en");

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
      };
    } else {
      return {
        welcome: "Welcome",
        menu: "Menu",
        contact: "Contact",
        open: "We're Open",
      };
    }
  };

  const navbarText = getNavbarTextByLanguage();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBarContainer position="sticky" sx={{ backgroundColor: "#DA70D6" }}>
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
            {/* <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              <a href="#open">{navbarText.open}</a>
            </Typography> */}
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
                Birria Tacos
              </Typography>
            </Box>
          </CardContainer>

          <SectionContainer>
            <SectionContent id="welcome">
              <SectionTitle variant="h4" component="div">
                {navbarText.welcome}
              </SectionTitle>
              <Typography variant="body1" component="p">
                Experience the fusion of authentic Cuban flavors and
                mouthwatering birria tacos at our pop-up restaurant. Indulge in
                our delicious tacos, enhanced with tantalizing sauces like our
                signature Wander Sauce and Yum Yum. Join us for a culinary
                adventure you won't forget!
              </Typography>
              <br></br>
              <Typography>
                Enjoy the best of both worlds at La Cocina, where Cuban cuisine
                meets the delectable art of birria tacos. Come savor our
                carefully crafted dishes, made with the freshest ingredients and
                complemented by our irresistible Wander Sauce and Yum Yum. Join
                us for an unforgettable dining experience!
              </Typography>
            </SectionContent>

            <CardContainer>
              <CardMedia
                component="img"
                height="400"
                image="https://designshack.net/wp-content/uploads/best-food-drink-menu-templates.jpg"
                alt="Restaurant Image"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </CardContainer>

            <SectionContent id="contact">
              <SectionTitle variant="h4" component="div">
                {navbarText.contact}
              </SectionTitle>
              <Grid
                container
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <PhoneIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="p" color="textPrimary">
                    <a href="tel:+358451243334">+358 45 1243334</a>
                  </Typography>
                </Grid>
                <Grid item>
                  <LocationOnIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="p" color="textPrimary">
                    <a
                      href="https://goo.gl/maps/VTV1oVcMLVNYGC389?coh=178571&entry=tt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Myllytyry 25240 Salo
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  <InstagramIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="p" color="textPrimary">
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
            </SectionContent>
          </SectionContainer>
        </AppContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
