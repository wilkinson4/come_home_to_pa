import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#552448",
        },
        secondary: {
            main: "#FFFFFF"
        }
    },
    typography: {
        "fontFamily": `"Lato", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 400,
        "fontWeightRegular": 500,
        "fontWeightMedium": 600,
        h1: {
            "fontFamily": `"Lora", "Arial", sans-serif`,
        },
        h2: {
            "fontFamily": `"Lora", "Arial", sans-serif`,
        },
        h3: {
            "fontFamily": `"Lora", "Arial", sans-serif`,
        }
    },
})

export default theme;