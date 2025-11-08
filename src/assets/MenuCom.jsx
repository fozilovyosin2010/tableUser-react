import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ListItemIcon } from "@mui/material";

const options = [
  { label: "Edit", icon: <EditIcon /> },
  { label: "Delete", icon: <DeleteIcon /> },
  { label: "Complete", icon: <CheckCircleIcon /> },
];

const ITEM_HEIGHT = 48;
const MenuCom = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemIcon>{option.label}</ListItemIcon>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuCom;
