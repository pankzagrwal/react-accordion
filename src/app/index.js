import React, { Component } from 'react';
import AccordionComponent from './accordionComponent.js'
import './index.css';

class Accordion extends Component {
  constructor (props) {
    super (props);

    this.headerClicked = this.headerClicked.bind(this);

    this.state = {
      activeAccordion: null
    }
  }

  headerClicked (evt, contentId) {
    if (contentId === this.state.activeAccordion && this.props.collapseAll) {
      this.setState ({
        activeAccordion: null
      })
    }
    else {
      this.setState({
        activeAccordion: contentId
      })      
    }

  }
  renderChildren (props) {
    return React.Children.map(props.children, child => {
      console.log(child.type);

      return React.cloneElement(child, {
        defaultOpen: props.defaultOpen,
        headerClicked: this.headerClicked,
        activeAccordion: this.state.activeAccordion
      })
    })
  }
  render() {
    let oThis = this;

    return (
      <div className = "accordion-list-comp" >
        {oThis.renderChildren(oThis.props)}
      </div>
    );
  }
}

export default Accordion;
