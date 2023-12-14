import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import SvgColor from '../../../components/svg-color';



const icon = (name) => `/assets/icons/navbar/${name}.svg`;

// ----------------------------------------------------------------------

const Assets = [
  {
    value: 'Asset',
    label: 'Asset',
    icon: icon('monitor'),
  },
  {
    value: 'License',
    label: 'License',
    icon: icon('license'),
  },
  {
    value: 'Accessory',
    label: 'Accessory',
    icon: icon('accessory'),
  },
  {
    value: 'Consumable',
    label: 'Consumable',
    icon: icon('consumable'),
  },
  {
    value: 'Component',
    label: 'Component',
    icon: icon('rack'),
  },
  {
    value: 'User',
    label: 'User',
    icon: icon('user'),
  },
];

// ----------------------------------------------------------------------

export default function CreatePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      {/* <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
      </IconButton> */}
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>
      Create New
      </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {Assets.map((option) => (
            <MenuItem key={option.value} selected={option.value === Assets[0].value} onClick={() => handleClose()}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 23, mr: 2 }} />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
