import React from 'react'
import './FAQ.css';
import { useState } from 'react';
function FAQ() {
  const maxHeight = Math.max(window.innerHeight, document.documentElement.clientHeight);

  const[que1, setQue1] = useState(false);
  const[que2, setQue2] = useState(false);
  const[que3, setQue3] = useState(false);
  const[que4, setQue4] = useState(false);
  const[que5, setQue5] = useState(false);
  const[que6, setQue6] = useState(false);
  console.log(que1);
  function handleClick1(){
    if(que1)setQue1(false);
    else setQue1(true);
  }
  function handleClick2(){
    if(que2)setQue2(false);
    else setQue2(true);
  }
  function handleClick3(){
    if(que3)setQue3(false);
    else setQue3(true);
  }
  function handleClick4(){
    if(que4)setQue4(false);
    else setQue4(true);
  }
  function handleClick5(){
    if(que5)setQue5(false);
    else setQue5(true);
  }
  function handleClick6(){
    if(que6)setQue6(false);
    else setQue6(true);
  }

  return (
    <div style={{display:'flex', justifyContent:'center', height:'100vh', width:'100vw'}} className='faq_body'>
        <div className="faq_container">
            <h1 style={{textAlign:'center',marginTop:'20px'}}>FAQ's</h1>

              {/* que1 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label onClick={handleClick1}>What are the different kinds of passes that PMPML offers?</label>
                <div className='faq_btn' onClick={handleClick1} ></div>
              </div>
              <div className={"faq_ans" + (que1 ? "" : " hideans")}>
                <ul>
                PMPML offers daily, weekly, fortnightly, quarterly and annualtravelling passes to make journeying convenient for its passengers. Discounted passes are also there for elderly passengers, visually and physically challenged, reporters and freedom fighters. All PMPML passes can be obtained both online and offline.
                </ul>
                <ul>
                    Note: Having an identity card is mandatory for those using a passenger pass issued by PMPML. Application form for the pass is charged Rs 5 and the I-card is charged Rs 20.
                </ul>
              </div>
            </div>

          {/* que2 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label onClick={handleClick2}>Where should we complain if the buses are unclean?</label>
                <div className='faq_btn' onClick={handleClick2}></div>
              </div>
              
              <div className={"faq_ans" + (que2 ? "" : " hideans")}>
                <ul>
                Note the bus number, the bus route number (RTO number), bus timing etc and share this information by calling up on PMPML helpline number 020-24545454 between 6.00 AM and 10.00 PM or by sending an SMS to +91 9881495589.
                </ul>
              </div>
            </div>
            
            {/* que3 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label  onClick={handleClick3}>Where should we complain if the buses are not running on time?</label>
                <div className='faq_btn' onClick={handleClick3}></div>
              </div>
              
              <div className={"faq_ans" + (que3 ? "" : " hideans")}>
                <ul>
                Note the bus number, the bus route number (RTO number), bus timing etc and share this information by calling up on PMPML helpline number 020-24545454 between 6.00 AM and 10.00 PM or by sending an SMS to +91 9881495589.
                </ul>
              </div>
            </div>

            {/* que4 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label onClick={handleClick4}>How to follow up on a complaint that has been filed?</label>
                <div className='faq_btn' onClick={handleClick4}></div>
              </div>
              
              <div className={"faq_ans" + (que4 ? "" : " hideans")}>
                <ul>
                One can follow up or enquire about the status of any complaint lodged with PMPML by calling up on the helpline number 020-24545454 between 6.00 AM and 10.00 PM.
                </ul>
              </div>
            </div>

            {/* que5 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label onClick={handleClick5}>Where can passengers post their suggestions and complaints?</label>
                <div className='faq_btn' onClick={handleClick5}></div>
              </div>
              
              <div className={"faq_ans" + (que5 ? "" : " hideans")}>
                <ul>
                PMPML also holds weekly forums called Pravasi Din, on Saturdays, every week, at bus depots, between 3.00 PM and 5.00 PM. Passengers can visit this forum and submit their complaints.
                </ul>
              </div>
            </div>

            {/* que6 */}
            <div className="faq_que_ans">
              <div className='faq_que'>
                <label onClick={handleClick6}>Does PMPML provide any tour of the city?</label>
                <div className='faq_btn' onClick={handleClick6}></div>
              </div>
              
              <div className={"faq_ans" + (que6 ? "" : " hideans")}>
                <ul>
                PMPML offers a tour of the city in luxury AC buses. This service is called Pune Darshan.
                </ul>
                <ul>
                For further information and Ticket Booking, visit Pune Darshan.
                </ul>
              </div>
            </div>

        </div>
    </div>
  )
}

export default FAQ;
