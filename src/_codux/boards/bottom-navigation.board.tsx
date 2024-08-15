import { createBoard } from '@wixc3/react-board';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import cover from '../covers/bottomnav-light.png';

export default createBoard({
    name: 'MUIBottomNavigation',
    Board: () => {
        const [value, setValue] = useState(0);

        return (
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                showLabels
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    },
    isSnippet: true,
    tags: ['Navigation', 'MUI'],
    cover: cover,
});
