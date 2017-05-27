# React Accordion Component  


## How to use:

 `import {Accordion, AccordionComponent as AccordionContent} from './app/index.js';

     Accordion collapseAll = {false} defaultOpen = {"acc_1"}>
        <AccordionContent title = "header One" id = "acc_0">
          abc Content
        </AccordionContent>
        <AccordionContent title = "Header Two" id = "acc_1">
          <p>
            <a href = "#">Content Two</a>
          </p>
        </AccordionContent>

        </Accordion>`

## Configuration

### Accordion- Parent Element
- collapseAll: Boolean Flag, if all accordion can be collapsed
- defaultOpen: Id of the accordion to be open by default

### AccordionContent - Child Element
- title: String, Text to display as Title of Accordion
- id: Mandatory, Unique Id for each accordion content





This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
