import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import {NavLink} from "react-router-dom"

const Container = styled.div`
    width:100vw;
    height:100vh;
    // background:
    background-color: #fcf1ed;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300px;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Agreement = styled.span`
    font-size:12px;
    margin:10px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#C29200;
    color:white;
    cursor:pointer;
`

const Register = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <NavLink exact to='/productlist'>
                        <Button>CREATE</Button>
                    </NavLink>
                </Form>
            </Wrapper>
        </Container>
        <Footer/>
        </div>
    )
}

export default Register
