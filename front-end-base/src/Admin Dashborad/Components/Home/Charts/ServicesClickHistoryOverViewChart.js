import React,{useEffect, useState} from 'react';
import CanvasJSReact from '../../../../Canvas Assets/canvasjs.react';
import produce from 'immer';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 //https://canvasjs.com/react-charts/animated-chart/ : Soruce


function ServicesClickHistoryOverViewChart(props) {
	// console.log("GM:"+props.graphMode)
	const [reReder,setReRender]=useState(true);
	const [options,setOptions]=useState({
		title: {	
		},
		backgroundColor: "#F5DEB3",
		animationEnabled: true,
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type:"bar",
			dataPoints: [
				{ label: "Mobile App Developement",  y: 10  },
				{ label: "Wev App Developement", y: 15  },
				{ label: "Web App Developement", y: 25  },
				{ label: "Mobile Game App Developement",  y: 30  },
				{ label: "Desktop Game App development",  y: 30  },
			
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

export default ServicesClickHistoryOverViewChart;
