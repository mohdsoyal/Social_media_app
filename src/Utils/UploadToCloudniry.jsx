const cloud_name = "dnxh62qtq";
const upload_preset = "ms-social";

export const uploadToCloudinary = async (file, fileType) => {
  if (file && fileType) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name",cloud_name);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`, {
      method: "POST",
      body: data,
    });

    const fileData = await res.json();
    console.log("Cloudinary response:", fileData);
    return fileData.secure_url; // Return secure_url
  } else {
    console.error("Invalid file or fileType");
    return null;
  }
};
