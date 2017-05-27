import React, { Component } from 'react';


class AccordionContent extends Component {
  render() {
  	var oThis = this;
    return (
    	<div className = "accordion-content">
    		{oThis.props.accContent}
    	</div>
    );
  }
}

export default AccordionContent;