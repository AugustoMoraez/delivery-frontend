import styled from "styled-components"

export const CartContainer = styled.div`
    height:500px;
    background-color:rgb(249, 249, 249);
    border:5px solid #fff;
    margin-top:100px;
    position:relative;
    padding:10px;

    @media(max-width:500px){
        height:calc(100vh - 892px);
        width: 100vw;
        margin: 0;
        padding: 0;
    }
    
`;

export const CartBox = styled.div`
    margin: auto;
    color: #333;
    background-color:#fff ;
    width:100%;
    max-width:900px;
    height: 450px;
    border-radius: 10px ;
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    @media(max-width:500px){
        border: none;
        border-radius:0;
    
        height: calc(100vh - 200px);
        justify-content:space-evenly;

        h2{
            display: none;
        }
    }
    h2{
        font-family:'Fasthand';
        color: #333;
        font-size:50px;
        font-weight:200;
        text-align:center;
    }
   
    .itens-display{
        width:100%;
        max-width:900px;
        height: 300px;
        overflow-x:hidden;
           
    }
    .itens-display::-webkit-scrollbar {
        width: 12px;             
    }

    .itens-display::-webkit-scrollbar-track{
        background-color:none ;
    }
    .itens-display::-webkit-scrollbar-thumb{
        background-color:#E50034 ;
        border-radius:10px;
    }




    .actions{

        span{
            color: #333;
    
        }
        button{
            background-color: #E50034;
            width: 100%;
            padding: 5px;
            margin-bottom:10px;
            border-radius:5px;
            cursor:pointer;
        }
        button:hover{
            background-color: #CC0029;
            
        }
       
    }

      

`;
export const VoidCart = styled.div`
    
    h4{
        color: black;
        opacity:0.2;
        font-size:40px ;
        text-align:center;
    }
   
`;