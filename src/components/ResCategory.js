import ItemList from "./ItemList";

const RestaurtantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  const itemCards = data.card.itemCards;
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.card.title} ({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurtantCategory;
