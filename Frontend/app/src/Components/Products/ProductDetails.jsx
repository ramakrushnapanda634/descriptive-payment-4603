import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProductAPI } from '../../store/products/products.actions';
import wishlist from "../../Assets/wishlist.svg"


const ProductDetails = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState("");

    const { data: singleProduct, loading } = useSelector((state) => state.products.singleProduct);
    //console.log('singleProduct:', singleProduct)
    const { id } = useParams();
    //console.log('id:', id)

    useEffect(() => {
        window.scroll(0, 0);
        dispatch(getSingleProductAPI(id));
    }, [id, dispatch, getSingleProductAPI]);
    
    const size = ["S", "M", "L", "XL", "2XL", "3XL"];
    const Menu = ["SAVE EXTRA WITH 3 OFFERS", "PRODUCT DESCRIPTION", "15 DAY RETURNS & EXCHANGE", "DELIVERY DETAILS"]
    
    const handleAddToCart = () => {
        // const addData = {
        //     productId: item.id,
        //     count: 1,
        //     imgUrl: item.imgUrl,
        //     name: item.name,
        //     packSize: item.packSize,
        //     price: item.price,
        //     strikePrice: item.strikePrice,
        //     soldOut: item.soldOut,
        //     notifyme: item.notifyme,
        //     category: item.category,
        //     subCatagory: item.subCatagory,
        //     tooltipText: item.tooltipText,
        //     benefits: item.benefits,
        //     description: item.description,
        //     info: item.info,
        // };
        dispatch()
    };

    if (loading) return <div>Loading</div>;
    else {


        return (
            <Box display={"flex"} w={"75%"} margin={"auto"} mt={"4%"}>
                <Box w={"50%"} display={"flex"}>
                    <Box w={"30%"} >
                        {/* border={"1px solid red"} */}
                        <ChevronUpIcon fontSize="12px" w={"20px"} h={"20px"}  ml={"30%"} />
                        {singleProduct.imgArray && singleProduct.imgArray.map((e, i) => (
                            <Box key={i} p={"5px"}>
                                <Image src={e} onClick={() => setImg(e)} />
                            </Box>
                        ))}
                        <ChevronDownIcon fontSize="12px" w={"20px"} h={"20px"} ml={"30%"} />
                    </Box>
                    <Box >
                        <Image src={img ? img : singleProduct.imgUrl} w={"90%"} m={"auto"} />
                    </Box>
                </Box>
                <Box textAlign={"left"}>
                    <Text color={"#4F5362"} fontSize={"18px"} fontWeight={"semibold"}>Bewakoof</Text>
                    <Text color={"#949494"} fontSize={"17px"}>{singleProduct.title}</Text>
                    <Box>
                        <Box display={"flex"}>
                            <Text display={"flex"} fontWeight={"bold"} fontSize={"24px"}>
                                <Text fontSize={"16px"} mt={"8px"}>₹</Text>
                                {singleProduct.price}
                            </Text>
                            <Text display={"flex"} ml={"5px"} color={"#949494"} fontSize={"14px"} mt={"10px"} textDecoration={"line-through"}>
                                <Text>₹</Text>
                                {singleProduct.strikedOffprice}
                            </Text>
                            <Text fontSize={"16px"} color={"#00b852"} mt={"8px"} ml={"10px"} fontWeight={"medium"}>
                                65% OFF
                            </Text>
                        </Box>
                        <Box>
                            <Text color={"#949494"} fontSize={"14px"}>inclusive of all taxes</Text>
                        </Box>
                        <Box display={"flex"}>
                            <Text bgColor={"#525252CC"} m={"8px 16px 8px 0px"} p={"3px 8px"} color={"#fff"} fontSize={"12px"}>
                                OVERSIZED FIT
                            </Text>
                            <Text m={"8px 16px 8px 0px"} p={"3px 8px"} fontSize={"12px"} fontWeight={"medium"} border={"1px solid"}>
                                DESIGN OF THE DAY
                            </Text>
                        </Box>
                        <Box bgColor={"#eee"}
                            height={"3px"}
                            width={"30%"}
                            display={"block"}
                            position={"absolute"}
                            margin={"0 -15px"} ></Box>
                        <Box display={"flex"} fontSize={"12px"} p={"16px 0"}>
                            <Text>TriBe members get an extra discount of </Text>
                            <Text fontWeight={"bold"} m={"0 5px"}>₹30</Text>
                            <Text>and FREE shipping.</Text>
                            <Text color={"#42a2a2"} ml={"5px"}>Learn more</Text>
                        </Box>
                        <Box bgColor={"#eee"}
                            height={"3px"}
                            width={"30%"}
                            display={"block"}
                            position={"absolute"}
                            margin={"0 -15px"} >

                        </Box>
                    </Box>
                    <Box mt={"10px"}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Text fontSize={"12px"} fontWeight={"bold"}>SELECT SIZE</Text>
                            <Text fontSize={"14px"} fontWeight={"semibold"} color={"#42A2A2"} textDecoration={"underline"}>Size Guide</Text>
                        </Box>
                        <Box display={"flex"} mt={"10px"}>
                            {
                                size.map((e, i) => (
                                    <Box key={i} w={"48px"} h={"48px"} mr={"9px"} fontSize={"14px"}
                                        border={"1px solid #000"} cursor={"pointer"} textAlign={"center"} borderRadius={"5px"}>
                                        <Text m={"12px 4px 5px 0"}>{e}</Text>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box fontSize={"12px"} display={"flex"} mt={"10px"}>
                            <Text>Garment:</Text>
                            <Text color={"#878787"} ml={"5px"} mr={"5px"}>Chest (in Inch):</Text>
                            <Text>50.0</Text>
                            <Text color={"#878787"} ml={"5px"} mr={"5px"}>| Front Length (in Inch):</Text>
                            <Text>32.0</Text>
                            <Text color={"#878787"} ml={"5px"} mr={"5px"}>|</Text>
                        </Box>
                        <Box fontSize={"12px"} display={"flex"}>
                            <Text color={"#878787"} ml={"5px"} mr={"5px"}>Sleeve Length (in Inch):</Text>
                            <Text>10.75</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} fontSize={"14px"} fontWeight={"semibold"} mt={"20px"}>
                        <Box display={"flex"} bgColor={"#ffd84d"} borderRadius={"3px"} h={"40px"} cursor={"pointer"} alignItems={"center"} p={"0 40px"} onClick={() => handleAddToCart}>
                            <Image src="https://images.bewakoof.com/web/ic-web-head-cart.svg" w={"20px"} h={"20px"} mr={"5px"} />
                            ADD TO BAG
                        </Box>
                        <Box display={"flex"} ml={"20px"} border={"1px solid #d6d6d6"} borderRadius={"3px"} h={"40px"} cursor={"pointer"} alignItems={"center"} p={"0 40px"} color={"#949494"}>
                            <Image src={wishlist} h={"18px"} w={"18px"} mr={"5px"} />
                            WISHLIST
                        </Box>
                    </Box>
                    <Box>
                        <Accordion allowToggle>
                            {Menu.map((item) => (
                                <AccordionItem
                                    key={item}
                                    border={"none"}
                                    borderBottom={"1px solid #eee"}
                                    p={"5px 0 5px 0"}
                                >
                                    <h2>
                                        <AccordionButton>

                                            <Box
                                                flex="1"
                                                textAlign="left"
                                                ml={3}
                                                fontSize={"12px"}
                                                color={"#333333"}
                                                cursor="pointer"
                                                fontWeight={"bold"}
                                            >
                                                {item}
                                            </Box>
                                            <AddIcon fontSize="12px" fontWeight={"bold"} w={"10px"} h={"10px"} />
                                            {/* {isExpanded ? (
                                        <ChevronUpIcon fontSize="12px" w={"20px"} h={"20px"} />
                                    ) : (
                                        <ChevronDownIcon fontSize="12px" w={"20px"} h={"20px"} />
                                    )} */}
                                        </AccordionButton>
                                    </h2>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default ProductDetails