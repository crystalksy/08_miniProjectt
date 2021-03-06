import { Add, CloseOutlined, Remove } from "@material-ui/icons"
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {NavLink} from "react-router-dom"
import  {gql, useLazyQuery } from "@apollo/client"
import { useEffect } from "react"


const GetCart = gql`
    query MyQuery($id: Int!) {
    Produk(where: {id: {_eq: $id}}) {
      deskripsi_Produk
      gambar
      harga
      id
      id_Kategori
      is_ready
      nama
    }
  }
  `

const Container = styled.div``
const Wrapper = styled.div`
    padding:20px
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props)=>props.type === "filled" && "none"};
    background-color:${(props)=>props.type === "filled" ? "black" : "transparent"};
    color:${(props)=>props.type === "filled" && "white"};
`

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content:space-between:
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;

`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`
const SummaryTitle = styled.h1`
    font-weight:200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
    cursor : pointer;
`

const Cart = (props) => {
    const [GetCartProduct, {data} ]= useLazyQuery (GetCart);
    console.log("detail", props);
    useEffect(() => {
        GetCartProduct({
            variables : {id:props.match.params.id}
        })
        
    }, []);
    console.log("masuk ke detail")
    return (
        <div>
            {data?.Produk.map((elementProduk) => (
                <Container>
                <Announcement/>
                <Navbar/>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <NavLink exact to='/productlist'>
                            <TopButton>CONTINUE YOUR SHOPPING</TopButton>
                        </NavLink>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail> <CloseOutlined fontSize ="large"/>
                                    <Image src={elementProduk.gambar}/>
                                    <Details>
                                        <ProductName><b>Product:</b>{elementProduk.nama}</ProductName>
                                        <ProductID><b>ID:</b>{elementProduk.id_Kategori}</ProductID>
                                        <ProductColor color="black"/>
                                        <ProductSize><b>Size:</b>S</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add/>
                                        <ProductAmount>1</ProductAmount>
                                        <Remove/>
                                    </ProductAmountContainer>
                                    <ProductPrice>{elementProduk.harga}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>{elementProduk.harga}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemPrice>{elementProduk.harga}</SummaryItemPrice>
                            </SummaryItem>
                            <NavLink exact to={'/confirmed/' + elementProduk.id}> 
                             <SummaryButton>ADD TO CART</SummaryButton>
                             </NavLink>
                        </Summary>
                    </Bottom>
                </Wrapper>
                
                <Footer/>
            </Container>
            ))}
        </div>
        
    )
}

export default Cart
