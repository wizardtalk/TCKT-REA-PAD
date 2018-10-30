import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Clock from 'react-live-clock';
import sglImg from './sgl.png';
import topbarImg from './topbar.png';
import brLogo from './br-logo.png';
import arrowIcon from './arrow.png';
import calendarIcon from './calendar.png';
import destArrow from './destArrow2.png';
import barcode from './barcode.png'


import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
  font-family: 'qanelas_soft_demoextrabold';
  font-style: normal;
  font-weight: 400;
  src: local('./fonts/qanelas-soft-bold/qanelassoftdemo-extrabold-webfont.woff'), url('./fonts/qanelas-soft-bold/qanelassoftdemo-extrabold-webfont.woff') format('woff');
}

@font-face {
  font-family: 'qanelas_soft_demomedium';
  font-style: normal;
  font-weight: 400;
  src: local('./fonts/qanleas-soft-medium/qanelassoftdemo-medium-webfont.woff'), url('./fonts/qanelas-soft-medium/qanelassoftdemo-medium-webfont.woff') format('woff');
}
`

let savedObject = '';




class App extends React.Component {

 state = {
  color1: '#DD992B',
  color2: '#DF4545',
  color3: '#6C9595',
  menuVisibility: 'none',
  startStation1: 'Reading',
  startStation2: '',
  startStation3: '',
  destinationStation1: 'London Paddington', 
  destinationStation2: '', 
  destinationStation3: '', 
  amPm: '', // FORMAT 'a.m.' or 'p.m.'
  ticketIdNo: 'TTDQWE5CFWM',
  startTime: '',
  endTime: '',
  timePurchased: '',
  activatedTime: '',
  ticketPrice: '24.40',
  ticketType: 'Anytime Day Single',
  dayShortFormat: '', // FORMAT 'Mon', 'Tue', 'Wed', Thu', 'Fri', 'Sat', 'Sun'
  dayDate: '',
  monthShortFormat: ''
 }

  componentDidMount = () => {
    console.log(this.state);
    var d = new Date();

    var nDay = d.getDay() - 1;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

var nDate = d.getDate();
    
var nMonth = d.getMonth();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

var noon = d.getHours();
let zenith = '';

if (noon >= 0 && noon <= 12) {
  zenith = 'a.m.';
} else {
  zenith = 'p.m.';
}
    this.setState({
      dayShortFormat: days[nDay],
      dayDate: nDate,
      monthShortFormat: months[nMonth],
      amPm: zenith     
    })
  }


 seeMenu = (event) => { 
   
  if (this.state.menuVisibility === 'block') {
  this.setState({
    menuVisibility: 'none'
  })
 } else {
    this.setState({
    menuVisibility: 'block'
    })
  }

}

hashCompiler = (event) => { 
  console.log('hashCompiling...')
  // savedObject = 'bean.';
  savedObject = JSON.stringify(this.state);
  console.log(savedObject)
}


stateSetter = (event) => {

  let backToJson;

  if (event.target.value.length !== 0) {
    backToJson = JSON.parse(event.target.value);
  }

  if (event.target.value.length !== 0) {
    this.setState({
      color1: backToJson.color1,
      color2: backToJson.color2,
      color3: backToJson.color3,
    menuVisibility: 'none',    
      amPm: backToJson.amPm, // FORMAT 'a.m.' or 'p.m.'
      startTime: backToJson.startTime,
      endTime: backToJson.endTime,
      // timePurchased: backToJson.timePurchased,
      // activatedTime: backToJson.activatedTime,
      ticketPrice: backToJson.ticketPrice,
      ticketType: backToJson.ticketType,
      dayShortFormat: backToJson.dayShortFormat, // FORMAT 'Mon', 'Tue', 'Wed', Thu', 'Fri', 'Sat', 'Sun'
      dayDate: backToJson.dayDate,
      monthShortFormat: backToJson.monthShortFormat
    });
  }
 

}

// saveTicket = (event) => {savedObject = JSON.stringify(this.state);}

saveTicket = () => { 
  this.hashCompiler();
}

color1 = (event) => { this.setState({ color1: event.target.value }) }

color2 = (event) => { this.setState({ color2: event.target.value }) }

color3 = (event) => { this.setState({ color3: event.target.value }) }
 
 startStation1 = (event) => { this.setState({ startStation1: event.target.value });}

 startStation2 = (event) => { this.setState({ startStation2: event.target.value }) }

 startStation3 = (event) => { this.setState({ startStation3: event.target.value }) }

 destinationStation1 = (event) => { this.setState({ destinationStation1: event.target.value }) }

 destinationStation2 = (event) => { this.setState({ destinationStation2: event.target.value }) }

 destinationStation3 = (event) => { this.setState({ destinationStation3: event.target.value }) }

 amPm = (event) => { this.setState({ amPm: event.target.value }) }

 ticketIdNo = (event) => { this.setState({ ticketIdNo: event.target.value }) }

 startTime = (event) => { 
  let hour = event.target.value.split('')[0] + event.target.value.split('')[1];
  let minutes = event.target.value.split('')[2] + event.target.value.split('')[3];
  let colonized = (hour + ':' + minutes);
  
  let hourAsNum = Number(hour);
  let minsAsNum = Number(minutes);

  let timPur;

  if (hourAsNum >= 11 && hourAsNum <= 23) {
    timPur = ((hour - 1) + ':' + minutes)  
  } else if (hourAsNum >= 1 && hourAsNum <= 10) {
    timPur = ('0' + (hour - 1) + ':' + minutes)
  };

  let actTim;
  let actTimHour;
  let actTimMins;

   actTimHour = timPur.charAt(0) + timPur.charAt(1);
   if (minutes >= 9 && minutes !== '59') {
    actTimMins = minsAsNum + 1;
   } else if (minutes >=0 && minutes <= 8 && minutes !== '59') {
     actTimMins = '0' + (minsAsNum + 1);
   } else {
     actTimMins = '00';
     actTimHour = hour;
   }

  actTim = actTimHour + ':' + actTimMins;
  
  
  
  

  
  this.setState({ startTime: colonized })
  this.setState({ timePurchased: timPur })
  this.setState({ activatedTime: actTim })
  
  
}

 endTime = (event) => { 
  let hour = event.target.value.split('')[0] + event.target.value.split('')[1];
  let minutes = event.target.value.split('')[2] + event.target.value.split('')[3];
  let colonized = (hour + ':' + minutes);
   this.setState({ endTime: colonized }) 
  }

//  timePurchased = (event) => { 
//   let hour = event.target.value.split('')[0] + event.target.value.split('')[1];
//   let minutes = event.target.value.split('')[2] + event.target.value.split('')[3];
//   let colonized = (hour + ':' + minutes);
//    this.setState({ timePurchased: colonized }) 
//   }

//  activatedTime = (event) => { 
//   let hour = event.target.value.split('')[0] + event.target.value.split('')[1];
//   let minutes = event.target.value.split('')[2] + event.target.value.split('')[3];
//   let colonized = (hour + ':' + minutes);
//    this.setState({ activatedTime: colonized }) 
//   } 

 ticketPrice = (event) => { this.setState({ ticketPrice: event.target.value }) }

 ticketType = (event) => { this.setState({ ticketType: event.target.value }) }

 dayShortFormat = (event) => { this.setState({ dayShortFormat: event.target.value }) }

 dayDate = (event) => { this.setState({ dayDate: event.target.value }) }

 monthShortFormat = (event) => { this.setState({ monthShortFormat: event.target.value }) }

 

clock = () => {
//
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
//
}

displayRecipe = (event) => {
this.setState({
    display: 'recipe'
  })
  console.log(this.state.display)
}

displayMethod = (event) => {
  this.setState({
    display: 'method'
  })
  console.log(this.state.display)
}

choosePage = (displayString) => {


  if (displayString==='recipe') {
    return (
      <div>
    
      </div>
    )
  } else if (displayString==='method') {
    return (
      <div></div>
    )
  }
}

saySth = () => {
  console.log('HELLO!')
}




  render () {

    return (

      <div id="parent">

        <div class="main-header">

          <div class="topbar">
            {/* <img src="/topbar.png" alt ="" class="topbar-pic"></img> */}

            <img src={topbarImg} alt="" class="topbar-pic"></img>

            
            <span style={{position: "relative", left: "0px", bottom: "7px", color: "white", marginLeft: "0px", marginTop: "0px", fontFamily: 'Roboto, sans-serif', fontWeight: '300', fontSize: '15px', color: '#BDC8DB', lineHeight: '0px'}}> <Clock
          // className="redClock"
      format={'h:mm'}
      ticking={true} />{this.state.amPm}</span>


           



          </div>

          <div class="id-bar"></div>

          <div class="arrow">
          <img src={arrowIcon} style={{position: 'relative', left: '18px', top:'3px', width: '19.5px', height: 'auto'}}alt=""></img>
          </div>

          <div class="id-number">
          <p style={{position: 'relative', left: '24px', bottom: '20px', color: 'white', fontFamily: 'Khula, sans-serif', fontWeight: '999', fontSize: '20px'}}>TTDQWE5CFWM</p>

          <img src={calendarIcon} style={{position: 'relative', bottom: '70px', left: '282px', width: '20px', height: 'auto'}}></img>
          
          </div>
          
  
          {/* font-family: 'Doppio One', sans-serif; */}
          {/* fontFamily: 'Khula, sans-serif' */}


          <div class="sgl-rtn">
          {/* <img src="/sgl.png" alt="" class="sgl"></img> */}
          

       <img src={sglImg} alt="sglImg" class="sgl"></img>

          </div>



          <div class="space-beneath-sgl-return">

          </div>

          <div class="start-time" style={{fontFamily: 'qanelas_soft_demoextrabold'}}>
          <p style={{position: 'relative', bottom: '17px', right: '3px', color: '#373737'}}><span style={{position: "relative"}}>{this.state.startTime}</span></p>
          </div>

          <div class="end-time" style={{fontFamily: 'qanelas_soft_demoextrabold'}}>
          <p style={{position: 'relative', bottom: '17px', right: '3px', color: '#373737'}}>{this.state.endTime}</p>
          </div>

          <div class="start" style={{fontFamily: 'qanelas_soft_demomedium'}}>
      
          <p style={{position: 'relative', bottom: '17px', right: '3px', color: '#373737'}}>{this.state.startStation1}{this.state.startStation2}{this.state.startStation3}</p>
          </div>

          <div class="dest" style={{fontFamily: 'qanelas_soft_demomedium'}}>
          <p style={{position: 'relative', bottom: '17px', right: '3px', color: '#373737'}}>{this.state.destinationStation1}{this.state.destinationStation2}{this.state.destinationStation3}
          </p>
          </div>

        </div> {/*main-header END */}

        <div class="body">
        {/* <br /> */}

        
        <CarouselProvider
        // naturalSlideWidth={1}
        touchEnabled={false}
        naturalSlideHeight={1}
        totalSlides={2}
        lockOnWindowScroll={true}>
          <div class="buttons">
            <ButtonBack className="barcode" style={{fontFamily: 'qanelas_soft_demomedium', fontSize: '16px'}} onClick={this.saySth}><p style={{position: 'relative', top: '4px', left:'1px'}}>Barcode</p></ButtonBack>
            <ButtonNext className="ticket" style={{fontFamily: 'qanelas_soft_demomedium', fontSize: '16px'}} onClick={this.saySth}><p style={{position: 'relative', top: '4px', left:'1px'}}>Ticket</p></ButtonNext>
            <hr />
          </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
     
    
        




        
        
        
        <Slider style={{backgroundColor: 'white'}}>
        
      
        <Slide index={0} style={{height: '550px', maxWidth: '50%',
    overflowX: 'hidden', overflowY: 'scroll'}}>
      
          <br />
          <br />

          
          <div class="ticketBody2">
          <div class="orangeTop" style={{width: '326px', borderTop: '1px solid grey',
          borderRight: '1px solid grey', borderLeft: '1px solid grey'}}></div>
       
          <div class="barcode-segment">
          <img src={barcode} alt="" style={{position: 'relative', left: '58px', top: '18px', height: '215px', width: '210px'}}></img>
        
          </div>
          <div class="orangeBottom" style={{width: '326px', borderLeft: 'solid grey 1px', borderBottom: 'solid grey 1px', borderRight: 'solid grey 1px'}}>
          <img src={brLogo} alt="" class="br-logo"></img>
          </div>


          <div class="ticket-active" onClick={this.seeMenu.bind(this)}><p style={{position: 'relative', top: '27px', left: '110px', margin: '0',
          padding: '0', fontFamily: 'qanelas_soft_demomedium', fontSize: '20px', fontWeight: '900', color: '#54C0A8'}}>Ticket active</p></div>
          
          <div class="dropdown-content" style={{display: this.state.menuVisibility}}>
        
        <div>
          <input type="text" style={{width: '300px', height: '50px', fontSize: '20px', backgroundColor: '#EEBCBA'}} onBlur={this.startTime.bind(this)} placeholder="startTime in 24hr (eg. '1815')"/>
        </div>
        <div>
          <input type="text" style={{width: '300px', height: '50px', fontSize: '20px', backgroundColor: '#EEBCBA'}} onBlur={this.endTime.bind(this)} placeholder="endTime in 24hr (eg. '2021')"/>
        </div>


          </div>
          

          </div>


          <div class="details2" style={{fontFamily: 'qanelas_soft_demomedium', fontSize: '15.5px', fontWeight: '500'}}>
          

          <div class="itinerary-details" style={{gridColumn: '1', gridRow: '1', color: '#373737', paddingBottom: '12px'}}>Itinerary details</div>
          <div class="ticket-type" style={{gridColumn: '1', gridRow: '2', color: '#B3B3B3', paddingBottom: '12px'}}>Ticket type</div>
          <div class="ticket-ref" style={{gridColumn: '1', gridRow: '3', color: '#B3B3B3', paddingBottom: '12px'}}>Ticket ID</div>

          <div class="any-route" style={{gridColumn: '1', gridRow: '4', color: '#B3B3B3'}}></div>

          <div class="IGNORE" style={{gridColumn: '1', gridRow: '5', color: '#FFFFFF', paddingBottom: '12px'}}>Class
          
          
          
          </div>
          <div class="class" style={{gridColumn: '1', gridRow: '6', color: '#B3B3B3', paddingBottom: '12px'}}>Class</div>
          <div class="passengers" style={{gridColumn: '1', gridRow: '7', color: '#B3B3B3', paddingBottom: '12px'}}>Passengers</div>
          <div class="total-price" style={{gridColumn: '1', gridRow: '8', color: '#B3B3B3', paddingBottom: '12px'}}>Total price</div>
          <div class="trans-id" style={{gridColumn: '1', gridRow: '9', color: '#B3B3B3', paddingBottom: '12px'}}>Transaction ID</div>
          <div class="purchased" style={{gridColumn: '1', gridRow: '10', color: '#B3B3B3', paddingBottom: '12px'}}>Purchased</div>
          <div class="date-of-travel" style={{gridColumn: '1', gridRow: '11', color: '#B3B3B3'}}>Date of travel</div>

          <div class="t-n" style={{gridColumn: '2', gridRow: '2', color: '#373737'}}>{this.state.ticketType}</div>
          <div class="p-i" style={{gridColumn: '2', gridRow: '3', color: '#373737'}}>{this.state.ticketIdNo}</div>
          <div class="p-n" style={{gridColumn: '2', gridRow: '4', color: 'grey'}}>Travel is allowed via any</div>
          <div class="p-o" style={{gridColumn: '2', gridRow: '5', color: 'grey'}}>permitted route.</div>
          <div class="act" style={{gridColumn: '2', gridRow: '6', color: '#373737'}}>Standard</div>
          <div class="act" style={{gridColumn: '2', gridRow: '7', color: '#373737'}}>1</div>
          <div class="act" style={{gridColumn: '2', gridRow: '8', color: '#373737'}}>£{this.state.ticketPrice}</div>
          <div class="act" style={{gridColumn: '2', gridRow: '9', color: '#373737'}}>976027184902</div>
          <div class="act" style={{gridColumn: '2', gridRow: '10', color: '#373737'}}>{this.state.dayShortFormat} {this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()} {this.state.timePurchased}</div>
          <div class="act" style={{gridColumn: '2', gridRow: '11', color: '#373737'}}>{this.state.dayShortFormat} {this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()}</div>

          </div>


          </Slide>








          <Slide index={1} >
        <div class="ticketBody">
          <div class="orangeTop"><p style={{position: 'relative', top: '5px', left: '70px', margin: '0',
    padding: '0', fontSize: '13px', fontWeight: '0'}}>Activated: {this.state.dayShortFormat} {this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()} {this.state.activatedTime}</p></div>
          <div class="animationTier">
          
          <div class="wrapper">
            <span class="marquee"> <Clock
            className="redClock"
        format={'HH : mm : ss'}
        ticking={true} /></span>
            </div>


            <div class="cb-container">
              <div class="colorbars">
                <div class="colorBox1">
                      <div class="color1" style={{backgroundColor: this.state.color1}}></div>  
                  </div>             
                <div class="colorBox2">
                      <div class="color2" style={{backgroundColor: this.state.color2}}></div> 
                   </div>             
                <div class="colorBox3">
                      <div class="color3" style={{backgroundColor: this.state.color3}}></div> 
                </div>             
              </div>
            </div>
          
          </div>
          <div class="tier1"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>{this.state.ticketType}</p></div>
          <div class="tier2"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>Adult Standard Class</p></div>
          {/* <div class="tier3"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>16-25 Railcard</p></div> */}
          <div class="tier4"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>{this.state.startStation1}{this.state.startStation2}{this.state.startStation3}</p></div>
          <div class="tier5"><p style={{position: 'relative', top: '3px', left: '35px', margin: '0',
    padding: '0'}}>{this.state.destinationStation1}{this.state.destinationStation2}{this.state.destinationStation3}</p><img src={destArrow} style={{position: 'relative', left: '6px', bottom: '11px', width: '20px', height: 'auto'}}></img></div>
          <div class="tier6"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>Valid via any permitted route</p></div>
          <div class="tier7"><p style={{position: 'relative', top: '2px', left: '5px', margin: '0',
    padding: '0'}}>Travel on:</p><p style={{position: 'relative', top: '4px', left: '5px', margin: '0',
    padding: '0'}}>{this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()}</p></div>
          <div class="tier8"><p style={{position: 'relative', top: '5px', left: '5px', margin: '0',
    padding: '0'}}>Price £{this.state.ticketPrice}</p></div>
          <div class="orangeBottom">
          <img src={brLogo} alt="" class="br-logo"></img>
          </div>

          <div class="ticket-active"><p style={{position: 'relative', top: '29px', left: '110px', margin: '0',
    padding: '0', fontFamily: 'qanelas_soft_demomedium', fontSize: '20px', fontWeight: '900', color: '#54C0A8'}}>Ticket active</p></div>
          
        </div>

        <br />
        <br />
        
        
        <div class="details" style={{fontFamily: 'qanelas_soft_demomedium', fontSize: '15.5px', fontWeight: '500'}}>

        <div class="details-column" style={{gridColumn: '1', gridRow: '1', color: '#373737'}}>Details</div>
        <div class="ticket-number" style={{gridColumn: '1', gridRow: '2', color: '#B3B3B3'}}>Ticket Number</div>
        <div class="passenger-id" style={{gridColumn: '1', gridRow: '3', color: '#B3B3B3'}}>Passenger ID</div>
        <div class="passenger-name" style={{gridColumn: '1', gridRow: '4', color: '#B3B3B3'}}>Passenger Name</div>
        <div class="purchased-on" style={{gridColumn: '1', gridRow: '5', color: '#B3B3B3'}}>Purchased on</div>
        <div class="activated" style={{gridColumn: '1', gridRow: '6', color: '#B3B3B3'}}>Activated</div>

        <div class="t-n" style={{gridColumn: '2', gridRow: '2', color: '#373737'}}>{this.state.ticketIdNo}</div>
        <div class="p-i" style={{gridColumn: '2', gridRow: '3', color: '#373737'}}>ANY0000</div>
        <div class="p-n" style={{gridColumn: '2', gridRow: '4', color: '#373737'}}>DAVID MATTHEWS</div>
        <div class="p-o" style={{gridColumn: '2', gridRow: '5', color: '#373737'}}>{this.state.dayShortFormat} {this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()} {this.state.timePurchased}</div>
        <div class="act" style={{gridColumn: '2', gridRow: '6', color: '#373737'}}>{this.state.dayShortFormat} {this.state.dayDate} {this.state.monthShortFormat} {(new Date()).getFullYear()}</div>

       
        </div>


          <div>




{/* <div>
  <input type="text" style={{width: '300px'}} onBlur={this.ticketValidity.bind(this)} placeholder="ticketValidity (eg. '2018')"/>
</div>
<div>
  <input type="text" style={{width: '300px'}} onBlur={this.barcodeValidity.bind(this)} placeholder="barcodeValidity (eg. )"/>
</div> */}





</div>





          </Slide>

        </Slider>   
        
        </CarouselProvider>

      </div> {/* body div */}

      
    </div>



    
    
    



    )  
  } // render END

}


export default App // equiv to module.exports = App;
export const banana = 'my secret message' // can export things seperately! in node you'd export one thing, or an object with properties. with this syntax you can do different stuff.
