import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import wishlist from "../../Assets/wishlist.svg"


const ProductsLayout = ({ product }) => {
    
    return (
        <Link
            to={`/products/${product._id}`}
            style={{ textDecoration: "none" }}
        >
        <Box textAlign={"left"} >
            <Image src={product.imgUrl} w={"100%"} h={"360px"} _hover={{
                animationName: "fadeInOpacity",
                animationIterationCount:"1",
                animationTimingFunction:"linear",
                animationDuration:"0.7s"}} />
            <Box display={"flex"}>
                <Box w={"90%"} mt={"4px"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    lineHeight={"12px"}   >
                    <Text fontSize={"12px"} color={"#4F5362"} fontWeight={"bold"}>Bewakoof</Text>
                    <Text fontSize={"10px"} color={"#737373"}>{product.title}</Text>
                </Box>
                <Box  cursor={"pointer"} opacity={"0.6"}>
                    <Image src={wishlist} w={"28px"} h={"28px"} mr={"4px"} />
                </Box>
            </Box>
            <Box display={"flex"}>
              
                <Text display={"flex"} fontWeight={"bold"}>
                    <Text fontSize={"12px"} mt={"4px"}>₹</Text>
                    {product.price}
                </Text>
                <Text display={"flex"} ml={"5px"} color={"#949494"} fontSize={"12px"} mt={"5px"} textDecoration={"line-through"}>
                    <Text>₹</Text>
                    {product.strikedOffprice}
                </Text>
            </Box>
            <Box ml={"5px"}><Text fontSize={"12px"} fontWeight={"bold"}>₹419 For TriBe Members</Text></Box>
            </Box>
        </Link>
    )
}

export default ProductsLayout