import React from 'react';
import {ComposedChart, Bar,Area, XAxis, YAxis, Tooltip,CartesianGrid, Line, Legend} from 'recharts';

export default function Climate(climate){
const months = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "June", 7: "July", 8: "Aug", 9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"}
var data = climate;
if (!isNaN(climate)){
    data.forEach(item => item.month = months[item.month])
}

return(
    <div><h4>Monthly Averages from 1981 - 2010</h4>

    <ComposedChart
    width={600}
    height={400}
    data={data}
    margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
    >
    <XAxis dataKey="month" label={{value:'month', dy: 25}}/>
    <YAxis yAxisId={0}  tickCount="6" label={{value:'Temperature (˚F)', angle: -90, dx: -25}}/>
    <YAxis yAxisId={1} orientation='right' tickCount="6" label={{value:'Precipitation (Inches)', angle: -90, dx: 15}}/>
    <Tooltip />
    <Legend layout='vertical' verticalAlign="middle" align="right" wrapperStyle={{marginRight: -50}}/>
    
    <CartesianGrid stroke="#f5f5f5" />
    <Line type="monotone" strokeWidth={1.5} dataKey="Avg Temperature" stroke="#387908" yAxisId={0} />
    <Line type="monotone" strokeWidth={1.5} dataKey="Low Temperature" stroke="#0000ff" yAxisId={0} />
    <Line type="monotone" strokeWidth={1.5} dataKey="High Temperature" stroke="#ff0000" yAxisId={0} />
    <Area type="monotone" dataKey="Total Rain" fillOpacity={0.1} stroke="#0077ff" fill="#00ccff" yAxisId={1} />
    <Area type="monotone" dataKey="Total Snow" fillOpacity={0.1} stroke="#aaaaaa" fill="#eeeeee" yAxisId={1} />
    </ComposedChart>
    </div>
)

}

