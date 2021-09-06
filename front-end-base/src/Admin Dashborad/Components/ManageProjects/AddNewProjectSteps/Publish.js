import { Card, CardContent, CardHeader, Divider,Grid,Icon } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import { Headingfonts } from '../../../../Theme/fonts';
import { Headings } from '../../Support/Headings';
import {lightBorder} from '../../../../Theme/borders'
function Publish(props) {
    const handelPublishOnWebSite=()=>{
        alert("Just call the api to add this in database")
        // const data = {
        //     projectTitle:null,
        //     projectDesc:null,
        //     projectService:null,
        //     projectSubService:null,
        //     projectEstimatedPrice:null,
        //     projectPublishDate:null,
        //     clientSideViewUrl:null,
        //     listOfKeyWords:[],
        //     isEditingEnabled:false
        // }
        // store.dispatch(actions.update_baic_info_ADD_NEW_PROJECTS(data));
        // store.dispatch(actions.update_media_ADD_NEW_PROJECTS(null,[],false));
        
    }
    return (
        <div style={{position:'relative'}}>
        <Card
            elevation={0}
            style={{border:lightBorder,height:'10rem'}}
        >
            <CardContent>
            <div style={{position:'absolute',top:'0rem',left:'0.5rem'}}>
                <Headings  text={"Publish"} fontSize={35}/>
            </div>
            <div  style={{position:'absolute',top:'5rem',left:'0.5rem'}}>
            <RoundButton
                title={"Publish it on website"}
                width={200}
                color={colors.white}
                bgColor={colors.primary}
                margin={"0% 0% 0%  150%"}
                handleClick={handelPublishOnWebSite}
                />
            </div>
            </CardContent>

        </Card>
        </div>
    );
}

export default Publish;