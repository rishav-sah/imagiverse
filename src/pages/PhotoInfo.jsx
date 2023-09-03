import { useParams } from "react-router-dom";
import { getPhotosById } from "../utils/api";
import { useEffect, useState } from "react";

const PhotoInfo = () => {
  
  const { id } = useParams();
  const [photoDetails, setPhotoDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getPhotosById(id);
    return setPhotoDetails(data);
  };

  const { alt_description, urls, user, views, downloads, tags } = photoDetails;

  const downloadImage = async () => {
    const imageUrl = urls?.raw;
    const fileName = `format-arw-${id}-imagiVerse.jpg`;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    };
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <img className="rounded-full inline-block max-w-8" src={user?.profile_image?.small} alt={user?.name} />
          <span className="ml-2 font-medium">{user?.name}</span>
        </div>
        <div>
          <button className="rounded-md py-2 px-4 font-medium text-white bg-slate-500" onClick={downloadImage}>Download</button>
        </div>
      </div>
      <div className="my-8 mx-auto w-[320px] md:w-[425px]">
        <figure>
          <img className="w-full" src={urls?.small} alt={alt_description} />
        </figure>
      </div>
      <div className="flex">
        <div className="mx-2">
          <p className="text-xs font-medium text-slate-500">Views</p>
          <p>{views?.toLocaleString()}</p>
        </div>
        <div className="mx-2">
          <p className="text-xs font-medium text-slate-500">Downloads</p>
          <p>{downloads?.toLocaleString()}</p>
        </div>
      </div>
      <div className="my-4 flex flex-wrap">
        {
          tags?.map((res) => (
            <span className="m-2 px-2 py-1 text-slate-500 bg-slate-200 cursor-pointer" key={res?.title}>{res?.title}</span>
          ))
        }
      </div>

    </div>
  );
};

export default PhotoInfo;