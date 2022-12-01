import {
  Business,
  Download,
  GpsFixed,
  Map,
  Speed,
  Wifi,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactInternetSpeedMeter } from "react-internet-meter";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface IwifiData {
  ssid?: string;
  bssid?: string;
  channel?: string;
  security?: string;
  frequency?: string;
  signalLevel?: string;
  quality?: string;
}

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const [wifiSpeed, setwifiSpeed] = useState("Checking ... ");
  const [wifiData, setWifiData] = useState<IwifiData>({});
  const downloadItems = [
    "ground.jpg",
    "first.jpg",
    "second.jpg",
    "third.jpg",
    "fourth.jpg",
    "map.jpg",
  ];
  useEffect(() => {
    axios.get("http://localhost:3001/info").then((d) => setWifiData(d.data[0]));
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#006f51" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cleveland State University Wifi Analyzer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Current Location",
            "BH Ground Floor",
            "BH First Floor",
            "BH Second Floor",
            "BH Third Floor",
            "BH Fourth Floor",
            "BH Map",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setActive(index)}>
                <ListItemIcon>
                  {index === 0 && <GpsFixed />}
                  {index >= 1 && index <= 5 && <Business />}
                  {index === 6 && <Map />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {active === 0 && (
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Card
                style={{
                  background:
                    "linear-gradient(200deg, rgba(104,189,73,1) 55%, rgba(0,111,81,1) 100%)",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Wifi fontSize="large" style={{ color: "white" }} />
                    <Typography variant="body1" color={"white"}>
                      SSID: {wifiData.ssid}
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                      BSSID: {wifiData.bssid}
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                      Channel: {wifiData.channel}
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                      Security: {wifiData.security}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card
                style={{
                  background:
                    "linear-gradient(200deg, rgba(104,189,73,1) 55%, rgba(0,111,81,1) 100%)",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Speed fontSize="large" style={{ color: "white" }} />
                    <Typography variant="body1" color={"white"}>
                      Frequency: {wifiData.frequency}
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                      Signal Level: {wifiData.signalLevel}
                    </Typography>
                    <Typography variant="body1" color={"white"}>
                      Quality: {wifiData.quality}
                    </Typography>
                    <ReactInternetSpeedMeter
                      txtMainHeading={
                        <Typography variant="body1" color={"white"}>
                          {"Speed: " + wifiSpeed + " MB/s"}
                        </Typography>
                      }
                      outputType="alert"
                      customClassName={null}
                      txtSubHeading=""
                      pingInterval={3000} // milliseconds
                      thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
                      threshold={100}
                      imageUrl="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png"
                      downloadSize="2550420" //bytes
                      callbackFunctionOnNetworkDown={(speed: any) =>
                        console.log(`Internet speed is down ${speed}`)
                      }
                      callbackFunctionOnNetworkTest={(speed: any) =>
                        setwifiSpeed(speed)
                      }
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        )}
        {active >= 1 && (
          <Grid container>
            <Grid item md={12}>
              <img
                src={`/${downloadItems[active - 1]}`}
                style={{ maxWidth: 600 }}
                alt="link-broken"
              />
            </Grid>
            <Grid item md={12}>
              <a
                href={`/${downloadItems[active - 1]}`}
                download={downloadItems[active - 1]}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#006f51" }}
                  endIcon={<Download />}
                >
                  Download
                </Button>
              </a>
            </Grid>
          </Grid>
        )}
      </Main>
    </Box>
  );
}
