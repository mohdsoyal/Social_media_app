import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReelAction } from './Reel.Action';
import { uploadToCloudinary } from '../../Utils/UploadToCloudniry';
import { useNavigate } from 'react-router-dom';

function CreateReels() {
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('jwt');
    if (!token) {
      setMessage('You must be logged in to create a reel.');
      return;
    }

    if (!title || !videoFile) {
      setMessage('Please fill in all fields');
      return;
    }

    try {
      // Upload video to Cloudinary and get URL
      const video = await uploadToCloudinary(videoFile, 'video');
      if (!video) {
        setMessage('Video upload failed');
        return;
      }

      // Dispatch create reel action with title and video URL as "video"
      await dispatch(createReelAction({ title, video }, token));

      setMessage('Reel created successfully!');
      
      // Redirect to home page after success
      navigate('/Reels');
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload New Reel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Reel
        </button>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default CreateReels;
