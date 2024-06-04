import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Menu =()=>{
    const searhParams = useParams();
    const {resId} = searhParams;
    console.log("params",searhParams);
    const Menu_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.05650&lng=73.06560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
    const [menuList, setMenuList]= useState([]);
    console.log("menulist",menuList)
    

    const getMenu = async() =>{
        try{
            const menuData = await fetch(Menu_URL);
            const json = await menuData.json();
            console.log("menuData",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
            setMenuList(json?.data?.cards);
        }
        catch(error){
            console.log("error",error);
        }
    }

    useEffect(()=>{
        getMenu();
    },[])

    if(menuList.length===0) {
        return (
            <div className="container d-flex flex-wrap mt-4 shimmerStyle">
                <Shimmer/>
            </div>
        )
    }
    else{
        const firstMenu = menuList[2]?.card?.card?.info;
        if (!firstMenu) {
            return <div>Error: Menu data not available.</div>;
        }
        const{ name,cuisines,areaName,sla,avgRating,totalRatingsString, costForTwoMessage}=menuList[2].card?.card?.info;
        const {itemCards} = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log("itemCards",itemCards)
        
        const filteredData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem=>
            listItem?.card?.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            
            )
        const nestedData = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem=>
                listItem?.card?.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
                
            )  
        console.log("filtered Data", filteredData);             
        console.log("nested Data", nestedData);
    
        return(
        <div className="container mt-4" style={{width:"60%"}}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h4>{name}</h4>
                    <div className="text-secondary">{cuisines.join(", ")}</div>
                    <div className="text-secondary d-flex">{areaName},&nbsp;<span>{sla?.lastMileTravelString}</span></div>
                </div>
                <div>
                    <div className="border border-1 rounded px-2 py-3">
                        <h5 className="text-success">⭐{avgRating}</h5>
                        <hr className="my-2"></hr>
                    <div className="text-secondary">{totalRatingsString}</div>
                    </div>   
                </div>
            </div>

            <div className="dotted pt-3"></div>

            <div className="container d-flex">
                <div className="h5 d-flex mt-2 align-items-center"><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp;<dt>{sla?.slaString}</dt></div>
                
                <div className="h5 d-flex mt-2 align-items-center mx-4"><i className="fa-solid fa-stopwatch"></i>&nbsp;&nbsp;<dt>{costForTwoMessage}</dt></div>
            </div>

            <div className="d-flex align-items-center mt-3">
                <div className="container border border-1 rounded px-2 py-2 align-items-center mx-1" style={{width:"35%"}}>
                    <div className="h7 text-dark"><dt><i className="fa-solid fa-piggy-bank" style={{color:"#f55be1"}}></i>&nbsp;{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[0]?.info.header}</dt></div>

                    <div className="d-flex text-secondary offerText"><p className="division">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[0]?.info.couponCode}</p><p className="mx-1">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[0]?.info.description}</p></div>
                </div>

                <div className="container border border-1 rounded px-2 py-2 align-items-center mx-1" style={{width:"35%"}}>
                    <div className="h7 text-dark "><dt><i className="fa-solid fa-piggy-bank" style={{color:"#f55be1"}}></i>&nbsp;{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[1]?.info.header}</dt></div>

                    <div className="d-flex text-secondary offerText"><p className="division">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[1]?.info.couponCode}</p><p className="mx-1">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[1]?.info.description}</p></div>
                </div>

                <div className="container border border-1 rounded px-2 py-2 align-items-center mx-1" style={{width:"35%"}}>
                    <div className="h7 text-dark"><dt><i className="fa-solid fa-piggy-bank" style={{color:"#f55be1"}}></i>&nbsp;{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[2]?.info.header}</dt></div>
                    
                    <div className="d-flex text-secondary offerText"><p className="division">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[2]?.info.couponCode}</p><p className="mx-1">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[2]?.info.description}</p></div>
                </div>

                <div className="container border border-1 rounded px-2 py-2 align-items-center mx-1" style={{width:"35%"}}>
                    <div className="h7 text-dark "><dt><i className="fa-solid fa-piggy-bank" style={{color:"#f55be1"}}></i>&nbsp;{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[3]?.info.header}</dt></div>

                    <div className="d-flex text-secondary offerText"><p className="division">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[3]?.info.couponCode}</p><p className="mx-1">{menuList[3].card?.card?.gridElements?.infoWithStyle?.offers[3]?.info.description}</p></div>
                </div>
            </div>

            {   
                filteredData.map(filteredItem =>
                    <div className="pt-4" key={filteredItem?.card?.card?.title}>
                        <h5 className="fw-bolder">{filteredItem?.card?.card?.title}</h5>
                        {
                            filteredItem?.card?.card?.itemCards.map(itemCard =>
                                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                                    <div>
                                        <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</div>
                                        <div className="h6">{itemCard?.card?.info?.name}</div>
                                        <div><i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{color:"#047150"}}></i> {itemCard?.card?.info?.price/100}</div>
                                        <div className="text-secondary fw-light ">{itemCard?.card?.info?.description}</div>
                                    </div>

                                    <div className="thumbnail_container">
                                        <img src={IMG_URL+itemCard?.card?.info?.imageId} style={{width:"118px", height:"96px", objectFit:"cover"}}alt="img"/>
                                        <button className="btn btn-light text-success">ADD</button>
                                    </div>
                                </div>
                            )
                        }
                
                    </div>
                )
            }
            {
                nestedData.map(nestedItem =>
                        <div className="pt-4" key={nestedItem?.card?.card?.title} >
                            <h4 className="fw-bolder">{nestedItem?.card?.card?.title}</h4>
                            {
                                nestedItem?.card?.card?.categories.map((category,index)=>
                                <div key={category?.title} style={{borderBottom:"15px solid #f0f0f0"}}>
                                    <h5 className="fw-bold">{index+1}. {category?.title}</h5>
                                    {
                                        category?.itemCards.map(itemCard=>
                                            <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                                                <div>
                                                    <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</div>
                                                    <div className="h6">{itemCard?.card?.info?.name}</div>
                                                    <div><i className="fa-sharp fa-solid fa-indian-rupee-sign" style={{color:"#047150"}}></i> {itemCard?.card?.info?.price/100}</div>
                                                    <div className="text-secondary fw-light ">{itemCard?.card?.info?.description}</div>
                                                </div>

                                                <div className="thumbnail_container">
                                                    <img src={IMG_URL+itemCard?.card?.info?.imageId} style={{width:"118px", height:"96px", objectFit:"cover"}}alt="img"/>
                                                    <button className="btn btn-light text-success">ADD</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                )
                            }
                        </div>
                    )
            }
            
        </div>
        )
    }
}
    

export default Menu;