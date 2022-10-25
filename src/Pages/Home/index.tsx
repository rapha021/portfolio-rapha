import {
  Button,
  ButtonGroup,
  Fade,
  Grid,
  Link,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { Link as LinkRouter } from "react-router-dom"

import { toast } from "react-toastify"

import "./style.css"

const Home = () => {
  return (
    <>
      <Fade in={true}>
        <Grid container spacing={0} className="container">
          <Grid
            item
            display="flex"
            flexDirection="column"
            gap="10px"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" component="h3" color="#fff">
              Olá, me chamo Raphael !
            </Typography>

            <Typography variant="body1" color="#fff">
              e sou desenvolvedor FullStack
            </Typography>

            <Box gap="15px" display="flex">
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="https://linkedin.com/in/raphaelgloria/"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="https://github.com/rapha021"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                size="large"
                component={LinkRouter}
                to="/contact"
              >
                Contato
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </>
  )
}

export default Home
