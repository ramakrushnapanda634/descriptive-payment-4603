import { Box, Center, Text, VStack } from '@chakra-ui/layout'
import React from 'react'
import { Button, Checkbox, Icon, Input } from '@chakra-ui/react'
import { AiFillCreditCard, AiFillWallet, AiOutlineDoubleRight, AiOutlineTransaction, AiFillBank } from "react-icons/ai";

const Payment = () => {
  return (
    <>
    <Center>
      <Box display="flex" width="70%">
        <Box width="65%">
          <Box padding='8px 0'>
            <Text fontSize='12px'>
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
                    <Text fontSize='10px'>
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
                    <Text fontSize='10px'>
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
                    <Text fontSize='10px'>
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
                    <Text fontSize='10px'>
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
                    <Text fontSize='10px'>
                      <b>
                        Cash on Delivery
                      </b>
                    </Text>
                  </Box>
                </button>
              </Box>
            </Box>
            <Box width="67%" padding="10px">
              <VStack gap={4}>
                <Input size="xs" variant='flushed' placeholder='Card Number'/>
                <Box display="flex" gap={2} width="100%">
                  <Input size="xs" variant='flushed' placeholder='Valid through(MM/YY)'/>
                  <Input size="xs" variant='flushed' placeholder='CVV'/>
                </Box>
                <Input size="xs" variant='flushed' placeholder='Name On Card'/>
                <Box width="100%">
                  <Checkbox size='sm'  colorScheme='teal' defaultChecked>
                    <Text fontSize = '10px' color="grey">
                        Save card details for later
                    </Text>
                  </Checkbox>
                </Box>
                <Button size='sm' width="100%" colorScheme='teal'>Pay</Button>
              </VStack>
            </Box>
          </Box>
        </Box>
        <Box width="35%">
            <Box border='1px solid #CDCDCC' marginTop='50px'>
              <Box padding='5px 12px' bgColor='#F5F4F4'>
                <Text fontSize='8px'>
                  <b>
                    PRICE SUMMARY
                  </b>
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='8px' color='grey'>
                <Text>
                Total MRP (Incl. of taxes) 
                </Text>
                <Text>
                ₹ 999
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='8px' color='grey'>
                <Text>
                Delivery Fee 
                </Text>
                <Text>
                ₹30
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='8px' color='grey'>
                <Text>
                Bag Discount 
                </Text>
                <Text>
                - ₹650
                </Text>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}} padding='5px 12px' fontSize='8px' color='grey'>
                <Text>
                Subtotal 
                </Text>
                <Text>
                ₹ 379
                </Text>
              </Box>
              <Box bgColor='#E9F3E4' padding='3px 8px' borderRadius='10px' width='90%' margin='6px auto'>
                <Text fontSize='8px' color='#508A3D'>
                    You are saving ₹ 650 on this order
                </Text>
              </Box>
              <Box display='flex' borderTop='1px solid #CDCDCC' marginTop='26px' padding='12px'>
                <Box width='35%'>
                  <Text fontSize='8px'>
                    Total
                  </Text>
                  <Text fontSize='12px'>
                  ₹ 379
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