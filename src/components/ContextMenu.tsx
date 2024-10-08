import { Menu, MenuItem, ListItemIcon } from '@mui/material';

interface MenuItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface Props {
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  open: boolean;
  items: MenuItem[];
}

const ContextMenu: React.FC<Props> = ({
  handleClose,
  anchorEl,
  open,
  items,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {items.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ContextMenu;
