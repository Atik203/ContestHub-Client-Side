const ContestCard = ({ item }) => {
  const { name, img, participant, description, _id } = item;

  const styles = {
    borderRadius: "8px",
    borderBottom: "3px solid red",
  };
  return (
    <div
      className="h-[540px] rounded-md"
      style={{ background: "var(--Dark-07, #F3F3F3)" }}
    >
      <img src={img} alt="" className="w-full h-[300px]" />
      <div className="py-4 px-2 mt-2 space-y-1">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <p className="text-center">Attempted Count:{participant}</p>
        <p className="text-center">{description}</p>
      </div>
      <div className="card-actions justify-center mt-2">
        <button
          className="btn text-red-500 bg-[#E8E8E8] hover:bg-[#1F2937]"
          style={styles}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ContestCard;
