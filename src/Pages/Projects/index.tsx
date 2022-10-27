import { Fade, Grid, Grow, Typography } from "@mui/material"
import CardProj from "../../Components/Card"
import { useThemeContext } from "../../contexts/darkmode.context"

import { projects } from "../../database"
import { Container } from "./style"

const Projects = () => {
  const { dark, theme } = useThemeContext()

  let counter = 0

  return (
    <Fade in={true}>
      <Container dark={dark} palette={theme.palette}>
        <Typography variant="h4" component="h2">
          Alguns dos meus melhores projetos:
        </Typography>
        <Grid
          container
          spacing={0}
          sx={{
            overflowX: { xs: "scroll", md: "hidden" },
            borderRadius: "4px",
            padding: "0 15px 15px 15px",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexWrap: { xs: "nowrap", md: "wrap" },
              gap: "30px",
              minWidth: { xs: "max-content", md: "" },
            }}
          >
            {projects.map((project, index) => {
              const { name, techs, demo_link, repo_link, img, description } =
                project

              counter += 500
              return (
                <Grow in={true} timeout={counter} key={name}>
                  <div>
                    <CardProj
                      key={index}
                      name={name}
                      techs={techs}
                      demo_link={demo_link}
                      repo_link={repo_link}
                      img={img}
                      description={description}
                    />
                  </div>
                </Grow>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </Fade>
  )
}

export default Projects
