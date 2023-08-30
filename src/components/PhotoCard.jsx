const PhotoCard = (props) => {
  const { urls, alt_description } = props.resInfo;
  return (
    <div>
      <figure className="mb-4">
        <img src={urls?.small} className="bg-cover w-full" alt={alt_description} />
      </figure>
    </div>
  );
};

export default PhotoCard;