import React, { useEffect, useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ListItemIcon } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEditModal } from "../reducers/globSlice";

const options = [
  { label: "Edit", icon: <EditIcon /> },
  { label: "Delete", icon: <DeleteIcon /> },
];

const ITEM_HEIGHT = 48;
const MenuCom = ({ id, getReq }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  let disP = useDispatch();

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e === "Delete") {
      let delData = async (id) => {
        try {
          let { data } = await axios.delete(`http://localhost:3000/user/${id}`);
          getReq();
        } catch (error) {
          console.error(error);
        }
      };
      delData(id);
    } else if (e === "Edit") {
      disP(setEditModal(true));
    }
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
        {options.map((e) => (
          <MenuItem
            key={e.label}
            selected={e === "Pyxis"}
            onClick={() => handleClose(e.label)}
          >
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemIcon>{e.label}</ListItemIcon>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuCom;
