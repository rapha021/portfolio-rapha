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
  const my_techs = [
    {
      img: "assets/icons/react.svg",
      name: "React",
    },
    {
      img: "assets/icons/ts.svg",
      name: "Typescript",
    },
    {
      img: "assets/icons/node.svg",
      name: "Node Js",
    },
    {
      img: "assets/icons/materialui.svg",
      name: "Material UI",
    },
    {
      img: "assets/icons/git.svg",
      name: "Git",
    },
    {
      img: "assets/icons/python.svg",
      name: "Python",
    },
    {
      img: "assets/icons/django.svg",
      name: "Django",
    },
  ]

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
            width="80%"
            rowGap="30px"
            justifyContent="center"
            flexWrap="wrap"
          >
            {my_techs.map((tech) => (
              <Grow in={true} {...{ timeout: 1000 }} key={tech.name + "grow"}>
                <img
                  src={tech.img}
                  className="techIcon"
                  key={tech.name + "img"}
                />
              </Grow>
            ))}
          </Stack>
        </Stack>
      </Fade>
    </>
  )
}

export default About
