import React,{useState} from 'react';
import { MultiLineTextFields, SimpleTextFields } from './TextFields';
import colors from '../../../Theme/colors';
import { RoundButton } from '../../../CustomComponents/UI/Buttons/RoundButton';
import produce from 'immer';
import { data } from 'browserslist';
function FilterMotor(props) {

    const [serviceKeyWord,setServiceKeyWord]=useState();

    const [priceMinKeyWord,setPriceMinKeyWord]=useState();

    const [priceMaxKeyWord,setPriceMaxKeyWord]=useState();

    const [ratingKeyWord,setRatingKeyWord]=useState();

    const [subServiceKeyWord,setSubServiceKeyWord]=useState();

    const requiredMatchPercentage = 100;

    const [results,setResults]=useState([]);
    const dataToFilter = [
        {
            projectTitle:"Project titl 1",
            projectDesc:"This is new project",
            projectService:"Desktop App",
            projectSubService:"React Js",
            projectEstimatedPrice:40,
            projectPublishDate:{
                month:"4",
                date:"3",
                year:"2019",
                day:"Monday",
            },
            projectPublishTime:{
                hours:"4",
                minutes:"3",
                seconds:"2019",
                amOrPm:"AM",
            },
            projectRatingStars:3
        },
        {
            projectTitle:"Project titl 2",
            projectDesc:"This is new project 2",
            projectService:"Mobile App",
            projectSubService:"React Native",
            projectEstimatedPrice:20,
            projectPublishDate:{
                month:"2",
                date:"7",
                year:"2012",
                day:"Tuseday",
            },
            projectPublishTime:{
                hours:"2",
                minutes:"8",
                seconds:"24",
                amOrPm:"PM",
            },
            projectRatingStars:5
        },
        {
            projectTitle:"Project titl 3",
            projectDesc:"This is new project 3",
            projectService:"Desktop App",
            projectSubService:"React Js",
            projectEstimatedPrice:322,
            projectPublishDate:{
                month:"5",
                date:"3",
                year:"2022",
                day:"Tuseday",
            },
            projectPublishTime:{
                hours:"7",
                minutes:"3",
                seconds:"22",
                amOrPm:"PM",
            },
            projectRatingStars:3.5
        },
        {
            projectTitle:"Project titl 4",
            projectDesc:"This is new project 4",
            projectService:"Desktop App",
            projectSubService:"Java",
            projectEstimatedPrice:40,
            projectPublishDate:{
                month:"4",
                date:"3",
                year:"2019",
                day:"Monday",
            },
            projectPublishTime:{
                hours:"4",
                minutes:"3",
                seconds:"2019",
                amOrPm:"AM",
            },
            projectRatingStars:2
        },
        {
            projectTitle:"Project titl 6",
            projectDesc:"This is new project 6",
            projectService:"Web App",
            projectSubService:"React JS",
            projectEstimatedPrice:40,
            projectPublishDate:{
                month:"4",
                date:"3",
                year:"2019",
                day:"Monday",
            },
            projectPublishTime:{
                hours:"4",
                minutes:"3",
                seconds:"2019",
                amOrPm:"AM",
            },
            projectRatingStars:3
        },

    ]

    const searchKeyPairs = [
        {
            withRespectTo:"projectService", //This will contain value by which we have to sort. these must me keys of the data object
            values:['Desktop App'],
            typeofValue:[] //Array
        },
        {
            withRespectTo:"projectSubService", 
            values:['React Js'],
            typeofValue:[] //Array
        },
        {
            withRespectTo:"projectPublishDate", 
            typeofValue:{}, //Object
            values:{
                month:"4",
                date:"3",
                year:"2019",
                day:"Monday",
            }
        }
        
    ]

    const handelApply = ()=>{

        setResults(produce(results,draft=>{
            draft = dataToFilter.map((dataItem,index_data_to_filter)=>{
                let flag = true;
                let numberOfTimesRequired=0;
                let numberOfTimesMatched=0;
                searchKeyPairs.map((searchKeyPairItem,index_key_pair)=>{
                    // numberOfTimesRequired+=searchKeyPairItem.values.length;
                      
                    if(Array.isArray(searchKeyPairItem.values))
                    {
                        numberOfTimesRequired++;
                        // This will match in a way that at least one value from array of values should match from all arrays.
                        for(let i=0;i<searchKeyPairItem.values.length;i++)
                        {
                            if(dataItem[searchKeyPairItem.withRespectTo]===searchKeyPairItem.values[i])
                            {
                               numberOfTimesMatched++;
                               break;
                            }
                        }
                    }
                    else
                    {
                        // This will match in way that whole values object should be matched.
                        let targetValue ="";
                        let currentValue="";
                        numberOfTimesRequired++;
                        for (const key in dataItem[searchKeyPairItem.withRespectTo]) {
                            targetValue+=dataItem[searchKeyPairItem.withRespectTo][key]; 
                        }
                        for (const key in searchKeyPairItem.values) {
                            currentValue+=searchKeyPairItem.values[key];
                        }

                        if(targetValue===currentValue)
                        {
                            numberOfTimesMatched++;
                        }

                    }
                   
                })

                console.log("Number of times requ:"+numberOfTimesRequired+"Number of times matched"+numberOfTimesMatched)   
                const percentage = (parseFloat(numberOfTimesMatched)/parseFloat(numberOfTimesRequired))*100;
                console.log("Match percentage is : "+percentage);
                if(percentage>=requiredMatchPercentage)
                return(dataItem)
            })
            return draft
        }))   
    }
    return (
        <div>
            <div style={{display:"inline-block"}}>
            <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Service"} 
                        value={serviceKeyWord} 
                        setValue={setServiceKeyWord}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
            />

            </div>
           <div style={{display:"inline-block"}}>
            <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Sub Service"} 
                        value={subServiceKeyWord} 
                        setValue={setSubServiceKeyWord}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
            />
            </div>
            <div style={{display:"inline-block"}}>
            <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Price Min"} 
                        value={priceMinKeyWord} 
                        setValue={setPriceMinKeyWord}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
            />
            </div>
             <div style={{display:"inline-block"}}>
            <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Price Max"} 
                        value={priceMaxKeyWord} 
                        setValue={setPriceMaxKeyWord}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
            />
            </div>
            <div style={{display:"inline-block"}}>
            <SimpleTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Rating"} 
                        value={ratingKeyWord} 
                        setValue={setRatingKeyWord}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={'bold'}
                        labelFontSize={13}
            />
            
            </div>
            
          
            <div style={{marginTop:"2rem"}}>
            <RoundButton
             title={"Apply"}
             width={40}
             color={colors.white}
             bgColor={colors.primary}
             margin={"0% 0% 0%  0%"}
             handleClick={handelApply}
            />
            </div>
            <div style={{marginTop:"2rem"}}>

            <MultiLineTextFields 
                        fontSize={10} 
                        fontWeight={'bold'}
                        label={"Results"} 
                        value={JSON.stringify(results)} 
                        setValue={setResults}
                        labelFontColor={"#a39f93"}
                        labelFontWeight={''}
                        rows={30}
                        width={700}    
                        />
            </div>

        </div>
    );
}

export default FilterMotor;