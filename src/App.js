import OrderListFunctional from "./Components/Ordered-list/Orderedlist-functional";
// Here i import orderlist component from the path.
import OrderListClass from "./Components/Ordered-list/Orderedlist-class";
// Here i import orderlist component from the path
import UnOrderListFunctional from "./Components/Unorderlist/Unorderlist-functional";
import UnOrderListClass from "./Components/Unorderlist/Unorderlist-class";
import ImageAbsolute from "./Components/Image/Image-absolute";
import ImageAbsoluteClass from "./Components/Image/Image-absoluteclass";
import ImageRelativeFunctional from "./Components/Image/Image-relativefunctional";
import ImageRelativeClass from "./Components/Image/Image-relativeclass";
import TextFunctional from "./Components/Text/Text-functional";
import TextClass from "./Components/Text/Text-class";
import TableFunctional from "./Components/Table/Table-functional";
import TableClass from "./Components/Table/Table-class";
import Table1 from "./Components/Table/TableMain";
import FormMain from "./Components/Forms/FormMain";
import Cards from "./Components/ExternalStyling/Cards";
import FormBootStrap from "./Components/Bootstrap/bootstrapForm";
import CardsBootStrap from "./Components/Bootstrap/bootstrapcards";
import TableBootStrap from "./Components/Bootstrap/bootstraptable";
import Button1 from "./Components/Buttonusingprop/Button";
import Greeting from "./Components/Greet/Greeting";
import TableUsingProps from "./Components/Tableusingprops/Tableprops";
import ButtonBgColor from "./Components/Buttonusingprop/Buttonsbgcolor";
import Carousel from "./Components/Carousel/Carousel";
import CardState from "./Components/CardsusingState/CardsState";
import YoutubeButton from "./Components/YoutubeButton/Youtubebtn";
import ProductFetch from "./Components/ProductCards/ProductsFetch";
import CardsAxios from "./Components/ProductCards/ProductsAxios";
import ProductCards from "./Components/ProductCards/ProductsCards";
import DemoCarousel from "./Components/Carousel/CarouselReact";
import Table2Props from "./Components/Tableusingprops/Table2usingProps";
import ProductsMain from "./Components/ProductCards/ProductsMain";
import CarousalAdd from "./Components/Carousel/CarouselAdd";
import TimerReact from "./Components/Timer/TimerReact";
import TableFilter from "./Components/TableFiler/Tablefilter";
import Timer1 from "./Components/Timer/Timer1";



