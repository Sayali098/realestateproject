import React, { useState } from 'react';
import './value.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; 
import  data from '../utlis/accordian';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Value = () => {
    
    const [className,setClassName]=useState(null);
  return(
    <section className='value-wrapper'>
        <div className='padding flexcenter value-container'>
            <div className='value-left'>
                <div className='image-container'>
                    <img src='./value.png'></img>
                </div>
            </div>
            <div className='flexColstart value-right'>
            <span className='OrangeText'>Our Value</span>
            <span className='PrimaryText'>Value we give to you</span>
            <span className='secondaryText'>We are always ready to help by providing best services for you<br></br>
            we beleive to blace to live can make you life better </span>
            <Accordion
            className='accordian'
                arrowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {

                        data.map((item,i)=>{
                            return(<AccordionItem className={`accordiaonItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className='flexcenter Accordian-button'>
                               <AccordionItemState>
                                {
                                    ({expanded})=>expanded?setClassName('expanded'):setClassName('collapsed')
                                }
                               </AccordionItemState>
                               
                               
                                <div className='flexcenter icon'>{item.icon}</div>
                                <span className='PrimaryText'>{item.heading}</span>
                                <div className='flexcenter icon'> 
                                <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{item.detail}</p>
                        </AccordionItemPanel>
                            </AccordionItem>)
                        })

                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value;