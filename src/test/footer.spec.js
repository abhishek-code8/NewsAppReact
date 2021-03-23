import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {act} from 'react-dom/test-utils'

import Footer from '../Components/footer/Footer'

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
        render(<Footer></Footer>, container)
    })
    expect(container.textContent[0]).toBe("N");
})