function App() {
  return (
    <div>
    <table style={{border:"1px solid black",borderCollapse:"collapse",width:"100%"}}>
      <tr style={{border:"1px solid black"}}>
        <th style={{border:"1px solid black",padding:"10px"}}>Id</th>
        <th style={{border:"1px solid black",padding:"10px"}}>Social Media platform</th>
        <th style={{border:"1px solid black",padding:"10px"}}>Link</th>
      </tr>
      <tr style={{border:"1px solid black"}}>
        <td style={{border:"1px solid black",padding:"10px"}}>1</td>
        <td style={{border:"1px solid black",padding:"10px"}}>Facebook</td>
        <td style={{border:"1px solid black",padding:"10px"}}><a href="https://www.facebook.com/">Facebook</a></td>
      </tr>
      <tr style={{border:"1px solid black"}}>
        <td style={{border:"1px solid black",padding:"10px"}}>2</td>
        <td style={{border:"1px solid black",padding:"10px"}}>Instagram</td>
        <td style={{border:"1px solid black",padding:"10px"}}><a href="https://www.instagram.com/">Instagram</a></td>
      </tr>
      <tr style={{border:"1px solid black"}}>
        <td style={{border:"1px solid black",padding:"10px"}}>3</td>
        <td style={{border:"1px solid black",padding:"10px"}}>Snapchat</td>
        <td style={{border:"1px solid black",padding:"10px"}}><a href="https://www.snapchat.com/">Snapchat</a></td>
      </tr>
      <tr style={{border:"1px solid black"}}>
        <td style={{border:"1px solid black",padding:"10px"}}>4</td>
        <td style={{border:"1px solid black",padding:"10px"}}>Twitter</td>
        <td style={{border:"1px solid black",padding:"10px"}}><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">Twitter</a></td>
      </tr>
    </table>

    {/*Now i am trying to display outcomes using components.*/} 

    {/* 1.Ordered list(using functional based components):-*/}
      <h5>1.Ordered list(using functional based components)</h5>
      <OrderListFunctional/>

      {/*2.Ordered list(class based)*/}
      <h5>2.Ordered list(class based)</h5>
      <OrderListClass/>

       {/* 3.UnOrdered list(using functional based components):-*/}
       <h5>3.UnOrdered list(using functional based components)</h5>
       <UnOrderListFunctional/>

      {/*4.UnOrdered list(class based)*/}
      <h5>4.UnOrdered list(class based)</h5>
      <UnOrderListClass/>

      {/*5.Image absolute path(functional)*/}
      <h5>5.Image absolute path(functional)</h5>
      <ImageAbsolute/>

      <br></br>

       {/*6.Image absolute path(class)*/}
       <h5>6.Image absolute path(class)</h5>
      <ImageAbsoluteClass/>

      {/*7.Image relative path(functional)*/ }
      <h5>7.Image relative path(functional)</h5>
      <ImageRelativeFunctional/>

      {/*8.Image relative path(class)*/ }
      <h5>8.Image relative path(class)</h5>
      <ImageRelativeClass/>

      {/*9.Text component(functional)*/}
      <h5>9.Text component(functional)</h5>
      <TextFunctional/>

      {/*10.Text component(class)*/}
      <h5>10.Text component(class)</h5>
      <TextClass/>

      {/*11.Table using component(functional)*/}
      <h5>11.Table using component(functional)</h5>
      <TableFunctional/>

      {/*12.Table using component(class)*/}
      <h5>12.Table using component(class)</h5>
      <TableClass/>

      {/*13.Table using component but content from other js file */}
      <h5>13.Table using component but content from other js file</h5>
      <Table1/>

      {/*14.Form using component but content from other js file */}
      <h5>14.Form using component but content from other js file</h5>
      <FormMain/>


                <hr></hr>
      {/*15. 6 cards in 2 rows using flex box with external styling*/}
      <h3>Date:28-11-23</h3>
      <h5>15. 6 cards in 2 rows using flex box with external styling</h5>
      <Cards/>

      {/*16. Form using bootstrap */}
      <h5>16. Form using bootstrap</h5>
      <FormBootStrap/>


      {/*17. Cards using bootstrap */}
      <h5>17. Cards using bootstrap</h5>
      <CardsBootStrap/>


      {/*18. Table using bootstrap*/}
      <h5>18. Table using bootstrap</h5>
      <TableBootStrap/>

            <hr></hr>
      {/*19. Various Buttons using props. */}
      <h3>Date:29-11-23</h3>
      <h5>19. Various Buttons using props. </h5>
      <Button1  text={"Login1"} />
      <Button1  text={"Login2"} />
      <Button1  text={"Login3"} />

      {/*20.Good morning user , today date was Wednesday , nov , 2023 */}
      <h5>20. Good morning user , today date was Wednesday , nov , 2023 </h5>
      <Greeting/>

      {/*21. Table using props */}
      <h5>21. Table using props </h5>
      <TableUsingProps text={"PropData1"}/>
      <TableUsingProps text={"PropData2"}/>
      {/* Here i am giving rows data in the table as array of objects in props. */}
      {/* Now the below table Structure we can use multiple times just by updating the props array data */}
      <Table2Props 
      TableData={[
        {id:1,name:"Yash1",roll:1234},
        {id:2,name:"Yash2",roll:1114},
        {id:3,name:"Yash3",roll:1324}
      ]}/>
      {/* Now i am re-using the table by jst updating the prop data */}
      <Table2Props 
      TableData={[
        {id:1,name:"Sai1",roll:3333},
        {id:2,name:"Sai2",roll:1111},
        {id:3,name:"Sai3",roll:2222}
      ]}/>


      {/*22.Create a random colour function use for bgcolour of button , take size 1, size 2……size 10*/}
      <h5>22.Create a random colour function use for bgcolour of button , take size 1,size 2……size 10</h5>
      {/* <ButtonBgColor text={"Size 1"} bgColor={"aqua"} textColor={"red"}/>
      <ButtonBgColor text={"Size 2"} bgColor={"lightblue"} textColor={"orange"}/> */}
      {/* Instead of this we can also write as:- */}
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 1",
          bgColor:"aqua",
          textColor:"red",
          width:100,
          height:100
        }
      }/>
       <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 2",
          bgColor:"blue",
          textColor:"orange",
          width:110,
          height:110
        }
      }/>
       <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 3",
          bgColor:"lightblue",
          textColor:"red",
          width:120,
          height:120
        }
      }/>
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 4",
          bgColor:"aqua",
          textColor:"red",
          width:130,
          height:130
        }
      }/>
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 5",
          bgColor:"orange",
          textColor:"red",
          width:150,
          height:150
        }
      }/>
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 6",
          bgColor:"aqua",
          textColor:"red",
          width:100,
          height:100
        }
      }/>
       <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 7",
          bgColor:"blue",
          textColor:"orange",
          width:110,
          height:110
        }
      }/>
       <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 8",
          bgColor:"lightblue",
          textColor:"red",
          width:120,
          height:120
        }
      }/>
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 9",
          bgColor:"aqua",
          textColor:"red",
          width:130,
          height:130
        }
      }/>
      <ButtonBgColor 
      ButtonProperties={
        {
          text:"Size 10",
          bgColor:"orange",
          textColor:"red",
          width:150,
          height:150
        }
      }/>

      <hr></hr>
      
      {/*23.carousel using class components */}
      <h3>Date:1-12-23</h3>
      <h5>23.carousel using class components</h5>
      <Carousel/>
      <h5>Carousel using react library</h5>
      <DemoCarousel/>


      {/*24.align the cards properly each row 4 cards take any food items */}
      <h5>24.align the cards properly each row 4 cards take any food items</h5>
      <CardState/>

      {/*25.Youtube Subscribe button Functionality */}
      <h5>25.Youtube Subscribe button Functionality</h5>
      <YoutubeButton/>

      <hr></hr>
      <h3>Date:04-12-23</h3>
      {/*27.Fetching Product items from API using fetch method*/}
      <h5>27.Fetching Product items from API using fetch method(In Console)</h5>
      <ProductFetch/>

      {/*28.Fetching Product items from API using axios */}
      <h5>28.Fetching Product items from API using axios</h5>
      <CardsAxios/>

      {/*29.Fetching Product items from API using axios and displaying them as a Cards */}
      <h5>29.Fetching Product items from API using axios and displaying them as a Cards</h5>
      <ProductCards/>

      <hr></hr>
      <h3>Date:05-12-23</h3>
      {/*30. fetching products from API direct after loading the page without using button as earlier and with remove and remove all buttons. */}
      <h5>30. fetching products from API direct after loading the page without using button as earlier with remove & remove all buttons..</h5>
      <ProductsMain/>


      <hr></hr>
      <h3>Date:07-12-23</h3>
      {/*31.add button  : when i click add new image (map method) in a corousel */}
      <h5>31.add button  : when i click add new image (map method) in a corousel</h5>
      <CarousalAdd/>

      {/*32.Timer in react (start button and stop button) , timer is running , timer is stopped. */}
      <h5>32.Timer in React</h5>
      <Timer1/>
      <h5>33.Timer in react (start button and stop button) , timer is running , timer is stopped.</h5>
      <TimerReact/>

      {/*34.Employee table with their designation and button functionality with filtering upon their designation.*/}
      <h5>34.Employee table with their designation and button functionality with filtering upon their designation.</h5>
      <TableFilter/>







    </div>
    
    
  );
}

export default App;
