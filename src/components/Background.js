import React from "react"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`

const Background = ({ children, image }) => {
  const { file } = useStaticQuery(query)
  const gatsbyImage = getImage(image || file)
  const bgImage = convertToBgImage(gatsbyImage)

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        {...bgImage}
        className="bcg"
        preserveStackingContext
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const fadeIn = keyframes`
      from {
        background-color:rgba(0,0,0,0.8);
      }
      to {
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.section`
  .bcg {
    min-height: 100vh;
    margin-top: -8rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`

export default Background
