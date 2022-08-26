import { Box, Button, Center, Image, Select, Text, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  VStack} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaTruck } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Center>
      <Box sx={{ width: '70%'}}>
        <Box sx={{display: 'flex', fontSize: '11px', margin: '15px 0'}}>
          <Text as='b'>My Bag</Text>&nbsp;
          <Text>0 items</Text>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{width: '58%'}}>
            <Box sx={{padding: '8px', display: 'flex'}} bg={"#FCFFEE"} borderRadius='3px'>
              <Text fontSize='9px'> <Icon as={FaTruck} color={'#F26167'}/> &nbsp;Shop for <b>₹50</b> more to get <b>FREE delivery!</b></Text>
            </Box>
            <Box sx={{padding: '8px 8px 0 8px', border: '1px solid #CDCDCC', borderRadius: '3px', margin:'15px 0'}}>            
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box width='80%'>
                  <Text fontSize='10px' color='#6F8CA2'>White Half Sleeve T-Shirt</Text>
                  <Box sx={{display: 'flex', fontSize: '12px'}}>
                  <Text><b>₹349</b></Text>&nbsp;
                  <Text fontSize= '9px' margin='3px 0' color='#6F8CA2'><strike>₹999</strike></Text>
                  </Box>
                  <Text fontSize= '9px' color='#579042'>You saved ₹650!</Text>
                  <Box display='flex' gap='5px' margin='5px 0'>
                    <Select placeholder='Size'  size='xs' fontSize= '8px' width='18%' iconSize='15px'>
                      <option value='option1'>S</option>
                      <option value='option2'>M</option>
                      <option value='option3'>L</option>
                      <option value='option4'>XL</option>
                      <option value='option5'>2XL</option>
                      <option value='option6'>3XL</option>
                    </Select>
                    <Select placeholder='Qty'  size='xs' fontSize= '8px' width='18%' iconSize='15px'>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </Box>
                  <Text fontSize= '8px' color='red'>Hurry! Only 11 left!</Text>
                </Box>
                <Box width='16%'>
                  <Image borderRadius='3px' src={'https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1659608382-1.jpg'}/>
                </Box>
              </Box>
              <Box fontSize='9px' color='#6F8CA2' display='flex' borderTop={'1px solid #CDCDCC'} margin='12px 3px 0 3px'>
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
          </Box>
          <Box sx={{width: '40%'}}>
            <Box sx={{padding: '8px', display: 'flex', justifyContent: 'space-between'}} bg={"#FCD834"} borderRadius='3px'>
              <Text fontSize='10px'>Save extra <b>₹50</b> with TriBe</Text>
              <Icon as={HiOutlineChevronDoubleRight} fontSize='14px'/>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='9px' color='grey'>
              <Text>
                Get Rs.100 instant discount on your First Purchase above Rs.599. Coupon code - NEW100
              </Text>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='9px' color='grey'>
              <Text>
                Wohoo! Get a free gift worth Rs.129 on all prepaid orders above Rs.999. Coupon Code- GETFREEGIFT. Not applicable on combo offers!
              </Text>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='9px' color='grey'>
              <Text>
                Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
              </Text>
            </Box>
            <Box padding={'3px'} border='1px solid #CDCDCC'>
              <Button color='#42A2A2'  size='xs' width='100%' fontSize='9px'> {/*onClick={onOpen}*/}
                <Box width='100%' sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Text>
                    Have a Coupon / Referral / Gift Card ? 
                  </Text>
                  <Text>
                    <b>
                      Redeem
                    </b>
                  </Text>
                </Box>
              </Button>
              {/* <Modal size='xs' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize='12px'>
                    <Center>
                      Have a Coupon / Gift Card?
                    </Center>
                  </ModalHeader>
                  <ModalCloseButton fontSize='8px'/>
                  <ModalBody>
                    <Input size='xs' placeholder='ENTER CODE'/>
                  </ModalBody>

                  <ModalFooter>
                    <Button width='100%' size='xs' padding='18px' bgColor='#42A2A2' color='white' onClick={onClose}>
                      APPLY
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> */}
            </Box>
            <Box border='1px solid #CDCDCC'>
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
                <Box width='65%'>
                  <Button onClick={onOpen} size='xs' width='100%' padding='16px' bgColor='#42A2A2' color='white'>
                      ADD ADDRESS
                  </Button>
                  <Modal size='sm' isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader fontSize='12px'>
                        Add New Address
                      </ModalHeader>
                      <ModalCloseButton fontSize='8px'/>
                      <ModalBody>
                        <VStack gap={'4'}>

                        <Input size='xs' placeholder='Full Name'/>
                        <Input size='xs' placeholder='Mobile Number'/>
                        <Input size='xs' placeholder='Pin Code'/>
                        <Box width='100%' sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Input width='49%' size='xs' placeholder='City'/>
                        <Input width='49%' size='xs' placeholder='State'/>
                        </Box>
                        <Input size='xs' placeholder='Flat no/Building, Street name'/>
                        <Input size='xs' placeholder='Area/Locality'/>
                        <Input size='xs' placeholder='Landmark(Optional)'/>
                        </VStack>
                      </ModalBody>

                      <ModalFooter>
                        <Box width='100%' sx={{display: 'flex', justifyContent: 'space-around'}}>

                        <Button size='xs' padding='16px 18px' bgColor='#42A2A2' color='white' onClick={onClose}>
                          SAVE ADDRESS
                        </Button>
                        <Button size='xs' padding='16px 18px'  onClick={onClose}>
                          CANCEL
                        </Button>
                        </Box>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </Center>
    </>
  )
}

export default Checkout