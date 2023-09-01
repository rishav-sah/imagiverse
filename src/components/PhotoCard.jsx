const PhotoCard = ({ resInfo }) => {
  return (
    <div>
      <figure className="mb-4">
        <img src={resInfo?.urls?.small || resInfo?.preview_photos[0]?.urls?.small} className="bg-cover w-full" alt="" />
      </figure>
    </div>
  );
};

export default PhotoCard;