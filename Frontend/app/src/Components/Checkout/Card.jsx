import React from 'react'
import { Box, Center, Image, Select, Text} from '@chakra-ui/react'

const Card = ({prod}) => {
    console.log("card",prod)
    const saved = Number(prod.strikePrice) - Number(prod.price)
  return (
    <>
        <Box sx={{padding: '8px 8px 0 8px', border: '1px solid #CDCDCC', borderRadius: '3px', margin:'15px 0'}}>            
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box width='80%'>
                  <Text fontSize='15px' color='#6F8CA2'>{prod.title}</Text>
                  <Box sx={{display: 'flex', fontSize: '15px'}}>
                  <Text><b>{prod.price}</b></Text>&nbsp;
                  <Text fontSize= '12px' margin='3px 0' color='#6F8CA2'><strike>{prod.strikePrice}</strike></Text>
                  </Box>
                  <Text fontSize= '12px' color='#579042'>You saved ₹{saved}!</Text>
                  <Box display='flex' gap='5px' margin='5px 0'>
                    <Select placeholder='Size'  size='xs' fontSize= '11px' width='18%' iconSize='15px'>
                      <option value='option1'>S</option>
                      <option value='option2'>M</option>
                      <option value='option3'>L</option>
                      <option value='option4'>XL</option>
                      <option value='option5'>2XL</option>
                      <option value='option6'>3XL</option>
                    </Select>
                    <Select placeholder='Qty'  size='xs' fontSize= '11px' width='18%' iconSize='15px'>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </Box>
                  <Text fontSize= '11px' color='red'>Hurry! Only 11 left!</Text>
                </Box>
                <Box width='16%'>
                  <Image borderRadius='3px' src={prod.imgUrl}/>
                </Box>
              </Box>
              <Box fontSize='14px' color='#6F8CA2' display='flex' borderTop={'1px solid #CDCDCC'} margin='12px 3px 0 3px'>
                    <Box width='45%' borderRight={'1px solid #CDCDCC'}>
                      <Center>
                        <button style={{padding: '7px'}}>Remove</button>
                      </Center>
                    </Box>
                    <Box width='55%'>
                      <Center>
                        <button style={{padding: '7px'}}>Move to Wishlist</button>
                      </Center>
                    </Box>
              </Box>
            </Box>
    </>
  )
}

export default Card