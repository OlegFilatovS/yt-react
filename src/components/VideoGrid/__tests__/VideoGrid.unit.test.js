import React from "react";
import {shallow} from 'enzyme';
import {VideoGrid} from "../VideoGrid";


describe('VideoGrid',()=>{
    test('renders empty VideoGrid',()=>{
        const wrapper = shallow (
            <VideoGrid/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});

test('renders VideoGrid with title ',()=>{
    const wrapper = shallow (
        <VideoGrid title ='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders VideoGrid without devider ',()=>{
    const wrapper = shallow (
        <VideoGrid hideDivider ={true} />
    );
    expect(wrapper).toMatchSnapshot();
});