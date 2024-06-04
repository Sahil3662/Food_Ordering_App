const Footer = ()=>{
    return(
        <div className="container-fluid d-flex mt-3 FooterBox">
            <ol className="list-group list-group-flush List1">
                <li className="list-group-item listData" id="listHeading"><strong><img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="logo" style={{height:"40px"}} className="footerIcon"/>Swiggy</strong></li>
                <li className="list-group-item listData"><i className="fa-regular fa-copyright" style={{color:"#4d4d4d"}}></i> 2023 Bundl Technologies <br/>Pvt.Ltd</li>
            </ol>

            <ol className="list-group list-group-flush List2">
                <li className="list-group-item listData" id="listHeading"><strong>Company</strong></li>
                <li className="list-group-item listData">About</li>
                <li className="list-group-item listData">Careers</li>
                <li className="list-group-item listData">Team</li>
                <li className="list-group-item listData">Swiggy One</li>
                <li className="list-group-item listData">Swiggy Instamart</li>
                <li className="list-group-item listData">Swiggy Genie</li>
            </ol>

            <ol className="list-group list-group-flush List3">
                <li className="list-group-item listData" id="listHeading"><strong>Contact Us</strong></li>
                <li className="list-group-item listData"><a href="https://www.instagram.com/swiggyindia/" rel="noreferrer" target="_blank"><span className="instagram"><span className="fa fa-instagram"></span></span></a></li>
                <li className="list-group-item listData"><a href="https://www.snapchat.com/" rel="noreferrer" target="_blank"><i className="fa-brands fa-snapchat fa-beat smLogo" style={{color:"#ffd43b"}}></i></a></li>
                <li className="list-group-item listData"><a href="https://twitter.com/Swiggy" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter smLogo" style={{color:"#74c0fc"}}></i></a></li>
            </ol>

            <ol className="list-group list-group-flush List4">
                <li className="list-group-item listData " id="listHeading"><strong>We deliver to:</strong></li>
                <li className="list-group-item listData">Mumbai</li>
                <li className="list-group-item listData">Pune</li>
                <li className="list-group-item listData">Banglore</li>
                <li className="list-group-item listData">Gurgaon</li>
                <li className="list-group-item listData">Delhi</li>
                <li className="list-group-item listData">Hydrebad</li>
            </ol>
        </div>
    )
            
    
}

export default Footer;