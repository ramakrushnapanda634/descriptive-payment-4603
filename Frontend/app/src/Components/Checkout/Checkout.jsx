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
import React, { useEffect, useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { FaTruck } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { getCartAPI } from '../../store/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { isOpen, onOpen, onClose } = useDisclosure()

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

  let navigate = useNavigate()

  const onSave = () => {
    navigate("../payment", {replace: true})
  }
  
  return (
    <>
    <Center>
      <Box sx={{ width: '70%'}} marginTop='50px'>
        <Box sx={{display: 'flex', fontSize: '18px', margin: '15px 0'}}>
          <Text as='b'>My Bag</Text>&nbsp;
          <Text>0 items</Text>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{width: '58%'}}>
            <Box sx={{padding: '8px', display: 'flex'}} bg={"#FCFFEE"} borderRadius='3px'>
              <Text fontSize='13px'> <Icon as={FaTruck} color={'#F26167'}/> &nbsp;Shop for <b>₹50</b> more to get <b>FREE delivery!</b></Text>
            </Box>
            {data?.map((item, i) => (

              <Card prod={item} key={i}/>
            ))}
            
          </Box>
          <Box sx={{width: '40%'}}>
            <Box sx={{padding: '8px', display: 'flex', justifyContent: 'space-between'}} bg={"#FCD834"} borderRadius='3px'>
              <Text fontSize='13px'>Save extra <b>₹50</b> with TriBe</Text>
              <Icon as={HiOutlineChevronDoubleRight} fontSize='18px'/>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='12px' color='grey'>
              <Text>
                Get Rs.100 instant discount on your First Purchase above Rs.599. Coupon code - NEW100
              </Text>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='12px' color='grey'>
              <Text>
                Wohoo! Get a free gift worth Rs.129 on all prepaid orders above Rs.999. Coupon Code- GETFREEGIFT. Not applicable on combo offers!
              </Text>
            </Box>
            <Box padding={'3px 8px'} border='1px solid #CDCDCC' borderRadius='3px' margin='10px 0' fontSize='12px' color='grey'>
              <Text>
                Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!
              </Text>
            </Box>
            <Box padding={'3px'} border='1px solid #CDCDCC'>
              <Button color='#42A2A2'  size='xs' width='100%' fontSize='12px'> {/*onClick={onOpen}*/}
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
                <Box width='65%'>
                  <Button onClick={onOpen} size='sm' width='100%' padding='16px' bgColor='#42A2A2' color='white'>
                      ADD ADDRESS
                  </Button>
                  <Modal size='sm' isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader fontSize='16px'>
                        Add New Address
                      </ModalHeader>
                      <ModalCloseButton fontSize='12px'/>
                      <ModalBody>
                        <VStack gap={'4'}>

                        <Input size='sm' placeholder='Full Name'/>
                        <Input size='sm' placeholder='Mobile Number'/>
                        <Input size='sm' placeholder='Pin Code'/>
                        <Box width='100%' sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Input width='49%' size='sm' placeholder='City'/>
                        <Input width='49%' size='sm' placeholder='State'/>
                        </Box>
                        <Input size='sm' placeholder='Flat no/Building, Street name'/>
                        <Input size='sm' placeholder='Area/Locality'/>
                        <Input size='sm' placeholder='Landmark(Optional)'/>
                        </VStack>
                      </ModalBody>

                      <ModalFooter>
                        <Box width='100%' sx={{display: 'flex', justifyContent: 'space-around'}}>

                        <Button size='xs' padding='16px 18px' bgColor='#42A2A2' color='white' onClick={onSave}>
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