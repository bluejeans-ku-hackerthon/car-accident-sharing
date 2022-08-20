import React from 'react';
import {Image,Text,Flex,Spacer,Center, Heading,Box, HStack, Circle, VStack } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io';
import img1 from './asset/logo_1.png'
import img2 from './asset/logo_2.png' 
import img3 from './asset/logo_3.png' 
import img4 from './asset/logo_4.png' 
function SectionCard({ title, desc, ...rest }) {
    return (
      <Box shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
function InformCard({img,ratio,content}) {
    return (
      <Box m={4} p={1} shadow='md' borderWidth='1px' borderRadius={8} >
        <Flex align='center' justifyContent= "space-between" alignItems = 'center' m={4}>
            <Box>
              <Image  
              w ='40%'
              src={img}
              alt='Company'
              />
              <VStack w='50%'>
                <Text>
                {ratio}
                </Text>
                <Text>
                {content}
                </Text>
              </VStack>
            </Box>
          <div>
          <IoIosArrowForward/>
          </div>
          
        </Flex>
      </Box>  
    )
  }

function ResultScreen(){
    return(
<div>
  <Heading m={4}>
    김열정님의<br/>
    분석결과 입니다
  </Heading>
  <Spacer/>
      <Box m={4} p={1} shadow='md' borderWidth='1px' borderRadius={8} >
        <Flex  justifyContent= "space-between" alignItems = 'center' m={4}>
            <div>
            <Heading as='h4' size='md'>
              과실비율
            </Heading>
            <Text
            textAlign='right'>
            7:3
            </Text>
            <Text>
              으로 분석됩니다
            </Text>
            </div>
            <div>
            <IoIosArrowForward/>
            </div>
          
        </Flex>
      </Box>
      <Spacer/>
      <Box m={4} p={1} shadow='md' borderWidth='1px' borderRadius={8}>
        <Box m ={4}>
          <Heading as='h4' size='md'>
          보험사 분석
          </Heading>
          <InformCard img={img1}
        ratio = "7:3" content = "제가 보았을때는 피해자분의 차량이.."/>
          <InformCard img = {img2}
          ratio = "8:2" content = "영상으로 판독해본 결과 90퍼센트의.."/>
          <InformCard img = {img3}
          ratio = "7:3" content = "제가 보았을때는 피해자분의 차량이.."/>
          <InformCard img = {img4}
          ratio = "7:3" content = "영상으로 판독해본 결과 90퍼센트의.."/>
          <Flex  alignItems = 'right'>
            <Text>
            보험사 통계 보러가기
            </Text>
            <IoIosArrowForward/>
          </Flex>
          
        </Box>
      </Box>
      {/* </SectionCard>  */}
      </div>
    );
}
export default ResultScreen;
