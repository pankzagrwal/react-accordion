import React from 'react';
import ReactDOM from 'react-dom';
import {Accordion, AccordionComponent as AccordionContent} from './app/index.js';
// import AccordionContent from './app/accordionComponent.js';
// import './index.css';

ReactDOM.render(<Accordion collapseAll = {false} defaultOpen = {"acc_1"}>
				<AccordionContent title = "header One" id = "acc_0">
					abc Content
				</AccordionContent>
				<AccordionContent title = "Header Two" id = "acc_1">
					<p>
						<a href = "#">Content Two</a>
					</p>
				</AccordionContent>

				</Accordion>
	, document.getElementById('root'));
