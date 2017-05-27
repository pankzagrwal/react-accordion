import React, { Component } from 'react';
import AccordionHeaderIcon from './accordionHeaderIcon.js';
import AccordionHeaderText from './accordionHeaderText.js'

class AccordionHeader extends Component {
	constructor (props) {
		super (props);

		this.onHeaderClicked = this.onHeaderClicked.bind(this);

		this.getContentId = function (id) {
			return id.substring(0, id.length - 7)
		}
	}
	onHeaderClicked (evt) {
		let headerId = evt.target.classList.contains("accordion-header-comp") ? evt.target.id : evt.target.parentElement.id
		let contentId = this.getContentId(headerId);

		var oThis = this;
		oThis.props.headerClicked(evt, contentId)
	}
  render() {
  	var oThis = this;
    return (
    	<div className = "accordion-header-comp" onClick = {oThis.onHeaderClicked} id = {oThis.props.headerId}>
    		<AccordionHeaderIcon />
    		<AccordionHeaderText headerText = {oThis.props.headerText}/>
    	</div>
    );
  }
}

export default AccordionHeader;
