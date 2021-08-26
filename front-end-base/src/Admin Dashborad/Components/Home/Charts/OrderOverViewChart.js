import React, { Component } from 'react';
import CanvasJSReact from '../../../../Canvas Assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 //https://canvasjs.com/react-charts/animated-chart/ : Soruce
class OrderOverViewChart extends Component {
		render() {
		const options = {
			title: {
				text: "Orders"
			},
			backgroundColor: "#F5DEB3",
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "doughnut",
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default OrderOverViewChart;