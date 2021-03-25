
import moment from 'moment'


import sun from '../Images/sun.jpeg';
import cloud from '../Images/cutecloud.jpeg';

const Daily = ({daily}) =>{
    return(
        <div className="row pt-3">
                    <div className="col-3">
                          {
                              daily?.map((day, key) =>{
                                  return(
                                      <p key={key}>{moment.utc(day?.dt, 'X').format('DD/MM')}</p>
                                  )
                                  })
                          }

                    </div>
                    <div className="col-3">
                         {
                              daily?.map((day, key) =>{
                                  return(
                                      <p key={key}>{moment.utc(day?.dt, 'X').format('dd')}</p>
                                  )
                                  })
                          }
                    </div>
                    <div className="col-3">
                    {
                              daily?.map((day, key) =>{
                                  return(
                                    <p className="dayDes" key={key}>
                                        {
                                            day?.weather[0]?.description.includes('clouds') ? (<img src={cloud} alt='no' />) : (<img src={sun} alt='no' />)     
                                        }
                                    </p>
                                  )
                                  })
                          } 
                    </div>
                    <div className="col-3">
                    {
                              daily?.map((day, key) =>{
                                  return(
                                      <p key={key}>{day?.temp?.max}</p>
                                  )
                                  })
                          }
                    </div>
                </div>
    )
} 

export default Daily;