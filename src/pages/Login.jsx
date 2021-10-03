import React from 'react'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import {NavLink} from "react-router-dom"

const Container = styled.div`
    width:100vw;
    height:100vh;
    // background:
    background-color: #fbf0f4;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    padding:20px;
    width:25%;
    background-color:white;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300px;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px ;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#C29200;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`

const Link = styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;

`

const Login = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Container>       
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
                    <NavLink exact to='/register'>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </NavLink>
                </Form>
            </Wrapper>
        </Container>
        <Footer/>
        </div>
       
    )
}

export default Login
