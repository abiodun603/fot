import React, { useEffect } from 'react'
import HeadFoot from '../../component/HeadFoot';
import {ServiceContainer,ServiceContent} from './Service';
function Service(props) {
    useEffect(() => {
        props.setSidebar(false);
    },[]);
    return (
        <>
        <HeadFoot {...props}>
            <ServiceContainer>
                <ServiceContent>
                    <div className='hero_section'>
                        <h4 className='hero_title'>Solutions just for you</h4>
                        <div className='hero_subtitle'>
                            you can select from a variety of our medium voltage solutions.
                        </div>
                    </div>
                    <div className='service_bottom_section'>
                        <div className='card_section'>
                            <div className='left_section'>

                            </div>
                            <div className='right_section'>

                            </div>
                        </div>
                    </div>
                </ServiceContent>
            </ServiceContainer>
        </HeadFoot>
    
    </>
    )
}

export default Service
