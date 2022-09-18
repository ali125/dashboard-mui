import React, { useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const Userbox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/3.jpg" onClick={() => setOpen(true)} />
                </Icons>
                <Userbox onClick={() => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/3.jpg" />
                    <Typography component="span">John</Typography>
                </Userbox>
                <Menu
                    id="demo-positioned-menu"
                    aria-label="demo-positioned-menu"
                    open={open}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Logoout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
