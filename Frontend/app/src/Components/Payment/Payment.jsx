import { Box, Center, Text, VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { Button, Checkbox, Icon, Input } from '@chakra-ui/react'
import { AiFillCreditCard, AiFillWallet, AiOutlineDoubleRight, AiOutlineTransaction, AiFillBank } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getCartAPI } from '../../store/cart/cart.actions';

const Payment = () => {

  const { data } = useSelector((state) => state.cart.cart);
  console.log('data:', data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartAPI());
  }, [])

  var total = 0
  var stotal = 0
  data?.map((e) => {
    total += Number(e.price)
    stotal += Number(e.strikePrice)
  })
  var discount = stotal - total

  return (
    <>
    <Center>
      <Box display="flex" width="70%" marginTop='50px'>
        <Box width="65%">
          <Box padding='8px 0'>
            <Text fontSize='18px'>
              <b>
                Choose your payment method
              </b>
            </Text>
          </Box>
          <Box display="flex" border="1px solid #CDCDCC">
            <Box width="33%">
              <Box borderBottom= '1px solid #CDCDCC'>
                <button>
                  <Box  display="flex" borderLeft="3px solid #42A2A2"padding='16px 20px'>
                    <Icon as={AiFillCreditCard} />
                    <Box width="5px"></Box>
                    <Text fontSize='14px'>
                      <b>
                        Debit/Credit Card
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
              <Box bgColor='#F6F6F7' color="#CDCDCC" borderBottom= '1px solid #CDCDCC'>
                <button>
                  <Box display="flex"  padding='16px 20px'>
                    <Icon as={AiFillWallet} />
                    <Box width="5px"></Box>
                    <Text fontSize='14px'>
                      <b>
                        Wallet
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
              <Box bgColor='#F6F6F7' color="#CDCDCC" borderBottom= '1px solid #CDCDCC'>
                <button>
                  <Box display="flex"  padding='16px 20px'>
                    <Icon as={AiOutlineDoubleRight} />
                    <Box width="5px"></Box>
                    <Text fontSize='14px'>
                      <b>
                        UPI
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
              <Box bgColor='#F6F6F7' color="#CDCDCC" borderBottom= '1px solid #CDCDCC'>
                <button>
                  <Box display="flex"  padding='16px 20px'>
                    <Icon as={AiFillBank} />
                    <Box width="5px"></Box>
                    <Text fontSize='14px'>
                      <b>
                        Net banking
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
              <Box bgColor='#F6F6F7' color="#CDCDCC" borderBottom= '1px solid #CDCDCC'>
                <button>
                  <Box display="flex"  padding='16px 20px'>
                    <Icon as={AiOutlineTransaction} />
                    <Box width="5px"></Box>
                    <Text fontSize='14px'>
                      <b>
                        Cash on Delivery
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
            </Box>
            <Box width="67%" padding="14px">
              <VStack gap={4}>
                <Input size="sm" variant='flushed' placeholder='Card Number'/>
                <Box display="flex" gap={2} width="100%">
                  <Input size="sm" variant='flushed' placeholder='Valid through(MM/YY)'/>
                  <Input size="sm" variant='flushed' placeholder='CVV'/>
                </Box>
                <Input size="sm" variant='flushed' placeholder='Name On Card'/>
                <Box width="100%">
                  <Checkbox size='md'  colorScheme='teal' defaultChecked>
                    <Text fontSize = '14px' color="grey">
                        Save card details for later
                    </Text>
                  </Checkbox>
                </Box>
                <Button size='md' width="100%" colorScheme='teal'>Pay</Button>
              </VStack>
            </Box>
          </Box>
        </Box>
        <Box width="35%">
        <Box border='1px solid #CDCDCC' marginTop='50px'>
              <Box padding='5px 12px' bgColor='#F5F4F4'>
                <Text fontSize='12px'>
                  <b>
                    PRICE SUMMARY
                  </b>
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='12px' color='grey'>
                <Text>
                Total MRP (Incl. of taxes) 
                </Text>
                <Text>
                ₹ {stotal}
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='12px' color='grey'>
                <Text>
                Delivery Fee 
                </Text>
                <Text>
                ₹30
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='12px' color='grey'>
                <Text>
                Bag Discount 
                </Text>
                <Text>
                - ₹{discount}
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='12px' color='grey'>
                <Text>
                Subtotal 
                </Text>
                <Text>
                ₹ {total}
                </Text>
              </Box>
              <Box bgColor='#E9F3E4' padding='3px 8px' borderRadius='10px' width='90%' margin='6px auto'>
                <Text fontSize='12px' color='#508A3D'>
                    You are saving ₹ 650 on this order
                </Text>
              </Box>
              <Box display='flex' borderTop='1px solid #CDCDCC' marginTop='26px' padding='12px'>
                <Box width='35%'>
                  <Text fontSize='11px'>
                    Total
                  </Text>
                  <Text fontSize='16px'>
                  ₹ {total}
                  </Text>
                </Box>
              </Box>
            </Box>
        </Box>
      </Box>
    </Center>
    </>
  )
}

export default Payment