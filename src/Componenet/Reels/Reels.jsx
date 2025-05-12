import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserReelsCard from './UserReelsCard';

function Reels() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axios.get('http://localhost:6393/api/reel');
        setReels(response.data);
      } catch (error) {
        console.error('Error fetching reels:', error);
      }
    };

    fetchReels();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Reels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reels.map((reel) => (
          <UserReelsCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
}

export default Reels;
