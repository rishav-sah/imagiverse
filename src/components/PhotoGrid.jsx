import { useEffect, useState } from "react";
import { getPhotosList } from "../utils/api";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import { Link } from "react-router-dom";

const PhotoGrid = () => {
  const [listOfPhotos, setListOfPhotos] = useState([]);
  const [searchedPhotos, setSearchedPhotos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getPhotosList();
    return setListOfPhotos(data);
  };

  return (
    <section className="p-4 grid md:place-items-center">
      <Search getSearchedPhotos={setSearchedPhotos} />
      <div className="mt-8 max-w-7xl sm:columns-2 md:columns-3">
        {
          !searchedPhotos.length
            ? listOfPhotos?.map((res) => (
              <Link key={res.id} to={`/photos/${res.id}`}>
                <PhotoCard resInfo={res} />
              </Link>
            ))
            : searchedPhotos?.map((res) => (
              <Link key={res.id} to={`/photos/${res?.preview_photos[0]?.id}`}>
                <PhotoCard resInfo={res} />
              </Link>
            ))
        }
      </div>
    </section>
  );
};

export default PhotoGrid;