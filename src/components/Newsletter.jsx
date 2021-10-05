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
`
// const InsertEmail = gql`
//   mutation MyMutation($object: Email2_insert_input!) {
//     insert_Email2_one(object: $object) {
//       id
//       Email
//     }
//   }
//   `
//   const initialData = {    //ini buat message
//     email: "",
// }
//   const [insertEmail, {loading:loadingInsert}] = useMutation(InsertEmail, {
//     refetchQueries: [GetEmail]
//   })

//   const handleInput = (e) => {
//     console.log("masuk handle input")
//    const email = e.target.email
//    const value = e.target.value;
//    setUser({
//      ...user,
//      [email]: value,
//    });
// };
const InsertEmail = gql`
mutation MyMutation($email: String!) {
    insert_Email(objects: {email: $email}) {
      affected_rows
    }
  }
`

// const GetEmail = gql`
//    query MyQuery {
//     Email2(limit: 1, order_by: {id: desc}) {
//       id
//       Email
//     }
//   }
// `
const GetEmail = gql`
mutation MyMutation($Email: String!) {
    insert_Email2(objects: {Email: $Email}) {
      affected_rows
    }
  }
`
const NewsLetter = () => {
  const  [email,setEmail] = useState ("")

    const [insertEmail, {loading:loadingInsert}] = useMutation(InsertEmail, {
        refetchQueries: [GetEmail]
      })
    function handleInput(e){
        console.log("handleInput",e.target.value)

   
        setEmail (e.target.value) //akses 89
        // insertEmail({variables : {
        //     object : {
        //       email: user.email,
        //    }
        //   }});
    }

    function handleSubmit(){
        console.log("handleSubmit",email) 
        insertEmail({variables : {
         object : {
        email: email,
      }
        }});
    }
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products</Desc>
            <InputContainer>
                <Input placeholder="Your email"  onChange={handleInput} value={email}/>
                <Button onClick={handleSubmit}>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
