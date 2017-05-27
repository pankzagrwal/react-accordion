import React, { Component } from 'react';
import AccordionHeader from './accordionHeader.js';
import AccordionContent from './accordionContent.js';



class AccordionComponent extends Component {
 
 constructor (props) {
 	super (props);

 	this.headerClicked = this.headerClicked.bind(this);

 	this.state = {
 		isOpen: false
 	}
 }

 componentWillReceiveProps(nextProps) {
 	console.log(nextProps);
 	if (nextProps.activeAccordion === this.props.id) {
 		this.setState ({
 			isOpen: true
 		})
 	}
 	else {
 		this.setState( {
 			isOpen: false
 		})
 	}
 }

 headerClicked (evt, contentId) {
 	let oThis = this;
 	oThis.props.headerClicked(evt, contentId);
 }

 componentDidMount () {
 	let oThis = this;
 	if (oThis.props.defaultOpen === oThis.props.id) {
  		oThis.setState ({
  			isOpen: true
  		})
  	}
 }
  render() {
  	let oThis = this;
  	console.log("props_acc_comp", this.props)
    return (
    	<div className = "accordion-component">
    		<div className = {"accordion-header " + (oThis.state.isOpen === true ? 'accordion-selected': '')}>
	    		< AccordionHeader headerText = {oThis.props.title} headerClicked = {oThis.headerClicked} headerId = {oThis.props.id + "_header"}/>
    		</div>
	    	<div className = {"accordion-content-div " + (oThis.state.isOpen === true ? 'show-accordion': 'hide-accordion')} id = {oThis.props.id + "_content"}>
	    		< AccordionContent accContent = {oThis.props.children}/>
	    	</div>
    	</div>
    );
  }
}

export default AccordionComponent;
