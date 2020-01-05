import React from "react";
import Header from "./Header";
import { mount } from "enzyme";

describe(Header, () => {
    const wrapper = mount(<Header />);

    it("renders static content correctly", () => {
        expect(wrapper)
            .toMatchSnapshot();
    })


})