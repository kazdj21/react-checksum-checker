import { Grid } from "@mui/material";

function Header({ children, containerStyle, textStyle }) {

    return (
        <>
            <Grid container>
                <Grid item sm={6} md={12} lg={12}>
                    <div style={{...containerStyle}}>
                            <h1 style={{borderBottom: "1px solid white", color: "white", display: "inline-block",  ...textStyle}}>{children}</h1>
                    </div>
                </Grid>
            </Grid>
        </>
    );

}

export default Header;