import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReelAction } from './Reel.Action'; // Your action file

function CreateReels() {
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('jwt'); // Retrieve token from localStorage
    if (!token) {
      setMessage('You must be logged in to create a reel.');
      return;
    }

    if (!title || !videoFile) {
      setMessage('Please fill in all fields');
      return;
    }

    // Create form data for video upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', videoFile);

    // Dispatch the action to create a reel
    dispatch(createReelAction(formData, token));
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
