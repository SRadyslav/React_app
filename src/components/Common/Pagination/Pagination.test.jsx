import React, { useState } from "react";
import {create} from "react-test-renderer"
import Pagination from "./Pagination";

describe("Paginator component test", ()=> {
    test("page count is 11 but should be show only 10", () => {
        const component = create(<Pagination totalCount= {11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span.length).toBe(10);
    });
    
    test("if pages more than 10 <button> Next should be present", () => {
        const component = create(<Pagination totalCount= {11} pageSize={1} portionSize={10} />);
    const root = component.root;
    let button = root.findAllByType("button");
    expect(button.length).toBe(1);
    })
});