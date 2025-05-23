import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, Button, Backdrop, CircularProgress } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DuoIcon from '@mui/icons-material/Duo';
import { uploadToCloudinary } from '../../Utils/UploadToCloudniry';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../Post/Post.Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '.6rem',
  outline: 'none',
};

function CreatePostModal({ handleClose, open }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl); // Note: use lowercase "video"
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: ""
    },
    onSubmit: (values) => {
      dispatch(createPostAction(values));
      formik.resetForm();
      setSelectedImage(null);
      setSelectedVideo(null);
      handleClose();
    }
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            {/* User Info */}
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">Code With Soyal</p>
                <p className="text-sm text-gray-500">@CodeSoyal</p>
              </div>
            </div>

            {/* Caption */}
            <textarea
              name="caption"
              rows="4"
              onChange={formik.handleChange}
              value={formik.values.caption}
              placeholder="Write Caption..."
              className="w-full border p-2 rounded"
            ></textarea>

            {/* Image/Video Upload */}
            <div className="flex space-x-5 items-center">
              {/* Image */}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: 'none' }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
              </div>

              {/* Video */}
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleSelectVideo}
                  style={{ display: 'none' }}
                  id="video-input"
                />
                <label htmlFor="video-input">
                  <IconButton color="primary" component="span">
                    <DuoIcon />
                  </IconButton>
                </label>
                <span>Video</span>
              </div>
            </div>

            {/* Preview Image */}
            {selectedImage && (
              <div>
                <img className="h-[10rem]" src={selectedImage} alt="Uploaded preview" />
              </div>
            )}

            {/* Preview Video */}
            {selectedVideo && (
              <div className="mt-4">
                <video className="h-[10rem]" controls>
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Submit */}
            <div className="flex justify-end mt-4">
              <Button type="submit" variant="contained" color="primary">
                Post
              </Button>
            </div>
          </div>
        </form>

        {/* Loader Backdrop */}
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;
