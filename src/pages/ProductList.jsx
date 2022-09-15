import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/Newsletter"
import Products from "../components/Products"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterTest = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterTest>Filter Products:</FilterTest> 
                <Select>
                    <Option disabled selected> Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected> Size</Option>
                    <Option>White</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Filter>
            <Filter><FilterTest>Sort Products:</FilterTest> </Filter>
            <Filter> 
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (Low - High)</Option>
                    <Option>Price (High - Low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList

