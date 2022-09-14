import { ArrowLeft, ArrowRight } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowLeft />
        </Arrow>
        <Wrapper>
            <Slide bg='fff'>
                <ImgContainer>
                <Image src='https://m.media-amazon.com/images/I/419An0442YL.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DON'T COMPROMISE OF STYLE! GET FALT 30% OFF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>

                </InfoContainer>
            </Slide>
            <Slide bg='fcf1ed'>
                <ImgContainer>
                <Image src='https://m.media-amazon.com/images/I/419An0442YL.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>DON'T COMPROMISE OF STYLE! GET FALT 30% OFF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>

                </InfoContainer>
            </Slide>
            <Slide bg='fbf0f4'>
                <ImgContainer>
                <Image src='https://m.media-amazon.com/images/I/419An0442YL.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DON'T COMPROMISE OF STYLE! GET FALT 30% OFF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>

                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right'>
            <ArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider