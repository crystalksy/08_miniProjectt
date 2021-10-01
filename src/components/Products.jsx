import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = (props) => {
    console.log("pops produck=", props)
    return (
        <Container>
            {/* {popularProducts.map(item=>( */}
                <Product/>
            {/* ))} */}
        </Container>
    )
}

export default Products
