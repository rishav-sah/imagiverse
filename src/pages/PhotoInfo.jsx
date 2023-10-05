import { useParams } from "react-router-dom";
import { getPhotosById } from "../utils/api";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

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
  console.log(downloads);

  const downloadImage = async () => {
    const imageUrl = urls?.raw;
    const fileName = `format-arw-${id}-imagiVerse.jpg`;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          {user !== undefined ? (
            <>
              <img
                className="max-w-8 inline-block rounded-full"
                src={user?.profile_image?.small}
                alt={user?.name}
              />
              <span className="ml-2 font-medium">{user?.name}</span>
            </>
          ) : (
            <Skeleton width={80} />
          )}
        </div>
        {urls !== undefined ? (
          <div>
            <button
              className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white"
              onClick={downloadImage}
            >
              Download
            </button>
          </div>
        ) : (
          <Skeleton width={80} />
        )}
      </div>
      <div className="mx-auto my-8 w-[320px] md:w-[425px]">
        {urls !== undefined ? (
          <figure>
            <img className="w-full" src={urls?.small} alt={alt_description} />
          </figure>
        ) : (
          <Skeleton className="h-[200px] md:h-[280px]" />
        )}
      </div>
      <div className="flex">
        <div className="mx-2">
          <p className="text-xs font-medium text-slate-500">Views</p>
          {views !== undefined ? (
            <p>{views?.toLocaleString()}</p>
          ) : (
            <Skeleton width={80} />
          )}
        </div>
        <div className="mx-2">
          <p className="text-xs font-medium text-slate-500">Downloads</p>
          {downloads !== undefined ? (
            <p>{downloads?.toLocaleString()}</p>
          ) : (
            <Skeleton width={80} />
          )}
        </div>
      </div>
      <div className="my-4 flex flex-wrap">
        {tags !== undefined ? (
          tags?.map((res) => (
            <span
              className="m-2 cursor-pointer bg-slate-200 px-2 py-1 text-slate-500"
              key={res?.title}
            >
              {res?.title}
            </span>
          ))
        ) : (
          <Skeleton
            containerClassName="flex flex-wrap"
            className="m-2 px-2 py-1"
            width={80}
            count={12}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoInfo;
