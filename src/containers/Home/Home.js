import React from 'react';
import {VideoPreview} from "../../components/VideoPreview/VideoPreview";
import './Home.scss'
import {SideBar} from "../SideBar/SideBar";
import {VideoGrid} from "../../components/VideoGrid/VideoGrid";

export class Home extends React.Component {
    render() {
        return (
            <>
                <SideBar/>
                <div className="home">
                    <div className="responsive-video-grid-container">
                        <VideoGrid title ='Trending'/>
                        <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
                    </div>
                </div>
            </>
        );
    };

};