import styled from "styled-components"
import HeroControlls from "../components/HeroControlls"
import DescriptionSection from "./sections/Description"
import ImageSection from "./sections/Image"
import MainSection from "./sections/Main"

const MainWrapper = styled.main`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, max-content);
  grid-template-areas: "main"
             "description1"
             "image1"
             "description2"
             "image2";
  @media (min-width: 798px) {
      grid-template-columns: repeat(7, 1fr);
      grid-template-areas:
      "main main main main description1 description1 description1"
      "main main main main description1 description1 description1"
      "main main main main description1 description1 description1"
      "image1 image1 description2 description2 description2 image2 image2"
      "image1 image1 description2 description2 description2 image2 image2";
  }            
`

const HomePage = () => {
    return <MainWrapper>
        <MainSection />
        <DescriptionSection />
        <ImageSection />
        <DescriptionSection description2 />
        <ImageSection light />
        <HeroControlls />
    </MainWrapper>
}


export default HomePage