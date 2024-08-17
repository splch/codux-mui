import { createBoard } from '@wixc3/react-board';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import cover from '../../covers/image-list-light.png';

export default createBoard({
    name: 'MUIImageList',
    Board: () => (
        <ImageList cols={3}>
            <ImageListItem>
                <img src="https://via.placeholder.com/150" alt="Sample 1" />
                <ImageListItemBar title="Sample 1" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://via.placeholder.com/150" alt="Sample 2" />
                <ImageListItemBar title="Sample 2" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://via.placeholder.com/150" alt="Sample 3" />
                <ImageListItemBar title="Sample 3" />
            </ImageListItem>
        </ImageList>
    ),
    isSnippet: true,
    tags: ['Layout', 'MUI'],
    cover: cover,
});
