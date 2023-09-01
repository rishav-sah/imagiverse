import { useEffect, useState } from "react";
import { getPhotosList } from "../utils/api";
import { data } from "../utils/apiData";
import PhotoCard from "./PhotoCard";
import Search from "./Search";

const PhotoGrid = () => {
  const [listOfPhotos, setListOfPhotos] = useState([]);

  console.log("PhotoGrid Component Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getPhotosList();
    return setListOfPhotos(data);
  };

  return (
    <section className="p-4 grid md:place-items-center">
      <Search getSearchedPhotos={setListOfPhotos} />
      <div className="sm:columns-2 md:columns-3 max-w-7xl">
        {
          listOfPhotos.map((res) => {
            return (<PhotoCard key={res.id} resInfo={res} />);
          })
        }
      </div>
    </section>
  );
};

export default PhotoGrid;