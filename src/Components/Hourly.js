
import moment from 'moment'


import sun from '../Images/sun.jpeg';
import cloud from '../Images/cutecloud.jpeg';
const Hourly = ({hourly}) =>{
    return(
        <div>
             {
                    hourly?.map((hr, key) =>{
                        return(
                            <div className='HrBroadcastView' key={key}>
                                <p className="pt-2">{moment.utc(hr?.dt, 'X').format('HH:MM')}</p>
                                    {
                                       hr?.weather[0]?.description.includes('clouds') ? (<img src={cloud} alt='no' />) : (<img src={sun} alt='no' />)     
                                    }
                                <p className="pt-2">{hr?.temp}&deg;C</p>
                            </div>
                        )
                    })
                }
        </div>
    )
} 

export default Hourly;