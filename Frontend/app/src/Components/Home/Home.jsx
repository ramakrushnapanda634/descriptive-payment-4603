import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";



const MainDiv = styled.div`
display:flex;
margin:auto;
width:25%;
height:70px;
gap:30px;

padding:10px;


& h1{
  color:black;
  text-align:center;
  font-weight:400;
  
}
& h1:hover{
  text-decoration:underline;
}
`;

const Banner = styled.div`
height : 200px;
width:96vw;
margin:auto;
& img{
  width:96vw;
  padding-top:2rem;
}
`;

const Banner1 = styled.div`
height : 200px;
width:98.9vw;
& img{
  width:98.9vw;
  padding-top:5rem;
}
`;
const Banner2 = styled.div`
height : 200px;
width:98.9vw;
& img{
  width:98.9vw;
  padding-top:1rem;
}
`;


const Heading = styled.div`
margin-top:9rem;
text-align:center;
font-size:25px;

& p{
  font-weight:600;
  letter-spacing:3px;
}
`;
const Heading1 = styled.div`
margin-top:16rem;
text-align:center;
font-size:25px;

& p{
  font-weight:600;
  letter-spacing:1px;
}
`;
const Heading2 = styled.div`
text-align:center;
font-size:22px;

& p{
  font-weight:700;
  letter-spacing:2px;
}
`;
const Heading3 = styled.div`
text-align:center;
font-size:20px;
margin-top:2rem;

& p{
  font-weight:600;
  letter-spacing:2px;
}
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  gap: 1px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top:30px;

  &::-webkit-scrollbar{
      display: none;
  }
`;
const Wrapper1 = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  gap: 7px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top:30px;

  &::-webkit-scrollbar{
      display: none;
  }
`;

const Idiv = styled.div`
  width: 500px;
  height: 500px;
  gap: 10px;
  position: relative;

  & > div {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #eaeaea;
    gap: 10px;

    & img {
      max-width: 490px;
      max-height: 500px;
     
    }
  }
`;

const Card = styled.div`
   padding-left:70px;
   height:160px;
   width:85vw;
   padding-top:30px;
   display:flex;
  

   & img{
      width:80vw;
      height:160px;
      margin:15px;
      margin-left:80px;

   }

   & p{
    margin-left:80px;
    font-weight:500;
    padding-bottom:10px;
    text-align:center;
    margin-top:-10px;
     } 
`;
const Card1 = styled.div`

   height:160px;
   width:98vw;
   display:flex;
   margin-left:5px;

   & img{
    width:16.4vw;
    height:55vh;
 }

`;
const Card2 = styled.div`
margin-top:13rem;
   height:160px;
   width:98vw;
   display:flex;
   margin-left:5px;

   & img{
    width:16.4vw;
    height:55vh;
 }

`;

const Card3 = styled.div`
   width:98.5vw;
   display:flex;
   margin-left:5px;

   & img{
    margin-left:1.3rem;
    width:18.1vw;
    height:50vh;
 }
 
`;
const Card4 = styled.div`
   width:98.5vw;
   display:flex;

   & img{
    margin-left:.5rem;
    width:24vw;
    height:60vh;
 }
 
`;
const Card5 = styled.div`
   width:98.5vw;
   display:flex;
   margin-left:5px;

   & img{
    margin-left:1.3rem;
    width:18.1vw;
    height:50vh;
 }
 
`;

const Twoimg = styled.div`
   height:65vh;
   width:98.5vw;
   display:flex;
   margin-left:5px;

   & img{
    width:49.3vw;
    height:65vh;
 }
`;
const Twoimg2 = styled.div`
   height:65vh;
   width:98.5vw;
   display:flex;

   & img{
    width:49.3vw;
    height:65vh;
    padding-left:1rem;
 }
`;
const Twoimg3 = styled.div`
   height:65vh;
   width:98.5vw;
   display:flex;
   margin-left:5px;

   & img{
    width:49.3vw;
    height:65vh;
 }
`;
const Twoimg1 = styled.div`
   height:65vh;
   width:98.5vw;
   display:flex;
   margin-left:5px;

   & img{
    width:49.3vw;
    height:65vh;
 }
`;

const View = styled.div`
text-align:center;

