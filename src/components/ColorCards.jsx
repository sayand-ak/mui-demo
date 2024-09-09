import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { colors } from '../constants/colors';

export default function ColorCards() {
    return (
        <Container>
            {/* Set the outer Grid as a container */}
            <Grid container spacing={3}>
                {
                    colors.map((color, index) => (
                        // Use Grid item for each card and set xs, sm, md for responsive behavior
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ backgroundColor: `${color.backgroundColor}`, color: `${color.textColor}`, borderRadius: '15px', height:"30vh" }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {color.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {color.rgb}
                                    </Typography>
                                    <Typography variant="body2">
                                        {color.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}
