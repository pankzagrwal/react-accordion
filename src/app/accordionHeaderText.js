import React, { Component } from 'react';


class AccordionHeaderText extends Component {
  render() {
  	var oThis = this;
    return (
    	<span className = "accordion-header-text">
    	{oThis.props.headerText}
    	</span>
    );
  }
}

export default AccordionHeaderText;