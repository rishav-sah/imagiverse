import { useEffect, useState } from "react";
import { getPhotosCollections, getPhotosList } from "../utils/api";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const PhotoGrid = () => {
  const [listOfPhotos, setListOfPhotos] = useState([]);
  const [dataCategory, setDataCategory] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getPhotosList();
    setDataCategory("random");
    return setListOfPhotos(data);
  };

  const handleSearch = async (searchQuery) => {
    setListOfPhotos([]);
    const data = await getPhotosCollections(searchQuery);
    // const flattenedPreviewPhotos = data.results.flatMap((res) => res?.preview_photos);
    console.log(data?.results);
    setDataCategory("search");
    return setListOfPhotos(data?.results);
  };

  const getLinkPath = (item, dataCategory) => {
    switch (dataCategory) {
      case "random":
        return `/photos/${item.id}`;
      case "search":
        return `/photos/${item?.preview_photos[0]?.id}`;
      default:
        return "/";
    }
  };

  return (
    <section className="grid p-4 md:place-items-center">
      <Search onSearch={handleSearch} />
      <div className="m-auto mt-8 max-w-7xl sm:columns-2 md:columns-3">
        {listOfPhotos.length ? (
          listOfPhotos.map((item) => (
            <Link key={item.id} to={getLinkPath(item, dataCategory)}>
              <PhotoCard resInfo={item} />
            </Link>
          ))
        ) : (
          <Skeleton
            className="mb-4 h-[280px] w-[420px]"
            width={300}
            height={200}
            count={12}
          />
        )}
      </div>
    </section>
  );
};

export default PhotoGrid;
