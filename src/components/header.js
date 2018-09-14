import React, { Component } from 'react';
import { Menu, Button, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Content from './request service/content'
import './request service/styles.css'
const MenuItems = (props) => {
  console.log(props.titles)
  return props.titles.map((v, i) => {
    return (
      <Menu.Item key={i} name={v} active={props.activeItem === v} />
    )
  });
}

class App extends Component {
  state =
    {
      activeItem: "x"
    }
  render() {
    const { activeItem } = this.state
    const headerTitles = ["Dashboard", "Service Request", "Invoices", "Messages", "Freelancers", "Facilities"]    
    return (
      <div id="contentBackground" >
        <Menu id="menu" inverted size="large">
          <Menu.Item header inverted >Lingvista</Menu.Item>
          <MenuItems titles={headerTitles} activeItem={activeItem} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button id="headerButton" >New service request</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Content />
      </div>
    );
  }
}

export default App;
