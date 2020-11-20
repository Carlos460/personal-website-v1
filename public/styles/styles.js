import styled from 'styled-components'
export const Header = styled.section`
  padding-top: 0rem;
  min-height: 100vh;
  background-color: var(--dark-secondary);
  /* background-image: url(/img/water.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px){
    flex-direction: column;
  }
`
export const HeaderContent = styled.div`
  width: 40%;
  height: 30rem;
  margin: auto;
  padding: 1rem;
  @media (max-width: 1000px){
    width: 100%;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  color: white;
  & > h1 {
    font-size: 2rem;
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
  height: 4rem;
  width: 12rem;
  font-size: 1rem;
  outline: none;
  border: solid 2px #fff;
  background: transparent;
  color: #fff !important;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    border: solid 2px transparent;
    background: #fff;
    color: #1f1f1f !important;
  }
`
export const ProjectShowcaseContainer = styled.div`
  background-image: url(/img/water.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  height: 35rem;
  width: 25rem;
  margin: auto;
  @media (max-width: 1000px){
    display: none;
  }
`

export const Portfolio = styled.section`
  width: 100%;
  padding: 5rem 0rem;
  background-color: var(--dark-secondary);
`
export const ProjectShowcaseTitle = styled.h1`
  text-align: center;
  color: black;
  margin: 3rem 0rem;
`
export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`