import { createBoard } from '@wixc3/react-board';
import { TransferList } from '@mui/material';
import { useState } from 'react';
import cover from '../../covers/transfer-list-light.png';

function TransferListExample() {
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState([0, 1, 2, 3]);
    const [right, setRight] = useState([4, 5, 6, 7]);

    // Code to handle moving items between lists

    return (
        <TransferList
            checked={checked}
            left={left}
            right={right}
            setChecked={setChecked}
            setLeft={setLeft}
            setRight={setRight}
        />
    );
}

export default createBoard({
    name: 'MUITransferList',
    Board: () => <TransferListExample />,
    isSnippet: true,
    tags: ['Input', 'MUI'],
    cover: cover,
});
