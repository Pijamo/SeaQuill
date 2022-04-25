import React from 'react';
import {LineChart,XAxis, YAxis, Tooltip,CartesianGrid, Line} from 'recharts';

export default function Climate(climate){
const months = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "June", 7: "July", 8: "Aug", 9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"}
var data = climate;
if (!isNaN(climate)){
    data.forEach(item => item.month = months[item.month])
}

return(

    <LineChart
    width={600}
    height={400}
    data={data}
    margin={{ top: 5, right: 20, left: 10, bottom: 20 }}
    >
    <XAxis dataKey="month" label={{value:'month', dy: 25}}/>
    <YAxis yAxisId={0}  dataKey="averageTemp" tickCount="6"  label={{value:'Temperature (˚F)', angle: -90, dx: -25}}/>
    <YAxis yAxisId={1} hide="true"/>
    <YAxis yAxisId={2} hide="true"/>
    <Tooltip />
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" dataKey="averageTemp" stroke="#387908" yAxisId={0} />
    <Line type="monotone" dataKey="minTemp" stroke="#0000ff" yAxisId={0} />
    <Line type="monotone" dataKey="maxTemp" stroke="#ff0000" yAxisId={0} />
    <Line type="monotone" dataKey="totalRain" stroke="#000000" yAxisId={1} />
    <Line type="monotone" dataKey="totalSnow" stroke="#cccccc" yAxisId={2} />
    </LineChart>

)

}

