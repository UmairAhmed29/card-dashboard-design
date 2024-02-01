import { Heading, Button, Text, Flex, Container } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
import { Avatar, AvatarGroup } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react';
import { EmailIcon, StarIcon, CalendarIcon, CheckIcon } from '@chakra-ui/icons'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Dashboard() {
  const percentage = 66;
  
  return (
    <Container>
      <Heading>Samurai Employee Component</Heading>
      <SimpleGrid  width ="800px" spacing={5} columns={2} minChildWith="100px" >
        <Card backgroundColor="rgba(225, 225, 225, 0.9)" height="270px">
          <CardHeader>
            <Heading size='md'> Task Summary</Heading>
          </CardHeader>
          <CardBody>
          
              <Flex align="center" mb="4">
                <Text fontWeight="bold" mr="2">Task Completed 6/10</Text>
                <CircularProgress size="70px" value={percentage} color='green.400' ml={2}>
                  <CircularProgressLabel><CheckIcon /></CircularProgressLabel>
                </CircularProgress>
              
            </Flex>
          
 
          
          
            <Flex align="left" direction="column">
  <Text mb="2">Team Members</Text>
  <AvatarGroup size='md' max={2}>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </AvatarGroup>

  <Flex direction="row" ml="auto">
    <EmailIcon mr="2" />
    <StarIcon />
</Flex>

            </Flex>
          <Flex/>
          
          </CardBody>
        </Card >
        <Card backgroundColor="rgba(225, 225, 225, 0.9)"height="270px">
          <CardHeader>
            <Heading size='md' > Celebration Events</Heading>
          </CardHeader>
          <CardBody>
          <Flex align="center">
      <Flex mr="2">
        <CalendarIcon />
      </Flex>
      <Flex direction="column">
        <Text fontWeight="bold">1st Jan</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, nemo!</Text>
      </Flex>
    </Flex>
  
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
  
</SimpleGrid>
      


    </Container>
  )
}
