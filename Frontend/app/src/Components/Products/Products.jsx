import React, { useRef, useState } from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Text, Grid, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Image, } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon,} from "@chakra-ui/icons";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductsAPI } from '../../store/products/products.actions';
import { useDispatch, useSelector } from 'react-redux'
import ProductsLayout from './ProductsLayout';

const Products = () => {

  const [porductsData, setProductsData] = useState([]);
  const [selected, setSelected] = useState("");
  const [linkTag, setLinkTag] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preTag = useRef("");
  const { category } = useParams();
 

  const { data } = useSelector((state) => state.products.products);
  //setProductsData(data);
  //console.log('data:', data)

  const findSubcategoryFromPath = (subcategory) => {
    // switch (subcategory) {
    //   case "freshFruits":
    //     return setProductsData(data);
    //   case "exoticFruits":
    //     return setProductsData(data);
    //   case "fruitCombos":
    //     return setProductsData(data);
    //   default:
    //     // console.log(typeof AnsCategory);
    //     return setProductsData(data);
    // }
    return setProductsData(data);
  }

  useEffect(() => {
    dispatch(getProductsAPI(category));
  }, [category]);

  useEffect(() => {
    findSubcategoryFromPath(category)
  }, [data])
  

  const sideMenu = [
    {
      category: "Category",
      path: "category",
      subCategory: [
        {
          subpath: "t-shirt",
          item: "T-shirt",
        },
        {
          subpath: "shirt",
          item: "Shirt",
        },
        {
          subpath: "boxer",
          item: "Boxer",
        },
        {
          subpath: "joggers",
          item: "Joggers",
        },
        {
          subpath: "track-pant",
          item: "Track Pant",
        },
        {
          subpath: "hoddies",
          item: "Hoddies",
        },
      ],
    },
    {
      category: "Sizes",
      path: "sizes",
      subCategory: [
        {
          subpath: "xs",
          item: "XS",
        },
        {
          subpath: "s",
          item: "S",
        },
        {
          subpath: "m",
          item: "M",
        },
        {
          subpath: "l",
          item: "L",
        },
        {
          subpath: "xl",
          item: "XL",
        },
        {
          subpath: "2xl",
          item: "2XL",
        },
        
      ],
    },
    {
      category: "Brand",
      path: "brand",
      subCategory: [
        {
          subpath: "t-shirt",
          item: "T-shirt",
        },
        {
          subpath: "shirt",
          item: "Shirt",
        },
        {
          subpath: "boxer",
          item: "Boxer",
        },
        {
          subpath: "joggers",
          item: "Joggers",
        },
        {
          subpath: "track-pant",
          item: "Track Pant",
        },
        {
          subpath: "hoddies",
          item: "Hoddies",
        },
      ],
    },
    {
      category: "Colour",
      path: "colour",
      subCategory: [
        {
          subpath: "t-shirt",
          item: "T-shirt",
        },
        {
          subpath: "shirt",
          item: "Shirt",
        },
        {
          subpath: "boxer",
          item: "Boxer",
        },
        {
          subpath: "joggers",
          item: "Joggers",
        },
        {
          subpath: "track-pant",
          item: "Track Pant",
        },
        {
          subpath: "hoddies",
          item: "Hoddies",
        },
      ],
    },
    {
      category: "Design",
      path: "design",
      subCategory: [
        {item: "Solid"},
        {item: "Printed"},
        {item: "Graphic Print"},
        {item: "Typography"},
        {item: "Plain"},
        {item: "Color Block"},
      ],
    },
    {
      category: "Fit",
      path: "fit",
      subCategory: [
        {item: "Regular Fit"},
        {item: "Slim Fit"},
        {item: "Skinny Fit"},
        {item: "Slim"},
        {item: "Loose"},
        {item: "Regular"},
      ],
    },
    {
      category: "Sleeve",
      path: "fit",
      subCategory: [
        {item: "Half Sleeve"},
        {item: "Full Sleeve"},
        {item: "Sleeveless"},
        {item: "Short Sleeve"},
        {item: "Long Sleeve"},
      ],
    },
    {
      category: "Neck",
      path: "neck",
      subCategory: [
        {item: "Rounded Neck"},
        {item: "Hood"},
        {item: "Spread Collar"},
        {item: "Polo"},
        {item: "High Neck"},
        {item: "Collared"},
        {item: "Collarless"},
      ],
    },
    {
      category: "Type",
      path: "type",
      subCategory: [
        {item: "T-shirts"},
        {item: "Shorts"},
        {item: "Joggers"},
        {item: "Jeans"},
        {item: "Hoddies"},
        {item: "Track Pants"},
        {item: "Collarless"},
        {item: "Vest"},
      ],
    },
    {
      category: "Rating",
      path: "rating",
      subCategory: [
        {item: "4.5 and above"},
        {item: "4 and above"},
        {item: "3.5 and above"},
        {item: "3 and above"},
        { item: "2.5 and above" },
      ]
    },
    {
      category: "Discount",
      path: "discount",
      subCategory: [
        {item: "10% Or More"},
        {item: "20% Or More"},
        {item: "30% Or More"},
        {item: "40% Or More"},
        {item: "50% Or More"},
        {item: "60% Or More"},
        {item: "70% Or More"},
      ]
    },
    {
      category: "Sort By",
      path: "sort by",
      subCategory: [
        {item: "Popular"},
        {item: "New"},
        {item: "Price: High to Low"},
        {item: "Price: Low to high"},
      ]
    },
    
  ];

  const sortBy = [
    { item: "Popular" },
    { item: "New" },
    { item: "Price: High to Low" },
    { item: "Price: Low to high" },
  ]
  return (
    <Box mt={"4%"}>
      <Box>
        <Image src="https://images.bewakoof.com/uploads/category/desktop/thin-strip-new-2022-freebie-desktop-banner-129-1661242223.jpg" w={"100%"} />
      </Box>
      <Box w={"75%"} m={"auto"}  mt={"4%"}>
        <Box>
          <Box display={"flex"}>
            <Heading color={"#2d2d2d"} m={"0"} p={"0"} fontSize={"26px"}>
              {
                category === "men-clothing" ? "Men Clothing" : category === "women-clothing" ? "Women Clothing":"Mobile Covers"
              }
            </Heading>
            <Heading color={"#949494"} pl={"10px"} fontWeight={"normal"} fontSize={"24px"}>(8774)</Heading>
          </Box>
          <Box w={"117px"} h={"2px"} bgColor={"#fbd139"} display={"block"} m={"6px 0 0 2px"}>
          </Box>
        </Box>
        <Flex mt={"30px"}>
          {category === "mobile-covers" ? "":<Box width={"35%"} pr="10px">
            <Text fontSize={"12px"} m={"0 8px 0 30px"} textAlign={"left"} color={"#949494"} fontWeight={"semibold"} >
              FILTERS
            </Text>
            <Accordion allowToggle>
              {sideMenu.map((item) => (
                <AccordionItem
                  key={item.category}
                  border={"none"}
                  borderBottom={"1px solid #eee"}
                  p={"5px 0 5px 0"}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>

                          <Box
                            flex="1"
                            textAlign="left"
                            ml={3}
                            fontSize={"14px"}
                            color={"#333333"}
                            onClick={() => {
                              // item.subCategory[0].getProduct(
                              //   item.subCategory[0].item
                              // );
                              setLinkTag(` > ${item.category}`);
                              setSelected(item.subCategory[0].item);
                              // navigate(
                              //   `/products/${item.path}/${item.subCategory[0]?.subpath}`
                              // );
                              preTag.current = ` > ${item.category}`;
                            }}
                            cursor="pointer"
                          >
                            {/* <Link
                            to={`/products/${item.path}/${item.subCategory[0]?.subpath}`}
                          > */}
                            {item.category}
                            {/* </Link> */}
                          </Box>
                          {isExpanded ? (
                            <ChevronUpIcon fontSize="12px" w={"20px"} h={"20px"} />
                          ) : (
                            <ChevronDownIcon fontSize="12px" w={"20px"} h={"20px"} />
                          )}
                        </AccordionButton>
                      </h2>
                      {item.subCategory.map((subItem) => (
                        // <Link
                        //   to={`/products/${item.path}/${subItem.subpath}`}
                        //   key={subItem.item}
                        // >
                        <AccordionPanel
                          key={subItem.item}
                          pb={2}
                          fontSize="12px"
                          color={"#2D2D2DB3"}
                          textAlign={"left"}
                          ml={2}
                          border={"1px solid #eee"}
                          borderLeft={"none"}
                          onClick={() => {
                            // subItem.getProduct(subItem.item);
                            setLinkTag(` > ${item.category}`);
                            setSelected(subItem.item);
                            //navigate(`/products/${item.path}/${subItem.subpath}`);
                          }}
                          cursor="pointer"
                        >
                          <Flex
                            alignItems={"center"}
                            justifyContent="left"
                            gap={3}
                          >
                            <i className="fa-solid fa-angle-right"></i>{" "}
                            <Text>{subItem.item}</Text>
                          </Flex>
                        </AccordionPanel>
                        // </Link>
                      ))}
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>}
          <Box width={"100%"} pl="10px">
            <Box
              display={"flex"}
              fontSize={"12px"} m={"0 8px 0 30px"} justifyContent={"right"} gap={"10px"} color={"#949494"} fontWeight={"semibold"}
            >
              SORT BY
              <Popover trigger={"hover"} >
                <PopoverTrigger>
                  <Text>Category</Text>
                </PopoverTrigger>
                <PopoverContent w={"150px"} textAlign={"left"}>
                  <PopoverArrow />
                  {/* <PopoverCloseButton /> */}
                  {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
                  <PopoverBody>
                    <Text>Popular</Text>
                    <Text>New</Text>
                    <Text>Price: High to Low</Text>
                    <Text>Price: Low to High</Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Grid
              width={"100%"}
              // border={"1px solid orange"}
              templateColumns="repeat(3, 1fr)"
              gap={4}
            >
              {porductsData?.map((product) => (
                <ProductsLayout product={product} key={product._id} />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Products