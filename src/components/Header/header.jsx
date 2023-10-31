import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="row">
        <img src="./public/images/Logo.png" alt="Logo" />
      </div>
      <div className="header1">
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="header2">
        <img src="./public/images/Conta.png" alt="Logo" />
        <img src="./public/images/Lupa.png" alt="Logo" />
        <img src="./public/images/Favorito.png" alt="Logo" />
        <img src="./public/images/Carrinho.png" alt="Logo" />
      </div>
    </div>
  );
}

export default header;

