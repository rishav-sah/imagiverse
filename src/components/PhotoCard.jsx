const PhotoCard = ({ resInfo }) => {
  return (
    <div>
      <figure className="mb-4">
        <img
          src={resInfo?.urls?.small || resInfo?.preview_photos[0]?.urls?.small}
          className="w-full bg-cover"
          alt=""
        />
      </figure>
    </div>
  );
};

export default PhotoCard;
