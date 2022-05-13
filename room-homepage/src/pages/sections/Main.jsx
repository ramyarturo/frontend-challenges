
import styled from 'styled-components'
import HeroImage from "../../assets/images/desktop-image-hero-1.jpg"
import Navbar from "../../components/Navbar"

const MainHeroSection = styled.div`
background-image: url(${HeroImage});
grid-area: main;
width: 100%;
height: 500px;
background-size: cover;
background-position: center;
display: grid;
`



const MainSection = () => {
    return <MainHeroSection>
        <Navbar />
    </MainHeroSection>
}


export default MainSection