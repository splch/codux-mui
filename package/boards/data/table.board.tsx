import { createBoard } from '@wixc3/react-board';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import cover from '../../covers/table-light.png';

export default createBoard({
    name: 'MUITable',
    Board: () => (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Item 1
                        </TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">$10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Item 2
                        </TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">$20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    ),
    isSnippet: true,
    tags: ['Data', 'MUI'],
    cover: cover,
});
