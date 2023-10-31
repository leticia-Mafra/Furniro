import "./inspiration.css"

function inspiration(){
    return(
        <div className="inspiration">
            <div className="inspirationTexto">
            <p className="textoRooms">50+ Beautiful rooms inspiration</p>
            <p className="textoDesign">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button>Explore More</button>
            </div>
        <div className="inspirationImg">
            <img src="./public/images/inspiration1.png" className="inspiration1"></img>
            <img src="./public/images/inspiration2.png" className="inspiration2"></img>
        </div>
        </div>
    )
}

export default inspiration;