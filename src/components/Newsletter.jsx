import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useEffect, useState } from 'react'

export default function DetailBaju(props) {
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
   const GetEmail = gql`
   query MyQuery {
      Email(limit: 1, order_by: {id: desc}) {
        id
        email
      }
    }
   `
   const GetDetail = gql`
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
  const DeleteEmail = gql`
  mutation MyMutation($email: String!) {
      delete_Email_by_pk(email: $email) {
        email
        id
      }
    }
  `
  const UpdateEmail = gql`
  mutation MyMutation($email: String !, $email1: String = "") {
      update_Email_by_pk(pk_columns: {email: $email}, _set: {email: $email1}) {
        id
        email
      }
    }
  `
  const InsertEmail = gql`
  mutation MyMutation($object: Email_insert_input !) {
      insert_Email_one(object: $object) {
        id
        email
      }
    }
  `
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
  // const Product = (props) => {
      const initialData = {    //ini buat message
          email: "",
         
      }
        const [getDetail, { data, loading, error }] = useLazyQuery(GetDetail);
        console.log("detail baju props", data);
      
        const { data: dataEmail, loading:loadingEmail, error:errorEmail } = useQuery(GetMessage);
        console.log("detail baju props", data);
        const [user, setUser] = useState(initialData);
        const [updateEmail, { loading:loadingUpdate}] = useMutation(UpdateEmail);
        const [deleteEmail, {loading : loadingDelete}] = useMutation(DeleteEmail,{
          refetchQueries: [GetEmail]
        });
        const [insertEmail, {loading:loadingInsert}] = useMutation(InsertEmail, {
          refetchQueries: [GetEmail]
        })
       
      
        useEffect (()=>{
          getDetail({variables : {id: props.match.params.id}});
          console.log("saya masuk ke get detail shirt");
          const onSubmitList = (e) => {
              console.log("masuk submit")
              e.preventDefault();
              insertEmail({variables : {
                object : {
                  email: user.emaill,
               }
              }});
              setUser(initialData)
            };
         
            // untuk masukkan input
            const handleInput = (e) => {
              console.log("masuk handle input")
             const email = e.target.email;
             setUser({
               ...user,
               [email]: value,
             });
         };
         
         const onDeleteItem =  (idx) => {
         console.log("idx= detele item", idx.target.value )
          deleteEmail({variables: {
             id: idx.target.value
           }})
  },
  
  // const NewsLetter = () => {
      return (
          <Container>
              <Title>Newsletter</Title>
              <Desc>Get timely updates from your favourite products</Desc>
              <InputContainer>
                  <Input placeholder="Your email"  onChange={handleInput} value={user.email}/>
                  <Button>
                      <Send onSubmit={onSubmitList}/>
                  </Button>
              </InputContainer>
              {dataEmail?.Email.map((show) => (
                              <li className='komen-list card-kontent mb-4'>
                                
                                    <div className="">
                                        <h5 style={{paddingLeft: "20px"}} className="card-titles ml-4 mt-3">{show.email}</h5>
                                        <button 
                                        type="submit" style={{background: "#FFDAC1"}} className="btn"
                                        onClick={onDeleteItem} value={show.id} className="del">Delete</button>
                                    </div>
                            </li>
                            
  
                          ))}
          </Container>
      )
  }




