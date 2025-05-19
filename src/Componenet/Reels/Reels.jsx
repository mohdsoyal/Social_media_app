// src/pages/Reels.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReelAction } from './Reel.Action';

export default function Reels() {
  const dispatch = useDispatch();

  // ✅ Correct destructuring from state
  const { reels = [], loading, error } = useSelector((state) => state.reels || {});

  useEffect(() => {
    dispatch(getAllReelAction());
  }, [dispatch]);

  if (loading) return <p>Loading reels...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  // ✅ Only show reels that have a video URL
  const videoReels = reels.filter((reel) => reel.video);

  return (
    <div>
      {videoReels.length === 0 ? (
        <p className='text-xl items-center text-bold'>No reels found.</p>
      ) : (
        videoReels.map((reel) => (
          <div key={reel.id} style={{ marginBottom: "20px" }}>
            <h3>{reel.title || "Untitled Reel"}</h3>
            <video width="320" height="240" controls>
              <source src={reel.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      )}
    </div>
  );
}
