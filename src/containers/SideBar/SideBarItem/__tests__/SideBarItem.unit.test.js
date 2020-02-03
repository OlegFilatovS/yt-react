import React from "react";
import {shallow} from 'enzyme';
import {SideBarItem} from "../SideBarItem";

describe('SideBarItem',()=>{
    test('renders empty sideBarItem',()=>{
        const wrapper = shallow (
            <SideBarItem/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});

test('renders highlighted sideBarItem with icon ' +
    'navigation to /feed/trending',()=>{
    const wrapper = shallow (
        <SideBarItem highlight icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
});

test('renders non-highlighted sideBarItem with icon and' +
    ' navigation to /feed/trending',()=>{
    const wrapper = shallow (
        <SideBarItem icon='fire' label='Trending' />
    );
    expect(wrapper).toMatchSnapshot();
});