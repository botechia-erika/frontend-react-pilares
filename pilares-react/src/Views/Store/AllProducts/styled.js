import React from 'react';
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

export const ArticleBox = styled.article`
display: flex;
    flex-flow: column wrap;
    width: 33.5%;
    height: 100%;
    min-width: 375px;
    max-width: 400px;
    min-height: 450px;
    max-height: 550px;
    margin: 30px auto;
    background-color: #fffaef;
    box-shadow: rgb(104, 80, 37) -1.95px 1.95px 1.6px;
    border-radius: 25px;
    align-items: center;
    margin: 0px auto;
    padding: 2rem;
    margin: 60px auto;
    img{
        width: 90%;
    }
    `

export const AsideRight = styled.aside`
display: flex;
flex-flow: column wrap;

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
export const FooterCtn = styled.footer`
display: flex;
width: 100%;
height: 85px;
justify-content: space-around;
align-items: center;
align-self: center;
border-bottom: 1px solid #fff;
box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
top: calc(100vh - 90px);
left: 0;
position: fixed;
background: rgb(18, 254, 108);
font-weight: bolder;
font-size: 1.4rem;
border-left: 4px solid rgb(6, 43, 0);
border-radius: 15px;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
-ms-border-radius: 15px;
-o-border-radius: 15px;`

export const NavList = styled.ul`
display: flex;
width: 100%;
flex-flow: row wrap;

list-style-type: none;
justify-content: space-around;
`

export const Label = styled.div`
display: flex;
height: 59px;
padding: 10px;
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
export const NavButton = styled.button`
width: 120px;
height: 40px;
background: navy;
color: white;
`
export const FormContainer = styled.form`
width: 80%;
margin:30px auto;

`