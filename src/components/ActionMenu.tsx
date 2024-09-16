import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { red } from '@mui/material/colors';

interface ActionMenuProps {
  onDetail: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  onDetail,
  onEdit,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
        color='primary'
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: '20ch',
          },
        }}
      >
        <MenuItem
          onClick={() => {
            onDetail();
            handleClose();
          }}
        >
          <ListItemIcon>
            <InfoIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Detail' />
        </MenuItem>
        <MenuItem
          onClick={() => {
            onEdit();
            handleClose();
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Edit' />
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            onDelete();
            handleClose();
          }}
          sx={{ color: red[500] }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize='small' sx={{ color: red[500] }} />
          </ListItemIcon>
          <ListItemText primary='Delete' />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ActionMenu;
