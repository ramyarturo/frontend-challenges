import styled from 'styled-components'
import Image1 from '../../assets/images/image-about-dark.jpg'
import Image2 from '../../assets/images/image-about-light.jpg'

const SectionWrapper = styled.section`
      grid-area: ${props => props.gridArea};
`
const Image = styled.img`
   width: 100%;
   height: 100%;
`
const ImageSection = ({ light = false }) => {

    return <SectionWrapper gridArea={light ? "image2" : "image1"}>
        <Image src={light ? Image2 : Image1} />
    </SectionWrapper>
}

export default ImageSection