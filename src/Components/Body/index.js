const Body = (props) => {
  // {tag, name, stars, originalprice, price, button}
  const items = props.items;
  const cart = props.cart;
  const setCart = props.setCart;
  const setItems = props.setItems;
  // console.log("CarT B", cart);
  function cartFunction(event) {
    var currid = event.currentTarget.id;
    console.log(items[currid].bttn);
    var Btn = items[currid].bttn;
    var temp;
    //console.log(Btn);
    if (Btn === "Add to Cart") {
      //console.log(event.currentTarget.id);
      //console.log(items[currid].isadded);

      setCart(cart + 1);
      temp = [...items];
      temp[currid].isadded = true;
      items[currid].isadded = true;
      temp[currid].bttn = "Remove from Cart";
      items[currid].bttn = "Remove from Cart";
      setItems([...temp]);

      //console.log(items[currid].isadded)
    } else if (Btn === "Remove from Cart") {
      setCart(cart - 1);
      temp = [...items];
      temp[currid].isadded = false;
      items[currid].isadded = false;
      temp[currid].bttn = "Add to Cart";
      items[currid].bttn = "Add to Cart";
      setItems([...temp]);
    }
  }

  return (
    <section className="py-5 mb-12 overflow-auto">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map(
            ({ id, tag, name, stars, originalprice, price, bttn }, index) => (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  {tag === true && (
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>
                  )}
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{name}</h5>
                      {/* <!-- Product reviews--> */}
                      {stars === true && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                        </div>
                      )}
                      {/* <!-- Product price--> */}
                      {originalprice !== "" && (
                        <span className="text-muted text-decoration-line-through">
                          {originalprice}
                        </span>
                      )}
                      &nbsp;{price}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {bttn === "View Options" ? (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          href="#"
                        >
                          {bttn}
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          id={id - 1}
                          type="button"
                          href="#"
                          onClick={cartFunction}
                        >
                          {bttn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Body;
