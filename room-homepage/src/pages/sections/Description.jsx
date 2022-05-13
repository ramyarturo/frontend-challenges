import styled from 'styled-components'
import Arrow from '../../assets/images/icon-arrow.svg'
import RenderIf from '../../components/RenderIf'


const SectionWrapper = styled.section`
  grid-area: ${props => props.gridArea};
  margin: 40px 20px;
`
const Title = styled.h2`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.black};
`
const Paragraph = styled.p`
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.darkGray};
`
const ShopBtnWrapper = styled.div`
letter-spacing: 1.3em;
font-weight: 600;
text-transform: uppercase;
margin: 40px 0;
`
const ImgArrow = styled.img`

`
const DescriptionSection = ({ description2 = false }) => {
    const gridArea = description2 ? "description2" : "description1"
    const info = {
        title: {
            description1: "Discover innovative ways to decorate",
            description2: "About our furniture"
        },
        paragraph: {
            description1: ` We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.
        `,
            description2: `Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
            `
        }
    }
    return <SectionWrapper gridArea={gridArea}>
        <Title>  {info.title[gridArea]} </Title>
        <Paragraph> {info.paragraph[gridArea]} </Paragraph>
        <RenderIf render={!description2}>
            <ShopBtnWrapper>
                Shop Now
                <ImgArrow src={Arrow} />
            </ShopBtnWrapper>
        </RenderIf>
    </SectionWrapper>
}

export default DescriptionSection