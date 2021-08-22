import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Headingfonts } from '../../Theme/fonts';
function FeaturesContainer(props) {
    return (
        <div>
            <div>
                 {/* <FontAwesomeIcon icon={faDotCircle} size="1x" /> */}
                
                <ul>
                    <li>
                        <h3 style={{font:Headingfonts.small}}>Feature 1</h3>
                        <ul>
                            <li> <h3 style={{font:Headingfonts.extraSmall}}>Feature 1</h3></li>
                            <li> <h3 style={{font:Headingfonts.extraSmall}}>Feature 1</h3></li>
                            <li> <h3 style={{font:Headingfonts.extraSmall}}>Feature 1</h3></li>
                            <li> <h3 style={{font:Headingfonts.extraSmall}}>Feature 1</h3></li>
                
                        </ul>
                    </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 2</h3> </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 3</h3> </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 4</h3> </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 5</h3> </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 6</h3> </li>
                    <li><h3 style={{font:Headingfonts.extraSmall}}>Feature 7</h3> </li>
                </ul>
            </div>
        </div>
    );
}

export default FeaturesContainer;