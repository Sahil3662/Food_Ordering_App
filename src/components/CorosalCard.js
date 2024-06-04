import { IMG_URL } from "../utils/config";

const CorosalCard = ({heading,img,title}) =>{
    return(
        <div className="container">
            <div>{title}</div>
            <div>
                <img src={IMG_URL+img} alt="resimage"
                 style={{width:"130px", height:"150px",objectFit:"contain"}}/>
            </div>
        </div>
    )
}


export default CorosalCard;
