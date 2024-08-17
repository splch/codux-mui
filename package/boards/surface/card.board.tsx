import { createBoard } from '@wixc3/react-board';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import cover from '../../covers/card-light.png';

export default createBoard({
    name: 'MUICard',
    Board: () => (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Card Title
                </Typography>
                <Typography variant="body2">This is a sample card description.</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    ),
    isSnippet: true,
    tags: ['Surface', 'MUI'],
    cover: cover,
});
