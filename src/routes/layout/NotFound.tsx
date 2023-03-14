import { Grid, Paper, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()

    //go back a page
    const handleClick = () => {
        navigate(-1)
    }

    return (
        <Grid 
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
        >
            <Grid
                item
                padding={3}
                component={Paper}
                elevation={4}
                square
                sx={{
                    textAlign: "center"
                }}
            >
                <Typography>
                    404 Not Found
                </Typography>
                <Button onClick={handleClick}>
                    Go Back
                </Button>
            </Grid>
        </Grid>
    )
}

