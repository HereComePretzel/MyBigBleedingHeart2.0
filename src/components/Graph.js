import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'



const Graph = (props) => {

    const formatData = () => {
        const chartData = [];
    
        props.posts.forEach(postObj => {
            const chartObj = {};
            var dateAtt = postObj['date']
            var dateString = dateAtt.toString()
            chartObj.name = dateString.slice(0, 5)
            chartObj.data = postObj['number'];
            chartData.push(chartObj);
        })
        return chartData
    }


    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#3C4F76', fontSize:'50px', padding: '55px', border: '10px solid #000000' }}>
                    <label style={{color: "white"}}> {payload[0].data}<br></br> Rating= {payload[0].value} </label>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="chart-wrapper" style={{color:'white'}, {padding:'70px'}}>
            <AreaChart
                width={2000}
                height={530}
                data={formatData()}
                margin={{
                    top: 1, right: 30, left: 0, bottom: -50
                }}
                >
                <CartesianGrid  strokeDasharray="1001 3" />
                <XAxis dataKey='name' stroke="FFFFFF"/>
                <YAxis  stroke="FFFFFF"/>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey='data' opacity='100%' fill='#FFC107' stroke="black" activeDot={{r: 8 }} />
                </AreaChart>

                </div>
        )
}


export default Graph