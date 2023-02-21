
import styled from 'styled-components'
export const Page = styled.div`
background: white;
width: 100%;
flex-flow: column wrap;
`

export const AsideLeft = styled.aside`
display: flex;
width: 25%;`

export const MainCtn = styled.main`
flex-grow: 1;
background: #efefef;
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 100%;
margin-top: 10vh;
padding: 2rem;
@media screen and (max-width: 720px){
    flex-flow: column wrap;
}
`

export const SectionCtn = styled.section`

display: flex;
flex-flow: row wrap;
justify-content: space-around;
width:80%;
height: 100%;
flex-grow: 1;
background: blue;
@media screen and (max-width: 720px){
    width: 100%;

    
}
`


export const InputSelect = styled.select`
height: 30px;
border-radius: 15px;
`



export const ArticleBox = styled.article`
display: flex;
    flex-flow: column wrap;
    width: 33.5%;
    height: 100%;
    min-width: 375px;
    max-width: 400px;

min-height: 505px;
    max-height: 550px;

    margin: 30px auto;
    background-color: #fffaef;
    box-shadow: rgb(104, 80, 37) -1.95px 1.95px 1.6px;
    border-radius: 25px;
    align-items: center;
    margin: 0px auto;
    padding: 2rem;
    margin: 10px auto;
    img{
        width: 90%;
        max-height: 250px;
        object-fit: cover;

    }
    `

export const AsideRight = styled.aside`
display: flex;
flex-flow: column wrap;
align-content: center;
width: 20%;
max-height: 100%;
padding: auto;
background:rgb(134, 142, 255);
border-radius: 15px;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
-ms-border-radius: 15px;
-o-border-radius: 15px;

@media screen and (max-width: 720px){
    width: 100%;
}
`
export const Label = styled.label`
display: flex;
flex-flow: row wrap;
height: 59px;
background: white;
border: 2px solid gray;
border-radius: 15px;


`

export const SectionTitle = styled.h2`
display: flex;
flex-flow: row wrap;
width: 80%;
justify-content: center;
padding: 10px;
background: white;
border: 2px solid gray;
border-radius: 15px;
margin: 10px auto;
font-size: 2rem;
text-align: center;
`

export const FormContainer = styled.div`
width: 80%;
margin:30px auto;
justify-content: center;
text-align:: center;
align-self: center;
`