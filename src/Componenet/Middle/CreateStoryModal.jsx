// CreateStoryModal.jsx
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

function CreateStoryModal({ open, handleClose }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const jwt = localStorage.getItem("jwt");
      const userId = localStorage.getItem("userId");

      await axios.post(`/api/story/create/${userId}`, formData, {
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
      });

      handleClose(); // Close modal on success
    } catch (error) {
      console.error("Story upload failed", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ p: 4, backgroundColor: '#fff', margin: 'auto', mt: 10, borderRadius: 2, width: 400 }}>
        <Typography variant="h6" mb={2}>Upload Your Story</Typography>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="mt-4 flex gap-2 justify-end">
          <Button variant="contained" onClick={handleUpload}>Upload</Button>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default CreateStoryModal;
