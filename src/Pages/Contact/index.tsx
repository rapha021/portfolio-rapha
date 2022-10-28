import {
  ContentPasteGo,
  Email,
  GitHub,
  LinkedIn,
  OpenInNew,
  WhatsApp,
} from "@mui/icons-material"
import {
  Avatar,
  Divider,
  Zoom,
  Stack,
  Typography,
  Button,
  Link,
} from "@mui/material"
import { useState } from "react"
import { toast } from "react-toastify"
import { useThemeContext } from "../../contexts/darkmode.context"
import { Container } from "./style"

const Contact = () => {
  const [email, setEmail] = useState(false)

  const { dark } = useThemeContext()

  return (
    <Container>
      <Zoom in={true} style={{ transitionDuration: "500ms" }}>
        <Stack
          direction={["column", "row"]}
          border={
            dark
              ? "1px solid rgba(255, 255, 255, 0.12)"
              : "1px solid rgba(0, 0, 0, 0.12)"
          }
          borderRadius="6px"
          p="30px"
          gap={["10px", "50px"]}
          width={{ xs: "70%", sm: "max-content" }}
        >
          <Stack direction="column" spacing="10px" alignItems="center">
            <Avatar
              alt="Raphael Gloria"
              src="/assets/rapha.jpeg"
              sx={{ width: 96, height: 96 }}
            />

            <Typography variant="h5" lineHeight="40px">
              <Divider />
              Raphael Gloria
            </Typography>
          </Stack>

          <Stack direction="column" spacing="5px">
            <Stack
              direction="row"
              spacing="10px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Email color="secondary" sx={{ fontSize: "60px" }} />

              <Button
                variant="text"
                color="secondary"
                endIcon={<ContentPasteGo />}
                onClick={() => {
                  setEmail(true)
                  navigator.clipboard.writeText("contato@raphaelgloria.com")
                  toast.info("Email copiado!", {
                    autoClose: 2300,
                    theme: dark ? "dark" : "light",
                  })

                  setTimeout(() => {
                    setEmail(false)
                  }, 3000)
                }}
              >
                {email ? "Email copiado!" : "Clique para copiar"}
              </Button>
            </Stack>
            <Divider />

            <Stack
              direction="row"
              spacing="10px"
              alignItems="center"
              justifyContent="space-between"
            >
              <WhatsApp color="secondary" sx={{ fontSize: "60px" }} />
              <Button
                variant="text"
                color="secondary"
                endIcon={<OpenInNew />}
                LinkComponent={Link}
                href="https://wa.me/5521977393115"
                target="_blank"
              >
                Acessar Whatsapp
              </Button>
            </Stack>

            <Divider />

            <Stack
              direction="row"
              spacing="10px"
              alignItems="center"
              justifyContent="space-between"
            >
              <LinkedIn color="secondary" sx={{ fontSize: "60px" }} />

              <Button
                variant="text"
                color="secondary"
                endIcon={<OpenInNew />}
                LinkComponent={Link}
                href="https://linkedin.com/in/raphaelgloria"
                target="_blank"
              >
                Acessar LinkedIn
              </Button>
            </Stack>

            <Divider />

            <Stack
              direction="row"
              spacing="10px"
              alignItems="center"
              justifyContent="space-between"
            >
              <GitHub color="secondary" sx={{ fontSize: "60px" }} />

              <Button
                variant="text"
                color="secondary"
                endIcon={<OpenInNew />}
                LinkComponent={Link}
                href="https://github.com/rapha021"
                target="_blank"
              >
                Acessar GitHub
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Zoom>
    </Container>
  )
}

export default Contact
