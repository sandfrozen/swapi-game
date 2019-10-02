import React from "react"
import GameButton from "./GameButton"

import { shallow } from "enzyme"
import configure from '../../test.config'

describe("GameButton", () => {
  it("should do not have the label", () => {
    const wrapper = shallow(<GameButton/>)
    const labelDiv = wrapper.find("div div")
    expect(labelDiv.exists()).toBe(false)
    
  })
  
  it("should have the label", () => {
    const label = "Test"
    const wrapper = shallow(<GameButton label={label}/>)
    const labelDiv = wrapper.find("div div")
    expect(labelDiv.text()).toBe(label)
    
  })
  
  it("should have default titile", () => {
    const wrapper = shallow(<GameButton/>)
    const button = wrapper.find("div button")
    expect(button.text()).toBe("Button")
  })
  
  it("should have custom titile", () => {
    const title = "Test"
    const wrapper = shallow(<GameButton title={title}/>)
    const button = wrapper.find("div button")
    expect(button.text()).toBe(title)
  })
})