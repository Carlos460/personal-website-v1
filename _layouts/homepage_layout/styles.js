import styled from 'styled-components'
export const Header = styled.section`
  padding: 0rem 15% 0rem;
  min-height: 100vh;
  background-color: var(--dark-secondary);
  background-image: url(/img/fall.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1000px){
    justify-content: flex-start;
    flex-direction: column;
  }
`
export const HeaderContent = styled.div`
  width: 40%;
  height: 30rem;
  margin: auto 0rem;
  @media (max-width: 1000px){
    width: 100%;
    margin: auto;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  color: white;
  & > h1 {
    font-size: 2.5rem;
    margin: 1rem 0rem;
  }
  @media (max-width: 1000px){
    text-align: center;
  }
`
export const ButtonContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  @media (max-width: 1000px){
    justify-content: center;
  }
`
export const HeaderButton = styled.button`
    background-color: var(--orange);
    text-align: center;
    color: white;
    margin: 0.5rem 0rem;
    width: 10rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.1rem;
    outline: none;
    font-weight: bold;
    transition: box-shadow 0.2s ease;
  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    /* box-shadow: 0px 0px 10px 0.1px var(--orange); */
  }
  &:active{
    box-shadow: none;
  }
`