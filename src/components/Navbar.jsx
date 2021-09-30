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
                <Center><Logo style={{color:'#A1593C'}}>RUBICC</Logo></Center>
                <Right>
                    <NavLink exact to='/register'> 
                        <MenuItem style={{color:'#A1593C'}}>REGISTER</MenuItem>
                    </NavLink>
                    <NavLink exact to='/login'>
                        <MenuItem style={{color:'#A1593C'}}>SIGN IN</MenuItem>
                    </NavLink>
                    <NavLink exact to='/cart'>
                        <MenuItem>
                            <Badge badgeContent = {4} color = "primary"> 
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
