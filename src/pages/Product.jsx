import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1
`

const Image = styled.img`
    width: 80%;
    height: 70vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    display: fles;
    justify-content: space-between;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin: 5px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
            <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
        </ImgContainer>
        <InfoContainer>
            <Title>Boys T-Shirt</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea asperiores earum voluptates odit ipsam, sapiente cupiditate magnam doloremque architecto temporibus, ullam cum, dignissimos porro eligendi. Odit culpa dolorum corrupti.</Desc>
            <Price>£15.99</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black' />
                    <FilterColor color='blue' />
                    <FilterColor color='red' />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Add />
                    <Amount>1</Amount>
                    <Remove />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />  
    </Container>
  )
}

export default Product
