import { Button, Fade, Grid, Grow, Link, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link as LinkRouter } from "react-router-dom"

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
            gap="20px"
            justifyContent="center"
            alignItems="center"
          >
            <Box textAlign="center">
              <Typography
                variant="h2"
                component="h3"
                color="#fff"
                fontFamily="'audrey', sans-serif"
                fontSize={{ xs: "60px", md: "80px" }}
                lineHeight="1"
                fontWeight="bold"
              >
                RAPHAEL SILVA
              </Typography>

              <Typography
                variant="body1"
                color="#fff"
                fontFamily="'simplifica', sans-serif"
                fontSize={{ xs: "20px", md: "40px" }}
                lineHeight="0.8"
              >
                DESENVOLVEDOR FULLSTACK
              </Typography>
            </Box>

            <Box
              gap="15px"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Grow in={true} timeout={2000}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="https://linkedin.com/in/raphaelgloria/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </Grow>

              <Grow in={true} timeout={1500}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="https://github.com/rapha021"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Grow>

              <Grow in={true} timeout={1000}>
                <Button
                  variant="contained"
                  size="large"
                  component={LinkRouter}
                  to="/contact"
                >
                  Contato
                </Button>
              </Grow>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </>
  )
}

export default Home