`;



export const Home = () => {
  useEffect(() => {
    let wrapp = document.getElementById("wrapper");
    setInterval(() => {
      if (wrapp.scrollLeft >= 1100) {
        wrapp.scrollLeft = 0;
      } else {
        wrapp.scrollLeft += 300;
      }
    }, 5000);
  }, []);

  const images = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/OOFsale-Homepage-Static-1X1-LiveNow-common-extend1-1655284692.gif",
    
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/b1g1-1x1-m-1655216421.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Oversized-Tshirt-Men-1654684413.jpg",
      title: "Sindoor",
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-2-1654684414.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Buy-2-Men-1654684412.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-2-1654684414.jpg",
      
    },

  ];

  const images1 = [
   
    {
      img: "https://images.bewakoof.com/uploads/grid/app/just-arrived-polo-1661102739.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/revamped-banners-VarsityGreen-men-02-1661515187.gif",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/vest-2-1661430419.gif",
      
    },

  ];


  const cardimg = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1661504005.gif",
      title:"Design of the Day"
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/bestseller-1660921671.jpg",
      title:"Bestsellers"
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg",
      title:"Customization"
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/new-arrival-1660921673.jpg",
      title: "New Arrivals",
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/last-sizes-1660921673.jpg",
      title:"Last Sizes Left"
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg",
      title:"Plus Size"
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg",
      title:"Official Collaboration"
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg",
      title:"vote for Design"
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg",
      title: "Personal Care"
    },

  ];
  const cardimg1 = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg",
    
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg",
          
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg",
            
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg",
      },
   

  ];

  const cardimg2 = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg",
    
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg",
          
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-sweatshirts-m-1660748009.jpg",
            
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg",
      
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg",
      },
   

  ];

  const twocardimg = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg",
    
    },
    {
      img: "https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1660818217.jpg",
          
    },
    ];
    const twocardimg2 = [
      {
        img: "https://images.bewakoof.com/uploads/grid/app/play-men-banner-1660743046.jpg",
      
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/jackets--1659349867.jpg",
            
      },
      ];
      const twocardimg3 = [
        {
          img: "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plus-size-m-1659160620.jpg",
        
        },
        {
          img: "https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg",
              
        },
        ];
    const twocardimg1 = [
      {
        img: "https://images.bewakoof.com/uploads/grid/app/sweatshirt-men-1660737200.jpg",
      
      },
      {
        img: "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-house-of-dragon-02-1661322716.jpg",
            
      },
      ];


      const cardimg3 = [
        {
          img: "https://images.bewakoof.com/t320/aot-founding-titan-half-sleeve-t-shirt-518256-1657791545-1.jpg",
        title:"₹349"
             },
        {
          img: "https://images.bewakoof.com/t320/men-s-black-konshu-graphic-printed-t-shirt-537368-1661332213-1.jpg",
          title:"₹329"
   
        },
        {
          img: "https://images.bewakoof.com/t320/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg",
          title:"₹449"
   
        },
        {
          img: "https://images.bewakoof.com/t320/men-black-gohan-printed-t-shirt-516915-1658730861-1.jpg",
          title:"₹599"

        },
        {
          img: "https://images.bewakoof.com/t320/men-s-blue-konshu-graphic-printed-oversized-t-shirt-537366-1661330517-1.jpg",
          title:"₹399"

        },
      
    
      ];
       const cardimg5 = [
        {
          img: "https://images.bewakoof.com/t320/men-s-black-t-shirt-106-1659608016-5.jpg",
        title:"₹349"
             },
        {
          img: "https://images.bewakoof.com/t320/keep-listening-full-sleeve-t-shirt-465228-1655749251-1.jpg",
          title:"₹399"
   
        },
        {
          img: "https://images.bewakoof.com/t320/men-s-full-sleeve-t-shirts-1094-1659608683-1.jpg",
          title:"₹399"
   
        },
        {
          img: "https://i0.wp.com/indrajeetprint.com/wp-content/uploads/2022/06/RA74-ANIMATION-1.gif?fit=250%2C313&ssl=1",
          title:"₹349"

        },
        {
          img: "https://images.bewakoof.com/t640/cap-marvel-3-4th-sleeve-slim-fit-t-shirt-avl-321857-1656194569-1.gif",
          title:"₹349"

        },
      
    
      ];
      
      const cardimg4 = [
        {
          img: "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-banner-2-1661243826.jpg",
             },
        {
          img: "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-vests-men-1661243955.jpg",
   
        },
        {
          img: "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-banner-men-shorts---Copy-1661243828.jpg",
   
        },
        {
          img: "https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-backpacks---Copy-1661243828.png",
        },
        
      
    
      ];
  return (
    <>
        <MainDiv  id ="mainDiv">

<Link to="/" style={{textDecoration:'none'}}><h1>Men</h1></Link>
<Link to="/" style={{textDecoration:'none'}}><h1>Women</h1></Link>
<Link to="/" style={{textDecoration:'none'}}><h1>Accessories</h1></Link>
</MainDiv>
<Wrapper id="wrapper">
      {images.map((e) => (
        <Idiv key={e.img}>
          <div >
            <img src={e.img} alt="" />
          </div>
        </Idiv>
      ))}
    </Wrapper>

    <Banner id="banner">
        <img src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" alt=""/>
    </Banner>

    <Card id="card">
       {
        cardimg.map((elem)=>{
          return(
            <>
                <div>
                   <img src ={elem.img} alt=""/>
                   <p>{elem.title}</p>
                </div>
            </>
          )
        })

       }
    </Card>

    <Banner1 id="banner1">
        <img src="https://images.bewakoof.com/uploads/grid/app/thin-strip-new-2022-freebie-desktop-129-1661241484.jpg" alt=""/>
    </Banner1>

    <Heading id="heading">
    <p>POPULAR CATEGORIES</p>
    </Heading>
    <Card1 id="card1">
    {
      cardimg1.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })

     }
    </Card1>

    <Card2 id="card2">
    {
      cardimg2.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })

     }
    </Card2>

    <Heading1 id="heading1">
    <p>DISCOUNT PE DISCOUNT</p>
    </Heading1>


    <Twoimg id="twoimg">
    {
      twocardimg.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })
     }
    </Twoimg>
    <Twoimg1 id="twoimg">
    {
      twocardimg1.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })
     }
    </Twoimg1>

    <Heading2 id="heading2">
    <p>BESTSELLERS FOR MEN</p>
    </Heading2>

    <Card3 id="card3">
    {
      cardimg3.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
                 <h4>{elem.title}</h4>
              </div>
          </>
        )
      })

     }
    </Card3>


    <View  id ="view">
    <Link to="/" style={{color:"rgb(71,166,171)",textTransform:"uppercase"}}><h4>View all</h4></Link>
    </View>


    <Wrapper1 id="wrapper1">
      {images1.map((e) => (
        <Idiv key={e.img}>
          <div>
            <img src={e.img} alt="" />
          </div>
        </Idiv>
      ))}
    </Wrapper1>


    <Heading3 id="heading3">
    <p>BEST BARGAIN CORNER</p>
    </Heading3>

    <Card4 id="card4">
    {
      cardimg4.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
                 <h4>{elem.title}</h4>
              </div>
          </>
        )
      })

     }
    </Card4>

    <Heading3 id="heading3">
    <p>CLEARANCE ZONE</p>
    </Heading3>

    <Card5 id="card5">
    {
      cardimg5.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
                 <h4>{elem.title}</h4>
              </div>
          </>
        )
      })

     }
    </Card5>

    <View  id ="view">
    <Link to="/" style={{color:"rgb(71,166,171)",textTransform:"uppercase"}}><h4>View all</h4></Link>
    </View>

    <Heading3 id="heading3">
    <p>THE STOOPID COLLECTION</p>
    </Heading3>

    <Twoimg2 id="twoimg">
    {
      twocardimg2.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })
     }
    </Twoimg2>

    <Twoimg3 id="twoimg">
    {
      twocardimg3.map((elem)=>{
        return(
          <>
              <div>
                 <img src ={elem.img} alt=""/>
               
              </div>
          </>
        )
      })
     }
    </Twoimg3>

    <Banner id="banner">
        <img src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" alt=""/>
    </Banner>
    <Heading3 id="heading3">
    <p>Customize your T-shirts
    </p>
    </Heading3>
    <Banner2 id="banner1">
        <img src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif" alt=""/>
    </Banner2>

<Footer/>
    

    </>

    

  );
};
