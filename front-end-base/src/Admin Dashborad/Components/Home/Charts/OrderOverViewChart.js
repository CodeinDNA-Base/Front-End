import React,{useEffect, useState} from 'react';
import CanvasJSReact from '../../../../Canvas Assets/canvasjs.react';
import produce from 'immer';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 //https://canvasjs.com/react-charts/animated-chart/ : Soruce


function OrderOverViewChart(props) {
	// console.log("GM:"+props.graphMode)
	const [reReder,setReRender]=useState(true);
	const [options,setOptions]=useState({
		title: {	
		},
		backgroundColor: "transparent",
		animationEnabled: true,
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type:"bar",
			dataPoints: [
				{ label: "Completed",  y: 10  },
				{ label: "Canceled", y: 15  },
				{ label: "Pending", y: 25  },
				{ label: "In-progress",  y: 30  },
			
			]
		}
		]
	});

	useEffect(()=>{
		// When graph mode changes
		setOptions(produce(options,draft=>{
			draft.data[0].type=props.graphMode
		}))
		
	},[props.graphMode])

	useEffect(()=>{
		switch(props.selecteHistoryValue)
		{
			case 0:
				// Last year
				console.log("year")
				setOptions(produce(options,draft=>{
					draft.data[0].dataPoints[0].y=10
				}))
			break;

			case 1:
				// Last month
				console.log("Month")
				setOptions(produce(options,draft=>{
					draft.data[0].dataPoints[0].y=50
				}))
			break;

			case 2:
				// Last week
				setOptions(produce(options,draft=>{
					draft.data[0].dataPoints[0].y=220
				}))
			break;

			case 3:
				// Last dayconsole.log("here")
				setOptions(produce(options,draft=>{
					draft.data[0].dataPoints[0].y=30
				}))
			break;
			case 4:
				// Last Hour
				setOptions(produce(options,draft=>{
					draft.data[0].dataPoints[0].y=45
				}))
			break;

			default:

				break;
		}
		
	},[props.selecteHistoryValue])

	return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
}

export default OrderOverViewChart;