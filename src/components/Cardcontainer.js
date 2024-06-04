import Restaurantcard from "./Restaurantcard";
// import masterData from "../utils/dummyData";
import CorosalCard from "./CorosalCard";
import { useEffect, useState } from "react";
import { RES_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import CarousalShimmer from "./CarousalShimmer";
import Title from "./Title";
// import CarousalShimmer from "./CarousalShimmer";

const Cardcontainer = ()=>{
    // const {imgURL,name,rating,deliveryTime,cuisines,location}=data[0];
    // console.log("restaurantCollection",masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // const collection = masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log("corosalCollection",masterData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    // const corosalCollection = masterData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    const [restaurant, setRestaurant] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [corausal, setCorausal] = useState([]);
    const [searchText,setSearchText]=useState([]);
    const [title, setTitle] = useState([]);
    const [title1, setTitle1] = useState([]);
    const [category, setActiveCategory] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getData = async() => {
        try{
            // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const data = await fetch(RES_URL);
            const json = await data.json();
            console.log("responseData", json?.data?.cards[1]?.card);
            setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setCorausal(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
            setTitle(json?.data?.cards[0]?.card?.card?.header?.title);
            setTitle1(json?.data?.cards[1]?.card?.card?.header?.title);
            console.log("carousal",json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        }
        catch(err){
            console.log("error",err);
            setErrorMessage("❌There is some Error While Fetching the data, Please Try Again")
        }


    }

    useEffect(()=>{
        console.log("useEffect called");
        getData()
    },[]);

    // console.log("component rendered");

    

    const search =()=>{
        console.log("rendered");  
        const filterData=masterData.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toString().toLowerCase()));
        setRestaurant(filterData);
    }


    const handleRating =() =>{
        const filterData = masterData.filter(resItem => resItem?.info?.avgRating >4.5);
        if(restaurant !== masterData && category === "rating"){
            handleReset();
        }
        else{
            setRestaurant(filterData);
            setActiveCategory("rating");
        }
        
    }

    const handleDeliveryTime=() =>{
        const filterData = masterData.filter(resItem => resItem?.info?.sla?.deliveryTime <20);
        if(restaurant !== masterData && category === "delivery"){
            handleReset();
        }
        else{
            setRestaurant(filterData);
            setActiveCategory("delivery");
        }
    }

    const handleVeg=()=> {
        const filterData = masterData.filter(resItem => resItem?.info?.veg);
        if(restaurant !== masterData && category === "veg"){
            handleReset();
        }
        else{
            setRestaurant(filterData);
            setActiveCategory("veg");
        }    
    }

    const handleDistance =()=>{
        const filterData = masterData.filter(resItem => resItem?.info?.sla?.lastMileTravel <2);
        if(restaurant !== masterData && category === "distance"){
            handleReset();
        }
        else{
            setRestaurant(filterData);
            setActiveCategory("distance");
        }
    }

    const handleReset=()=>{
        setActiveCategory(""); 
        setRestaurant(masterData);
    }

    return(
        <>
        <div className="container d-flex justify-content-center align-items-center mt-4 cards">
            <div className="d-flex gap-2">
                <input className="text" name="search" id="inputText"  placeholder="Search for Top Restaurants" type="text"  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="btn btn-lg" onClick={search}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

        <div className="container">
            <Title title={title}/>
        </div>

        <div className="container pt-4">

        <div className="d-flex corosal-part">
        {
            corausal.map((card, index) => {
                return(
                    <CorosalCard key={index}
                        title={card?.header}
                        img={card?.imageId}
                    />
                )
            })
        }
        </div>
        </div>

        <div className="container d-flex">
            <Title title={title1}/>
        </div>

        <div className="container d-flex justify-content-center">
                <button className="btn btn-sm btn-dark mx-1 filterButtons" style={{backgroundColor: category==="rating" ? "green" : ""}} onClick={handleRating}>Rating 4.5+</button>
                <button className="btn btn-sm btn-dark mx-1 filterButtons" style={{backgroundColor: category==="delivery" ? "green" : ""}} onClick={handleDeliveryTime}>Fast Delivery</button>
                <button className="btn btn-sm btn-dark mx-1 filterButtons" style={{backgroundColor: category==="veg" ? "green" : ""}} onClick={handleVeg}>Pure Veg</button>
                <button className="btn btn-sm btn-dark mx-1 filterButtons" style={{backgroundColor: category==="distance" ? "green" : ""}} onClick={handleDistance}>Within 2Km</button>
                {category && <button className="btn btn-sm btn-dark mx-1 filterButtons" onClick={handleReset}>Reset</button>}
        </div>


        <div className="container d-flex flex-wrap mt-4 gap-5">
            {/* <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/>
            <Restaurantcard url={imgURL} Name={name} Rating={rating} delivery={deliveryTime} Cuisines={cuisines} Loc={location}/> */}
        {
            errorMessage ? 
                <div className="alert alert-danger">
                    <strong>Warning!</strong>{errorMessage}
                </div>:
                restaurant.length !==0 ?
                    restaurant.map((card)=>{
                        return(
                            <Restaurantcard
                            key={card?.info?.id}
                            {...card?.info}
                                // imgURL = {card?.info?.cloudinaryImageId}
                                // name =  {card?.info?.name}
                                // rating = {card?.info?.avgRating}
                                // deliveryTime = {card?.info?.sla?.slaString}
                                // cuisines = {card?.info?.cuisines.join(",  ")}
                                // location = {card?.info?.areaName}
                                />
                        )
                    }) : <><div className="container"><CarousalShimmer/><div className="container d-flex flex-wrap mt-4 shimmerStyle"><Shimmer/></div></div></>
                    
            }

            
        </div>
    </>
 
        
    )
            
    
}

export default Cardcontainer;
