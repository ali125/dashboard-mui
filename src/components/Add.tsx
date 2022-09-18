import { Tooltip, Fab, Box, Modal, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import React, { useState } from "react";

const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const Add: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5} bgcolor="background.default" color="text.primary">
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src="https://mui.com/static/images/avatar/2.jpg" />
                        <Typography fontWeight={500} variant="subtitle2">John Doe</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        sx={{ width: "100%" }}
                        placeholder="What is in your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap="1" mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                            </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
