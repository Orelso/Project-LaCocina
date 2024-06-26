import React, { useState } from "react";
import { styled, useTheme } from "@mui/system";
import { AppBar, Toolbar, Typography, Container, Box, Card, CardMedia, CssBaseline, Button, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import "./index.css";

// Define the image URLs
const images = {
  image10: "DB29F013-2EEF-4E23-BA7F-D6037EABB527 2.JPG",
  image11: "BCD03971-71ED-4323-8D0F-40AC22A8AEA9 2.JPG",
  image14: "dc790785-8e19-4c52-90d0-aa47f693590a.JPG"
};

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    // Define other typography styles as needed
  },
  palette: {
    primary: {
      main: '#007bff', // Update with your primary color
    },
    secondary: {
      main: '#6c757d', // Update with your secondary color
    },
    // Add other custom colors as needed
  },
});

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const AppContainer = styled(Container)({ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1rem", paddingBottom: "1rem" });
const AppBarContainer = styled(AppBar)({ padding: "0 1rem", "@media (min-width: 600px)": { padding: "0 2rem" },  boxShadow: "none" // Add this line to remove the box shadow
});
const ToolbarContainer = styled(Toolbar)({ display: "flex", justifyContent: "space-between", padding: "0" });
const SectionContainer = styled(Container)({ marginBottom: "0.5rem", padding: "1rem", "@media (min-width: 600px)": { padding: "2rem" }, width: "100%", maxWidth: "100%" });
const SectionTitle = styled(Typography)({ marginBottom: "0.25rem" });
const SectionContent = styled(Box)({ marginBottom: "0.5rem", backgroundColor: "#fcefef", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", "@media (min-width: 600px)": { padding: "2rem" } });
const CardContainer = styled(Card)({ width: "100%", position: "relative", display: "flex", justifyContent: "center", marginBottom: "0.5rem" });
const PictureBox = styled(Box)({ marginBottom: "2rem" }); // Adjust margin as needed

function App() {
  const [language, setLanguage] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);

  const themeUsed = useTheme();
  const isMobile = useMediaQuery(themeUsed.breakpoints.down("sm"));

  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };
  const handleLanguageChange = () => { setLanguage(language === "en" ? "fi" : "en"); };

  const getNavbarTextByLanguage = () => {
    if (language === "fi") {
      return { welcome: "Tervetuloa", menu: "Menu", contact: "Ota yhteyttä", open: "Aukioloajat", fusionText: "La Cocina on lumoava pop-up-ravintola, joka yhdistää latinalaisen keittiön kubalais-amerikkalaiseen vivahteeseen. Nauti heidän nimikkoruoistaan, hitaasti kypsennetyistä possutacoista, jotka pursuavat makua, ja maista hitaasti kypsennetyn jackfruitin ainutlaatuista makua. Jokainen suupala on perinteen ja maun juhlaa. Ja makean lopetuksen kruunaa heidän jumalalliset kotitekoiset keksinsä. Koe La Cocinan taika, jossa perinne kohtaa innovaation, kaikki edulliseen hintaan.", birriaTacos: "Latin Ruoka" };
    } else {
      return { welcome: "Welcome", menu: "Menu", contact: "Contact", open: "We're Open", fusionText: "La Cocina is a pop-up, blending Latin cuisine with a Cuban-American twist. Indulge in their signature pork cooked in beer tacos, packed with flavor, and savor the unique taste of slow-cooked Jackfruit tacos. Each bite is a celebration of tradition and taste. And for a sweet ending, don't miss their divine homemade cookies. Experience the magic of La Cocina, where heritage meets innovation, all at an affordable price.", birriaTacos: "Latin Food" };
    }
  };

  const navbarText = getNavbarTextByLanguage();

  const ListItemLink = (props) => { return <ListItem button component="a" {...props} />; };

  const drawer = (
    <div>
      <List> {["welcome", "menu", "contact"].map((text, index) => (
          <ListItemLink href={`#${text}`} key={text} onClick={() => setMobileOpen(false)}>
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
        <AppBarContainer position="sticky" sx={{ backgroundColor: "#fcefef" }}>
          {isMobile ? (
            <React.Fragment>
              <ToolbarContainer style={{ display: "flex" }}>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}><MenuIcon /></IconButton>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}><a href="#logo"><img src="logo.png" alt="Logo" height="60px" width="auto" /></a></Typography>
                <Button onClick={handleLanguageChange} style={{ backgroundColor: "black", color: "white", padding: "0.25rem 0.5rem", fontSize: "15px" }}>🇬🇧/🇫🇮</Button>
              </ToolbarContainer>
              <Drawer open={mobileOpen} onClose={handleDrawerToggle} anchor="left">{drawer}</Drawer>
            </React.Fragment>
          ) : (
            <ToolbarContainer style={{ display: "flex" }}>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}><a href="#logo"><img src="logo.png" alt="Logo" height="60px" width="auto" /></a></Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}><a href="#welcome">{navbarText.welcome}</a></Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}><a href="#menu">{navbarText.menu}</a></Typography>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}><a href="#contact">{navbarText.contact}</a></Typography>
              <Button onClick={handleLanguageChange} style={{ backgroundColor: "black", color: "white", padding: "0.25rem 0.5rem", fontSize: "15px" }}>🇬🇧 / 🇫🇮</Button>
            </ToolbarContainer>
          )}
        </AppBarContainer>
        <AppContainer>
          <CardContainer>
            <CardMedia component="img" height="400" image="/bi.jpeg" alt="Restaurant Image" style={{ width: "100%", objectFit: "cover" }} />
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="h2" component="div">{navbarText.birriaTacos}</Typography>
            </Box>
          </CardContainer>
          <SectionContainer>
            <Offset id="welcome" />
            <SectionContent id="welcome">
              <SectionTitle variant="h4" component="div">{navbarText.welcome}</SectionTitle>
              <Typography variant="body1" component="p">{navbarText.fusionText}</Typography>
              <br></br>
            </SectionContent>
          </SectionContainer>
          <SectionContainer>
            <Offset id="menu" />
            <SectionContent>
              
                <CardMedia component="img" height="auto" image="/1.png" alt="Restaurant Image" style={{ width: "60%", objectFit: "cover" }} />
              
            </SectionContent>
          </SectionContainer>
          <SectionContainer>
            <PictureBox>
              <Typography variant="h4" component="div">Our Gallery</Typography>
              <Grid container spacing={2}>
                {Object.values(images).map((imageUrl, index) => (
                  <Grid item xs={6} sm={4} key={index}>
<img src={imageUrl} alt={`${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </Grid>
                ))}
              </Grid>
            </PictureBox>
          </SectionContainer>
          <SectionContainer>
  <Offset id="contact" />
  <SectionContent id="contact" style={{ padding: "1rem" }}> {/* Adjust padding as needed */}
    <SectionTitle variant="h4" component="div">{navbarText.contact}</SectionTitle>
    <Grid container direction="row" spacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item>
        <a href="tel:+358451243334">
          <PhoneIcon />
        </a>
      </Grid>
      <Grid item>
        <a href="https://goo.gl/maps/VTV1oVcMLVNYGC389?coh=178571&entry=tt" target="_blank" rel="noopener noreferrer">
          <LocationOnIcon />
        </a>
      </Grid>
      <Grid item>
        <a href="https://www.instagram.com/lacocinasuomi/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </Grid>
      <Grid item>
        <a href="https://twitter.com/lacocinasuomi" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
      </Grid>
      <Grid item>
        <a href="https://www.google.com/search?q=La+Cocina+Suomi&stick=H4sIAAAAAAAA_-NgU1I1qDAxs0g2MTQzNDQzTjIxTza2MqhIMTE0SkxKMjQ2MzewME81WMTK75Oo4JyfnJmXqBBcmp-bCQDdhw1ROwAAAA&hl=en-GB&mat=CRsgzpx924rQElcBpsFACwFx7UMX-2P3AGNPKgLNl4jgMnvAfrLB_vqKZ3ofLI5nuhL9Q9fNt-6Y6MUZWEiuXqT9nT4xzI4bURX2ednjV4T2gD6djvmivj7FykPRXtQ3W4Q&authuser=1" target="_blank" rel="noopener noreferrer">
          <GoogleIcon />
        </a>
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