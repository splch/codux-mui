import { createBoard } from '@wixc3/react-board';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import cover from '../covers/timeline-light.png';

export default createBoard({
    name: 'MUITimeline',
    Board: () => (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">9:30 am</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="span">
                        Event 1
                    </Typography>
                    <Typography>Description of event 1.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">10:00 am</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="span">
                        Event 2
                    </Typography>
                    <Typography>Description of event 2.</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    ),
    isSnippet: true,
    tags: ['Lab', 'MUI'],
    cover: cover,
});
