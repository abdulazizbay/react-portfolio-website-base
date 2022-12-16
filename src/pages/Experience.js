import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../styles/Experience.css'
import SchoolIcon from "@material-ui/icons/School";
const Experience = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>

                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2018-2020'
                iconStyle={{background:'#3e497a',color:'#fff'}}
                >
                <h3 className='vertical-timeline-element-title'>Django, Python, Sql, PostgreSQL</h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2021-'
                icon={<SchoolIcon/>}
                iconStyle={{background:'#3e497a',color:'#fff'}}
                >
                <h3 className='vertical-timeline-element-title'>Dongseo University, Busan, South Korea</h3>

                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date='2020-'
                icon={<SchoolIcon/>}
                iconStyle={{background:'#e9d35b',color:'#fff'}}
                >
                <h3 className='vertical-timeline-element-title'>Javascript,HTML, CSS, NPM, Bootstrap, Yarn, ReactJS</h3>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;