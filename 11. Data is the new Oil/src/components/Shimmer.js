const Shimmer = () => {
  return (
    <div className="mx-4 flex flex-wrap justify-center">
      {Array(10)
        .fill(" ")
        .map((e, index) => (
          <div className="m-5 h-52 w-52 border border-gray-300 rounded-lg break-before-left bg-gray-200 " key = {index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
