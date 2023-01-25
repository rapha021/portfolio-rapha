import {
  DarkMode,
  LightMode,
  Download,
  OpenInNew,
  InsertDriveFile,
} from "@mui/icons-material"
import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material"
import { useState } from "react"
import { useThemeContext } from "../../contexts/darkmode.context"

interface IActions {
  icon: JSX.Element
  name: string
  action: () => void
}

const ThemeButton = () => {
  const { dark, setDark, handleTheme } = useThemeContext()
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const actions: IActions[] = [
    {
      icon: <InsertDriveFile />,
      name: "Currículo",
      action: () => {
        setOpenModal(true)
      },
    },
    {
      icon: dark ? <LightMode /> : <DarkMode />,
      name: dark ? "Light" : "Dark",
      action: () => {
        setDark(!dark)
        handleTheme()
      },
    },
  ]

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Teste"
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.action}
          />
        ))}
      </SpeedDial>

      <Dialog
        open={openModal}
        onClose={() => {
          setOpenModal(false)
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <DialogTitle id="modal-title">Meu currículo</DialogTitle>

        <DialogContent>
          <DialogContentText id="modal-desc">
            Para facilitar escolha a melhor opção para você:
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="text" endIcon={<Download />} disabled>
            Baixar
          </Button>

          <Link
            href="https://docs.google.com/document/d/1ps8mAgv4f5iAz5kmBRFpcpS5aBn_TnpMNcqFEm8ezaE/edit?usp=sharing"
            underline="none"
            target="_blank"
          >
            <Button variant="text" endIcon={<OpenInNew />}>
              Abrir no Google Docs
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ThemeButton
