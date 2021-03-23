import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {act} from 'react-dom/test-utils'


import Dashboard from '../Components/dashboard/Dashboard'

let container= null;

beforeEach(()=>{
    container= document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})

it("render Heade",()=>{
    act(()=>{
        render(<Dashboard></Dashboard>, container)
    })
    expect(container.textContent[0]).toBe(undefined);
})
