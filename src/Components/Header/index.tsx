import {
  AppBar,
  Badge,
  Divider,
  Grid,
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import CottageIcon from "@mui/icons-material/Cottage"
import InfoIcon from "@mui/icons-material/Info"
import EmailIcon from "@mui/icons-material/Email"
import InventoryIcon from "@mui/icons-material/Inventory"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import { useState } from "react"

import { useLocation, useNavigate } from "react-router-dom"
import { useThemeContext } from "../../contexts/darkmode.context"

import { Link as LinkRouter } from "react-router-dom"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation().pathname
  const navigate = useNavigate()

  const desktop = useMediaQuery("(min-width:1200px)")

  const { dark, theme } = useThemeContext()
  return (
    <>
      {desktop ? (
        <Grid
          container
          sx={{
            backgroundColor: dark ? "#333" : "#fff",
            width: "fit-content",
          }}
        >
          <Grid item>
            <Tabs value={location} variant="scrollable" orientation="vertical">
              <Tab
                label="Home"
                icon={<CottageIcon />}
                value="/"
                component={LinkRouter}
                to="/"
              />

              <Tab
                label="About"
                icon={<InfoIcon id="/about" />}
                value="/about"
                component={LinkRouter}
                to="/about"
              />

              <Tab
                label="Contact"
                icon={
                  <Badge badgeContent="!" color="warning">
                    <EmailIcon id="/contact" />
                  </Badge>
                }
                value="/contact"
                component={LinkRouter}
                to="/contact"
                disabled
              />

              <Tab
                label="Projects"
                icon={<InventoryIcon id="/projects" />}
                value="/projects"
                component={LinkRouter}
                to="/projects"
              />
            </Tabs>
          </Grid>
        </Grid>
      ) : (
        <>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            sx={{
              width: "300px",
            }}
          >
            <ListItem
              disablePadding
              sx={{
                width: "300px",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <ListItemButton
                onClick={() => {
                  navigate("/")
                  setOpen(false)
                }}
                selected={location === "/"}
              >
                <ListItemIcon>
                  <CottageIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/about")
                  setOpen(false)
                }}
                selected={location === "/about"}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/contact")
                  setOpen(false)
                }}
                selected={location === "/contact"}
                disabled
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  navigate("/projects")
                  setOpen(false)
                }}
                selected={location === "/projects"}
              >
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItemButton>

              <Divider />

              <Link
                href="https://github.com/rapha021"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Github"} />
                </ListItemButton>
              </Link>

              <Link
                href="https://www.linkedin.com/in/raphaelgloria/"
                underline="none"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary={"LinkedIn"} />
                </ListItemButton>
              </Link>
            </ListItem>
          </SwipeableDrawer>

          <AppBar
            position="sticky"
            sx={{ height: "70px", justifyContent: "center" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </>
      )}
    </>
  )
}

export default Header
