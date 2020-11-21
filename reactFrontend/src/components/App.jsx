import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import bos from '../assets/bos.jpg'


const GlobalStyle = createGlobalStyle`
  body {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	background-color: #000;
  }
`
export const App = () => {

		return (
			<div>
				<GlobalStyle />
				<StyledH1>CAD App</StyledH1>
				<ImageWrapper>
					<Image src={bos} />
				</ImageWrapper>
			</div>
		)
}

const StyledH1 = styled.h1`
	color: #928e8e;
	text-align: center;
`

const ImageWrapper = styled.div`
	text-align: center;
`

const Image = styled.img`
	width: 360px;
`
