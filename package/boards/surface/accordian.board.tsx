import { createBoard } from '@wixc3/react-board';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cover from '../../covers/accordion-light.png';

export default createBoard({
    name: 'MUIAccordion',
    Board: () => (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>This is the content of the accordion.</Typography>
            </AccordionDetails>
        </Accordion>
    ),
    isSnippet: true,
    tags: ['Surface', 'MUI'],
    cover: cover,
});
