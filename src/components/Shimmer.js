
const Shimmer =() =>{
    return(
            new Array(12).fill(0).map((card, index)=>{
                return(
                        <div className="custom-card d-flex flex-column gap-2" key={index} >
                            <div className="imgContainer"></div>
                            <div className="nameContainer"></div>
                            <div className="d-flex justify-content-between">
                                <div className="ratingContainer"></div>
                                <div className="timeContainer"></div>
                            </div>
                            <div className="cuisineContainer"></div>
                            <div className="areaContainer"></div>
                        </div>
                )
            })
    )
}

export default Shimmer;