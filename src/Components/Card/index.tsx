import { IProject } from "../../database"
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
} from "@mui/material"
import { useThemeContext } from "../../contexts/darkmode.context"

const CardProj = ({
  name,
  techs,
  demo_link,
  repo_link,
  img,
  description,
}: IProject) => {
  const { dark } = useThemeContext()

  return (
    <>
      <Card
        sx={{
          maxWidth: { xs: "250px", sm: "280px", md: "350px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia component="img" alt="project img" height="220" image={img} />

        <CardContent className="card-content">
          <div className="card__div--tags">
            {techs.map((tech, index) => (
              <Chip
                label={tech}
                key={index}
                color={dark ? "secondary" : "primary"}
                size="small"
              />
            ))}
          </div>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle2" component="h4" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <ButtonGroup
            variant="text"
            size="small"
            sx={{ width: "100%", justifyContent: "right", gap: "10px" }}
          >
            <Link href={demo_link} underline="none" target="_blank">
              <Button>Live demo</Button>
            </Link>

            <Link href={repo_link} underline="none" target="_blank">
              <Button>Repository</Button>
            </Link>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  )
}

export default CardProj
