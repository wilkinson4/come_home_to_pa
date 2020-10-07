import React from 'react';
import { Button, Theme, Typography, createStyles, makeStyles } from '@material-ui/core';

import blossoms from '../img/blossoms.jpg';

const useStyles = makeStyles((theme: Theme) => createStyles({
    bannerContainer: {
        background: `linear-gradient( rgba(76, 73, 71, 0.4), rgba(76, 73, 71, 0.4) ), url(${blossoms})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        marginRight: 0,
        // width: "100vw",
        textShadow: "0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1)"
    },
    buttons: {
        borderWidth: "2px",
        fontSize: 25,
        fontWeight: 300,
        margin: theme.spacing(3),
        '&:hover': {
            borderWidth: "2px"
        },
        '&:active': {
            borderWidth: "2px"
        },
    },
    heroContainer: {
        bottom: "5%",
        left: "50%",
        position: "absolute",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
        width: "100vw"
    }
}))

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.bannerContainer}>
            <div className={classes.heroContainer}>
                <Typography variant="h1" color="secondary">Come Home To PA</Typography>
                <Button color="secondary" variant="outlined" className={classes.buttons}>Buy Homes</Button>
                <Button color="secondary" variant="outlined" className={classes.buttons}>Instant Home Value</Button>
                <Button color="secondary" variant="outlined" className={classes.buttons}>Sell</Button>
            </div>
        </div>
    )
}