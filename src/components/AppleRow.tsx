import styled from 'styled-components'
import {Box} from '@mui/material'

const BoxHeaderStyles = "uk-card-header"
const BoxBodyStyles = "uk-grid-small uk-child-width-expands uk-text-center uk-card-body"
const emissionsPerBlock = 10

const GlowingBox = styled(Box)`
  box-shadow: rgb(243 141 186 / 45%) 0px 0px 12px;  
  margin-bottom: 15px;
  border-radius: 24px;
`



const GlowingBoxClasses = "uk-flex uk-margin-bottom"
const h1Styles = "uk-heading-divider"

const BoxHeader = styled.div`
margin-left: 10px;
margin-bottom: 5pxpx;
  `
  
  // Holds the 4 by 4 boxes
  // Margin 5 px on all sides
const BoxBody = styled(Box)`
margin: 5px 5px 5px 5px;


`
const SmallBox = styled(Box)`
  background: #C4C4C4;
`

const SmallBoxStyles = "uk-card uk-card-default uk-card-body"

 
const figmaStyles = `
position: absolute;
width: 929px;
height: 335px;
background: #C4C4C4;
box-shadow: -55px 0px 22px rgba(0, 0, 0, 0.01), -31px 0px 19px rgba(0, 0, 0, 0.05), -14px 0px 14px rgba(0, 0, 0, 0.09), -3px 0px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);`


const AppleRow = () => {
  return (
    <GlowingBox className={GlowingBoxClasses} uk-grid>
      <BoxHeader className={BoxHeaderStyles}>
      <h1 className="uk-heading-divider">ApplePye</h1>
      </BoxHeader>
      
      <BoxBody className={BoxBodyStyles} uk-grid>
        {/* <div className={figmaStyles}>1</div> */}
        <div className={figmaStyles}>1</div>
      
      <div>
        <BoxHeader>
        ***********1***********
          HEADER</BoxHeader>
        <SmallBox className={SmallBoxStyles}>
          ***********1***********
          Center this content
        </SmallBox>
      </div>
      <div>
        <BoxHeader>
          ***********2***********
          HEADER
        </BoxHeader>
        <SmallBox>
        ***********2***********
          Center this content
        </SmallBox>
      </div>
      <div>
        <BoxHeader>
        ***********3***********
        HEADER
        </BoxHeader>
        <SmallBox>
        ***********3***********
          Center this content
        </SmallBox>
      </div>
      <div>
        <BoxHeader>
          ***********4***********
          HEADER
</BoxHeader>
        <SmallBox>
        ***********4***********
          Center this content
        </SmallBox>
      </div>
      
      </BoxBody>
      
    
    </GlowingBox>
  );
}

export default AppleRow;