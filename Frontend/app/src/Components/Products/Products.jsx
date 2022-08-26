import React, { useRef, useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Flex, Heading, Text, Grid, } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductsAPI } from '../../store/products/products.actions';
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

  const [porductsData, setProductsData] = useState([]);
  const [selected, setSelected] = useState("");
  const [linkTag, setLinkTag] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preTag = useRef("");
  const { subcategory } = useParams();

  const { data } = useSelector((state) => state.products.products);
  console.log('data:', data)

  useEffect(() => {
    dispatch(getProductsAPI());
  }, [])
  

  const sideMenu = [
    {
      category: "Mangoes",
      path: "mangoes",
      subCategory: [{ subpath: "mangoes", item: "Mangoes" }],
    },
    {
      category: "Fruits",
      path: "fruits",
      subCategory: [
        {
          subpath: "fresh-fruits",
          item: "Fresh Fruits",
        },
        {
          subpath: "exotic-fruits",
          item: "Exotic Fruits",
        },
        {
          subpath: "fruit-combos",
          item: "Fruit Combos",
        },
      ],
    },
    {
      category: "Vegetables",
      path: "vegetables",
      subCategory: [
        {
          subpath: "daily-veggies",
          item: "Daily Veggies",
        },
        {
          subpath: "exotic-vegetables",
          item: "Exotic Vegetables",
        },
        {
          subpath: "cuts-peeled-sprouts",
          item: "Cuts, Peeled & Sprouts",
        },
        {
          subpath: "vegetable-combos",
          item: "Vegetable Combos",
        },
        {
          subpath: "herbs-leafies",
          item: "Herbs & Leafies",
        },
      ],
    },
    {
      category: "Dry Fruits",
      path: "dryfruits",
      subCategory: [
        {
          subpath: "premium-quality-dry-fruits",
          item: "Premium Quality Dry Fruits",
        },
      ],
    },
  ];
  return (
    <Box p={"0 40px"}>
      {/* <Heading>Products</Heading> */}
      <Flex>
        <Box width={"220px"} pr="10px">
          <Accordion allowToggle>
            {sideMenu.map((item) => (
              <AccordionItem
                key={item.category}
                border={"none"}
                borderBottom={"1px solid #eee"}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" color={"#4fbb90"} />
                        ) : (
                          <AddIcon fontSize="12px" color={"#4fbb90"} />
                        )}
                        <Box
                          flex="1"
                          textAlign="left"
                          ml={3}
                          fontSize={"16px"}
                          fontWeight={600}
                          onClick={() => {
                            // item.subCategory[0].getProduct(
                            //   item.subCategory[0].item
                            // );
                            setLinkTag(` > ${item.category}`);
                            setSelected(item.subCategory[0].item);
                            navigate(
                              `/products/${item.path}/${item.subCategory[0]?.subpath}`
                            );
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
                      </AccordionButton>
                    </h2>
                    {item.subCategory.map((subItem) => (
                      // <Link
                      //   to={`/products/${item.path}/${subItem.subpath}`}
                      //   key={subItem.item}
                      // >
                      <AccordionPanel
                        key={subItem.item}
                        pb={4}
                        fontSize="14px"
                        textAlign={"left"}
                        ml={2}
                        border={"1px solid #eee"}
                        borderLeft={"none"}
                        onClick={() => {
                          // subItem.getProduct(subItem.item);
                          setLinkTag(` > ${item.category}`);
                          setSelected(subItem.item);
                          navigate(`/products/${item.path}/${subItem.subpath}`);
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
        </Box>
        <Box width={"100%"} pl="10px">
          <Flex
            textAlign={"left"}
            fontWeight={500}
            fontSize="15px"
            pb={"10px"}
            color={"black"}
            gap={2}
          >
            <Link to="/">
              <Text opacity={"0.6"} _hover={{ textDecoration: "underline" }}>
                Home
              </Text>
            </Link>
            {linkTag}
          </Flex>
          <Text
            textAlign={"left"}
            fontWeight={600}
            fontSize="16px"
            pb={"10px"}
            color={"black"}
          >
            {selected}
          </Text>
          <Grid
            width={"100%"}
            // border={"1px solid orange"}
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            {/* {porductsData?.map((product) => (
              <AllProductsLayout product={product} key={product._id} />
            ))} */}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default Products