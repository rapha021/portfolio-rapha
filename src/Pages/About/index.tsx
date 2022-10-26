import {
  Box,
  Divider,
  Fade,
  Grow,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import "./style.css"

const About = () => {
  return (
    <>
      <Fade in={true}>
        <Stack
          direction="column"
          spacing={2}
          height={{ xs: "90vh", md: "100vh" }}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Stack alignItems="center" textAlign="center">
            <Typography variant="h2">Algumas das tecnologias</Typography>

            <Typography variant="h5">
              que mais utilizo e domino no momento:
            </Typography>
          </Stack>

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            height="fit-content"
            width="100%"
            justifyContent="center"
          >
            <Grow in={true} {...{ timeout: 1000 }}>
              <img src="assets/icons/react.svg" className="techIcon" />
            </Grow>

            <Grow in={true} {...{ timeout: 1200 }}>
              <img src="assets/icons/ts.svg" className="techIcon" />
            </Grow>

            <Grow in={true} {...{ timeout: 1400 }}>
              <img src="assets/icons/node.svg" className="techIcon" />
            </Grow>

            <Grow in={true} {...{ timeout: 1600 }}>
              <img src="assets/icons/materialui.svg" className="techIcon" />
            </Grow>

            <Grow in={true} {...{ timeout: 1800 }}>
              <img src="assets/icons/git.svg" className="techIcon" />
            </Grow>
          </Stack>
        </Stack>
      </Fade>
    </>
  )
}

export default About
