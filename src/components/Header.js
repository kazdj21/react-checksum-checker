import { Grid } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

function Header({ children, containerStyle, textStyle }) {

    const mediumDevice = useMediaQuery('(max-width: 1200px)');
    const mobileDevice = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <Grid container>
                <Grid item xs={3} sm={6} md={12} lg={12} style={{...containerStyle}}>
                    <h1 style={{borderBottom: "1px solid white", color: "white", display: "inline-block", fontSize: mobileDevice ? "4rem" : mediumDevice ? "5rem" : "9rem", ...textStyle}}>{children}</h1>
                </Grid>
            </Grid>
        </>
    );

}

export default Header;