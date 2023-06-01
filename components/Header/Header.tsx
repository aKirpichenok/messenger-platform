"use client";
import * as React from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProfileIcon from "@mui/icons-material/Person2Outlined";
import MessagesIcon from "@mui/icons-material/EmailOutlined";
import NewsIcon from "@mui/icons-material/ArticleOutlined";
import GamesIcon from "@mui/icons-material/CasinoOutlined";
import FriendsIcon from "@mui/icons-material/Diversity1Outlined";
import AboutIcon from "@mui/icons-material/InfoOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import FaqIcon from "@mui/icons-material/LiveHelpOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Links } from "../Links/Links";

const drawerWidth = 240;

const openedMixin = (
  theme: Theme
): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration:
      theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (
  theme: Theme
): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration:
      theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  })
);

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(
    ["width", "margin"],
    {
      easing: theme.transitions.easing.sharp,
      duration:
        theme.transitions.duration.leavingScreen,
    }
  ),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(
      ["width", "margin"],
      {
        easing: theme.transitions.easing.sharp,
        duration:
          theme.transitions.duration
            .enteringScreen,
      }
    ),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const iconsArray = [
    {
      title: "Профиль",
      icon: <ProfileIcon />,
      path: "profile",
    },
    {
      title: "Друзья",
      icon: <FriendsIcon />,
      path: "friends",
    },
    {
      title: "Сообщения",
      icon: <MessagesIcon />,
      path: "messages",
    },
    {
      title: "Новости",
      icon: <NewsIcon />,
      path: "news",
    },
    {
      title: "Игры",
      icon: <GamesIcon />,
      path: "games",
    },
  ];

  const bottomIcons = [
    {
      title: "О нас",
      icon: <AboutIcon />,
      path: "about",
    },
    {
      title: "Настройки",
      icon: <SettingsIcon />,
      path: "settings",
    },
    {
      title: "FAQ",
      icon: <FaqIcon />,
      path: "faq",
    },
  ];

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
        color="inherit"
        style={{ boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            color: "blue",
            borderRight: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            width: "calc(64px + 1px)",
            ...(open && { border: "none" }),
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ flex: "1" }}>
          {iconsArray.map(
            ({ title, icon, path }, index) => (
              <ListItem
                key={title}
                disablePadding
                sx={{ display: "block" }}
              >
                <Links path={path}>
                  <Tooltip
                    title={!open && title}
                    placement="right"
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open
                          ? "initial"
                          : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent:
                            "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{
                          opacity: open ? 1 : 0,
                        }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </Links>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {bottomIcons.map(
            ({ title, icon, path }, index) => (
              <ListItem
                key={title}
                disablePadding
                sx={{ display: "block" }}
              >
                <Links path={path}>
                  <Tooltip
                    title={!open && title}
                    placement="right"
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open
                          ? "initial"
                          : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent:
                            "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{
                          opacity: open ? 1 : 0,
                        }}
                      />
                    </ListItemButton>
                  </Tooltip>
                </Links>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
