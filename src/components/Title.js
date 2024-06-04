const Title=({title, title1}) => {
    return(
        <div>
            <div className="mt-4 d-flex">
                <h2>{title}</h2>
            </div>
            <div className="mt-4">{title1}</div>
        </div>
    )
}

export default Title;