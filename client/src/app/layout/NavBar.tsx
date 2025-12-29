import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean,
    setDarkMode: () => void
}

export default function NavBar({darkMode, setDarkMode}: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton onClick={() => setDarkMode()}>
                {darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}