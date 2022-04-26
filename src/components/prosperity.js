import React from 'react';
import {BarChart, LabelList, XAxis, YAxis, Tooltip,CartesianGrid, Legend, Bar} from 'recharts';

export default function Prosperity(scores){

var data = scores;


return(
    <div><h4>Individual Prosperity Scores</h4>

    <BarChart
    width={600}
    height={600}
    data={data}
    layout='vertical'
    margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
    >
    <CartesianGrid horizontal={false} strokeDasharray="3 3" />
    <XAxis  dataKey='score' type='number' tickCount='10' domain={[10, 100]} label={{value:'Score (out of 100)', dy: 25}}/>
    <YAxis width={200} dataKey='metric' type='category'/>
    
    <Bar dataKey='score' label={{value:'Score', position: "right"}} fill='#097969' stroke='#444444'>
    </Bar>

    </BarChart>
    </div>
)

}

