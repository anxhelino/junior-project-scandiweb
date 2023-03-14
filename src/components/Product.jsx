const Product = ({ sku, name, price, specs, id }) => {
  // Select delete checkbox
  const selectProduct = (e) => {
    // Select Ui checkbox when clicking containing div
    let check = e.target
      .closest(`.card`)
      .querySelector(`[name="name"]`).checked;
    e.target.closest(`.card`).querySelector(`[name="name"]`).checked = !check;
  };

  return (
    <div className="card" onClick={selectProduct} id={id}>
      <input
        onClick={(e) => (e.target.checked = !e.target.checked)}
        type="checkbox"
        name="name"
        id={id}
        className="delete-checkbox"
        style={{ width: "20px", height: "20px" }}
      />
      <div className="cardContainer">
        <p>{sku}</p>
        <p>{name}</p>
        <p>{price}$</p>
        <p>{specs}</p>
      </div>
    </div>
  );
};

export default Product;
