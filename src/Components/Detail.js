const Detail = ({details}) =>{
    return(
        <>
            <div className="detailList">
                <div>
                    <p>Feels Like</p>
                    <p className="px-2">{details?.feels_like}</p>
                </div>
                <div>
                    <p>Humidity</p>
                    <p className="px-2">{details?.humidity}</p>
                </div>
                <div>
                    <p>Dew Point</p>
                    <p className="px-2">{details?.dew_point}</p>
                </div>
                <div>
                    <p>Pressure</p>
                    <p className="px-2">{details?.pressure}</p>
                </div>
            </div>
        </>
    )
} 

export default Detail;