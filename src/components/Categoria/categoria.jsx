import "./categoria.css";

function categoria() {
    return(
        <div className="categoria">
        <div className="card">
            <img src="/images/Dining.png" alt="Card"/>
            <img src="/images/Living.png" alt="Card"/>
            <img src="/images/Bedroom.png" alt="Card"/>
        </div>  
        <div className="nomeCategoria">
            <text>Dining</text>
            <text>Living</text>
            <text>Bedroom</text>
        </div>
        </div>
    );
}
    
export default categoria;