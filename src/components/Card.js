function Card({ name, image, category, description, price, mobile, email }) {
  return (
    <div className="card m-3">
      <img
        src={image}
        alt=""
        className="card-img-top img fluid"
        style={{ height: "10rem", width: "18rem" }}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{category}</h5>
        <h5>{description}</h5>
        <h5>GH₵{price}.00</h5>
        <h5>{mobile}</h5>
        <h5>{email}</h5>
      </div>
    </div>
  );
}

export default Card;
