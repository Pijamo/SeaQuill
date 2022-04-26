import React from 'react';
import {BarChart, LabelList, XAxis, YAxis, Tooltip,CartesianGrid, Legend, Bar} from 'recharts';

export default function Prosperity(scores){

var data = scores;


return(
    <div><h4>Individual Propserity Scores (out of 100)</h4>

    <BarChart
    width={600}
    height={400}
    data={data}
    margin={{ top: 5, right: 10, left: 10, bottom: 20 }}
    >
    <CartesianGrid vertical={false} strokeDasharray="3 3" />
    <XAxis dataKey='metric'  label={{value:'Metric', dy: 25}}/>
    <YAxis yAxisId={0}  tickCount="6" domain={[0,100]} label={{value:'Score ', angle: -90, dx: -25}}/>
    
    <Bar dataKey='score' fill='#ffffff' stroke='#444444'>
        <LabelList dataKey="score" position="end" angle="0"  />
    </Bar>
    <Tooltip />

    </BarChart>
    </div>
)

}

