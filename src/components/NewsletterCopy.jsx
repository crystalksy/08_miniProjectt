import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useEffect, useState } from 'react'

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({width:"80%"})}
`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:#C29200;
    color:white;
    cursor : pointer;
`
const InsertEmail = gql`
mutation MyMutation($email: String!) {
    insert_email3(objects: {email: $email}) {
      affected_rows
      returning {
        email
        id
      }
    }
  }
`
const GetEmail = gql`
   query MyQuery {
    Email3(limit: 1, order_by: {id: desc}) {
      id
      Email
    }
  }
`
const ShowEmail = gql`
  query MyQuery($id: Int !) {
  email3(where: {id: {_eq: $id}}) {
    email
    id
  }
}
`
const NewsLetter = (props) => {
    const [getDetailShirt, { data, loading, error }] = useLazyQuery(ShowEmail);
    console.log("detail baju props", data);
    const [email,setEmail] = useState ("")
    const [insertEmail, {data:dataEmail}] = useMutation(InsertEmail, {
        refetchQueries: [GetEmail]
      })
      console.log("dataEmail",dataEmail)
       function handleInput(e){
        console.log("handleInput",e.target.value)
        setEmail (e.target.value) //akses 89
    }
      function handleSubmit(){
        console.log("handleSubmit",email) 
        insertEmail({variables : {
        email: email,
        }});
      }
 useEffect (()=>{
    getDetailShirt({variables : {id: props.match.params.id}});
    console.log("saya masuk ke get detail shirt");
  }, [])
    return (
        <Container>
            <Title>NewsletterCopy</Title>
            <Desc>Get timely updates from your favourite products</Desc>
            <InputContainer>
                <Input placeholder="Your email" onChange={handleInput} value={email}/>
                <Button onClick={handleSubmit}>
                    <Send />
                </Button>
            </InputContainer>
              {/* {dataEmail?.Email3.map((show) => (
                              <li className='komen-list card-kontent mb-4'>
                                    <div className="">
                                        <h5 style={{paddingLeft: "20px"}} className="card-titles ml-4 mt-3">{show.Email}</h5>
                                        <button 
                                        type="submit" style={{background: "#FFDAC1"}} className="btn"
                                          className="del">Delete</button>
                                    </div>
                            </li>
                          ))} */}
        </Container>
      );
}

export default NewsLetter
