import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {NavLink} from "react-router-dom"

const Container = styled.div`
    height : 60px;
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`;


const Left=styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border : none;
    ${mobile({width:"50px"})}
`

const Center = styled.div`
    flex : 1;
    text-align: center;
    `;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`

const Right=styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyCent:"center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>

                    <SearchContainer>
                        <Input placeholder="Search"/>
                     <Search style={{color: 'gray', fontSize:16}}/>
                    </SearchContainer>
                    
                </Left>
                <Center><Logo style={{color:'#C29200'}}>R U B I C C</Logo></Center>
                <Right>
                    <NavLink exact to='/'>
                        <MenuItem style={{color:'#C29200'}}>HOME</MenuItem>
                    </NavLink>
                    <NavLink exact to='/register'> 
                        <MenuItem style={{color:'#C29200'}}>REGISTER</MenuItem>
                    </NavLink>
                    <NavLink exact to='/login'>
                        <MenuItem style={{color:'#C29200'}}>SIGN IN</MenuItem>
                    </NavLink>
                    <NavLink exact to='/cart'>
                        <MenuItem>
                            <Badge badgeContent = {1} color = "primary"> 
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </NavLink>
                   
                </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
// const GetEmail = gql`
//    query MyQuery {
//     Email2(limit: 1, order_by: {id: desc}) {
//       id
//       Email
//     }
//   }
  
// `

//   const DeleteEmail = gql`
//   mutation MyMutation($id: Int!) {
//     delete_Email2_by_pk(id: $id) {
//       id
//       Email
//     }
//   }
//   `
//   const UpdateEmail = gql`
//   mutation MyMutation($id: Int!, $Email: String = "") {
//     update_Email2_by_pk(pk_columns: {id: $id}, _set: {Email: $Email}) {
//       id
//       Email
//     }
//   }
//   `

//   const InsertEmail = gql`
//   mutation MyMutation($object: Email2_insert_input!) {
//     insert_Email2_one(object: $object) {
//       id
//       Email
//     }
//   }
  
//   `