import { createBoard } from '@wixc3/react-board';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import cover from '../../covers/speed-dial-light.png';

export default createBoard({
    name: 'MUISpeedDial',
    Board: () => (
        <SpeedDial
            ariaLabel="SpeedDial example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" tooltipOpen />
            <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" tooltipOpen />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
        </SpeedDial>
    ),
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
