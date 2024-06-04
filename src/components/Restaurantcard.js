import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/config";

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines , areaName, id})=>{


    return(
        <Link to={`/menu/${id}`} className="custom-card pt-2 pb-2 ">
            <div>
                <img src={IMG_URL+cloudinaryImageId} alt="resimage"/>
            </div>
            <div className="name">{name}</div>
            <div className="d-flex justify-content-between">
                <div className="bg-success text-white px-1 rounded"><i className="fa-solid fa-star" style={{color:"#FFD43B"}}></i> {avgRating}/10</div>
                <div className="rating"><i className="fa-solid fa-clock" style={{color:"#ff5722"}} ></i> {sla?.deliveryTime} min</div>
            </div>
            <div className="text-secondary cuisine"><i className="fa-solid fa-utensils" style={{color:"#dbc885"}} ></i> {cuisines.join(", ")}</div>
            <div className="text-secondary cuisine"><i className="fa-solid fa-location-dot" style={{color:"#eb0a20"}}></i> {areaName}</div>
        </Link>
    );
            
     
}

export default Restaurantcard;