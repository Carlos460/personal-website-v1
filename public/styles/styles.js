import styled from 'styled-components'
export const Header = styled.section`
  padding-top: 0rem;
  min-height: 100vh;
  background-image: url(/img/mountain.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`
export const HeaderContent = styled.div`
  width: 60rem;
  height: 30rem;
  margin: auto;
`
export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  & > h1 {
    font-size: 3rem;
    margin: 1rem 0rem;
  }
`
export const ButtonContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
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

export const ProjectShowcase = styled.section`
  width: 100%;
  padding: 5rem 0rem;
  background-color: white;
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