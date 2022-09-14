import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    
`

const Left = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``


const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex:1;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PAMPA</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil et necessitatibus provident exercitationem reprehenderit, 
            nemo qui, maxime modi, quidem incidunt obcaecati adipisci deleniti unde blanditiis. Expedita in maxime quae?.</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 128 Moonwalk Drive , South London LX12 0DD
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +0871 000 56 00
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@pampa.cod
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer
