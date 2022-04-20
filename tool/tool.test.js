import React from "react";
import { shallow } from "enzyme";
import Tool from "./tool";

describe("Tool", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tool />);
    expect(wrapper).toMatchSnapshot();
  });
});
