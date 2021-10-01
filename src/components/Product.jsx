import {NavLink} from "react-router-dom"
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

import  {ApolloProvider, gql, useQuery } from "@apollo/client"

  const GetTodo = gql`
  query MyQuery {
    Produk {
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



const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color : rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }
`

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition: all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`

const Product = ({item}) => {
  const {data} = useQuery (GetTodo);
    console.log(data);
    return (
        <div>
            <Container>
                        <Circle/>
                        {data?.Produk.map((elementProduk)=>(
                            <NavLink exact to='/cart'>
                                <Icon>
                                    <ShoppingCartOutlined/>
                                </Icon>
                            </NavLink>
                        ))}
                        <Image src={item.img}/>
                        <Info>
                            
                            <NavLink exact to='/product'>
                                <Icon>
                                    <SearchOutlined/>
                                </Icon>
                            </NavLink>

                        </Info>
                        
                    </Container>

        </div>
        
    )
}

export default Product
