import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";



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
width:98vw;

& img{
  width:98.9vw;
  padding-top:5rem;
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
`
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
   padding-left:95px;
   height:160px;
   width:70vw;
   padding-top:30px;
   display:flex;
  

   & img{
      width:120px;
      height:160px;
      margin:15px
   }

   & p{
    margin-left:20px;
    font-weight:500;
    padding-bottom:10px;
    text-align:center;
    margin-top:-10px;
     }

     
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


  const cardimg = [
    {
      img: "https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1661246518.jpg",
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
    </>

    

  );
};
