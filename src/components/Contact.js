import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className='contact-wrapper'>
            <div className=' padding flexcenter contact-container'>

                <div className='flexColstart contact-left'>
                    <span className='OrangeText'>Our contact us</span>
                    <span className='PrimaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We are always ready to help by providing best services for you<br></br>
                        we beleive to blace to live can make you life better </span>
 
                       <div className='flexcenter contactModes'>
                        <div className='flexColstart row'>
                            <div className=' flexColCenter mode'>
                                <div className='flexStart'>
                                <div className='flexcenter icon'>
                                <MdCall size={25}></MdCall>
                                </div>
                                <div className='flexColstart detail'>
                                    <span className='PrimaryText'>Call</span>
                                    <span className='secondaryText'> 021 123 145 14</span>
                                </div>
                                </div>
                                <div className='flexcenter button'> Call now</div>
                            </div>
                           
                            <div className=' flexColCenter mode'>
                                <div className='flexStart'>
                                <div className='flexcenter icon'>
                                <MdCall size={25}></MdCall>
                                </div>
                                <div className='flexColstart detail'>
                                    <span className='PrimaryText'>Call</span>
                                    <span className='secondaryText'> 021 123 145 14</span>
                                </div>
                                </div>
                                <div className='flexcenter button'> Call now</div>
                            </div>
                        </div>


                        <div className='flexColstart row'>
                            <div className=' flexColCenter mode'>
                                <div className='flexStart'>
                                <div className='flexcenter icon'>
                                <MdCall size={25}></MdCall>
                                </div>
                                <div className='flexColstart detail'>
                                    <span className='PrimaryText'>Call</span>
                                    <span className='secondaryText'> 021 123 145 14</span>
                                </div>
                                </div>
                                <div className='flexcenter button'> Call now</div>
                            </div>
                           
                            <div className=' flexColCenter mode'>
                                <div className='flexStart'>
                                <div className='flexcenter icon'>
                                <MdCall size={25}></MdCall>
                                </div>
                                <div className='flexColstart detail'>
                                    <span className='PrimaryText'>Call</span>
                                    <span className='secondaryText'> 021 123 145 14</span>
                                </div>
                                </div>
                                <div className='flexcenter button'> Call now</div>
                            </div>
                        </div>
                       </div>

                    {/* <div>call</div> */}
                </div>

                <div className='contact-right'>
                    <div className='image-container'>
                        <img src='./contact.jpg'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;