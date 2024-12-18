import { useState, useEffect, useRef } from "react";
import Photo from "./Photo";

export default function PhotoAlbums() {
  const [images, setImages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3SvFYYPb_6ka6bsgg5M6dgu3sxCLrRf5PA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9E1slzg2q4XkrH_WrZjKlKxgnlPu8kfe3Q&s",
    "https://www.revivalanimal.com/_next/image?url=https%3A%2F%2Fwp.revivalanimal.org%2Fapp%2Fuploads%2F2022%2F08%2FBowed-Legs-in-Puppies.webp&w=3840&q=75",
  ]);
  const [newImage, setNewImage] = useState("");
  const ref = useRef();

  useEffect(() => {
    // alert("Sign up for our newlsetter!");
    ref.current.focus();
  });

  function handleAddImageClick() {
    setImages([...images, newImage]);
    setNewImage("");
  }
  return (
    <div>
      <h2>Photo Albums</h2>
      <p>View your favorite photos in these albums.</p>
      <input
        id="input"
        ref={ref}
        type="text"
        placeholder="paste img address here"
        value={newImage}
        onChange={function (e) {
          setNewImage(e.target.value);
        }}
      />
      <button onClick={handleAddImageClick}>Add Photo</button>
      <div>
        {images.map((image, index) => (
          <Photo key={index} imgSource={image} />
        ))}
      </div>
    </div>
  );
}
