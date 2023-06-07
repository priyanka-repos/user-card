import React from "react";
import ReactRecharts from "echarts-for-react"; 


function DashBoard({userList}) {
  const cityCounts = {};
  userList.forEach(user => {
    const city = user.city;
    cityCounts[city] = (cityCounts[city] || 0) + 1;
  });
  const cities = Object.keys(cityCounts);
    const option = {
        xAxis: {
          type: 'category',
          data: cities
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: Object.values(cityCounts),
            type: 'bar'
          }
        ]
      }; 
      const chartStyle = {
        height: '370px', // Adjust the height as desired
        width: '800px'  , // Adjust the width as desired
        marginLeft: 60
      };
    
    return (
    <div>
      <ReactRecharts option={option} style={chartStyle}/>;
      <h3 style={{color:'blueviolet',marginLeft: 70}}>Number of Users: {userList.length}</h3>
    </div>
    );
    
}

export default DashBoard