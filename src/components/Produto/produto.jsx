import "./produto.css";
import PropTypes from "prop-types";

function ProdutoCard({ nome, descricao, precoAntes, precoAgora, imagemAlt }) {
  return (
    <div className="singular">
      <img src={`./public/images/${imagemAlt}.png`} alt={imagemAlt} />
      <div className="espaco">
        <p className="titulo">{nome}</p>
        <p className="texto">{descricao}</p>
        <div className="preco">
          <p className="titulo-preco">Rp {precoAgora}</p>
          {precoAntes && <p className="texto-preco">Rp {precoAntes}</p>}
        </div>
      </div>
    </div>
  );
}

ProdutoCard.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  precoAntes: PropTypes.string,
  precoAgora: PropTypes.string.isRequired,
  imagemAlt: PropTypes.string.isRequired,
};

function Produto() {
  return (
    <div className="produto">
      <p className="titulo-principal">Our Products</p>

      <div className="row">
        <ProdutoCard
          nome="Syltherine"
          descricao="Stylish cafe chair"
          precoAntes="3.500.000"
          precoAgora="2.500.000"
          imagemAlt="Syltherine"
        />
        <ProdutoCard
          nome="Leviosa"
          descricao="Stylish cafe chair"
          precoAgora="2.500.000"
          imagemAlt="Leviosa"
        />
        <ProdutoCard
          nome="Lolito"
          descricao="Luxury big sofa"
          precoAntes="14.000.000"
          precoAgora="7.000.000"
          imagemAlt="Lolito"
        />
        <ProdutoCard
          nome="Respira"
          descricao="Outdoor bar table and stool"
          precoAgora="500.000"
          imagemAlt="Respira"
        />
      </div>

      <div className="row2">
        <ProdutoCard
          nome="Grifo"
          descricao="Night lamp"
          precoAgora="1.500.000"
          imagemAlt="Grifo"
        />
        <ProdutoCard
          nome="Muggo"
          descricao="Small mug"
          precoAgora="150.000"
          imagemAlt="Muggo"
        />
        <ProdutoCard
          nome="Pingky"
          descricao="Cute bed set"
          precoAntes="14.000.000"
          precoAgora="7.000.000"
          imagemAlt="Pingky"
        />
        <ProdutoCard
          nome="Potty"
          descricao="Minimalist flower pot"
          precoAgora="500.000"
          imagemAlt="Potty"
        />
      </div>
        <button className="botaoVerMais">Show More</button>
    </div>
  );
}

export default Produto;
