import {useState,useEffect} from 'react';
import moment from 'moment'

import {FetchWeather, FetchCity} from './Api/FetchWeather'

import Hourly from './Components/Hourly';
import Daily from './Components/Daily';
import Detail from './Components/Detail';


import './App.css';
const App = () =>{

    const [Search, SetGetSearch] = useState('')
	const [weather, setWeather] = useState({})

	useEffect(() =>{
		 if ("geolocation" in navigator) {
			 	  navigator.geolocation.getCurrentPosition(function(position) {
	    		  const long = position.coords.longitude;
	    		  const lati  = position.coords.latitude;  
  	    		 	if (lati && long) {
						GetCity(lati+'+'+long );
                        getLocation(lati, long)
  	    		 	}
				})
		    } else {
		      alert("Browser Does not support Geo Location");
		    }
	}, [])

	const GetCity = async(position) =>{
			const data = await FetchCity(position)
		 	SetGetSearch(data.results[0].components.city);

	} 

    const hourly = weather?.hourly;
    const daily = weather?.daily;


    const getLocation = async (lati, long) =>{
        const data = await FetchWeather(lati, long);
		setWeather(data);
    }


    var currentHour = moment.utc(weather?.current?.dt, 'X').format('HH');


    return(
        <>
            <div className={currentHour >= 3 && currentHour < 12 ? 'sunnyClass' : 'nightClass'}>
                <h2 className="text-center py-3">{Search}</h2>
                <div className="center">
                    <h1>{weather?.current?.temp}<sup>&deg;C</sup></h1>
                    <h3>{weather?.current?.weather[0]?.description}</h3>
                </div>
                <div id="HrBroadcast">
                    <Hourly hourly={hourly} />
                
                </div>
                <hr/>
                <div className="detailSection pl-4">
                    <h5>Day Broadcast</h5>
                    <Daily daily={daily} />
                </div>
                <div className="currentdetail pl-4">
                    <h5>Details</h5>
                    <Detail details = {weather?.current} />
                    <hr/>
                    <p className="pt-5">Built By Prasanna</p>
                </div>
            </div>
        </>
    )
}

export default App