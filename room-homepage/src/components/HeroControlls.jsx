import styled from "styled-components"

import ArrowLeft from '../assets/images/icon-angle-left.svg'
import ArrowRight from '../assets/images/icon-angle-right.svg'

const StyledHeroControlls = styled.div`
display: flex;
align-self: flex-end;
justify-self: flex-end;
gap: 40px;
padding: 20px;
background-color: ${({ theme }) => theme.colors.black};
grid-area: main;
cursor: pointer;
@media (min-width: 798px){
    grid-area: description1;
    justify-self: flex-start;
}
`


const HeroControlls = () => {

    return <StyledHeroControlls>
        <img src={ArrowLeft} />
        <img src={ArrowRight} />
    </StyledHeroControlls>
}

export default HeroControlls