function UserReelsCard({ reel }) {
  return (
    <div className="card p-4 border rounded shadow mb-4">
      <h3 className="font-semibold text-lg mb-2">
        {reel.title || "Untitled Reel"}
      </h3>

      {reel.video ? (
        <video
          controls
          width="100%"
          className="rounded"
        >
          <source src={reel.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p className="text-gray-500">No video available</p>
      )}
    </div>
  );
}

export default UserReelsCard;
