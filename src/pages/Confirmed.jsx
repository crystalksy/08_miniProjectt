import styled from "styled-components"
import {NavLink} from "react-router-dom"
import  {gql, useLazyQuery } from "@apollo/client"
import { useEffect } from "react"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const GetProduct = gql`
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

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;

`
const Wrapper = styled.div`
    height: 100%;
    display:flex;

`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height:100vh;
    background-color: #${props =>props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height:100%;
`

const Image = styled.img`
    height:80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`

const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = (props) => {
       const [GetConfirmed, {data} ]= useLazyQuery (GetProduct);
    console.log("detail", props);
    useEffect(() => {
        GetConfirmed({
            variables : {id:props.match.params.id}
        })
        
    }, []);
    console.log("masuk ke detail")
    return (
        <div>
         <Announcement/>  
            <Navbar/>
          {data?.Produk.map((elementProduk) => (
           
            <Container> 
            
                    <Wrapper>
                       
                            <Slide>
                                <ImgContainer>
                                    <Image src={elementProduk.gambar}/>
                                </ImgContainer>
                                    <InfoContainer>
                                        <Title>PURCHASE CONFIRMED!</Title>
                                        <Desc>{elementProduk.nama}</Desc>
                                        <NavLink exact to='/'> 
                                            <Button>HOME</Button>
                                        </NavLink>

                                    </InfoContainer>
                            </Slide>
                            
                    </Wrapper>
                   
                </Container> 
                 
          ))}  
                <Footer/>
                </div>
          
          
    )
}

export default Slider
