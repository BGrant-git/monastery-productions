import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Navbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	color: white;
`

const Buttons = styled.a`
	padding: 12px;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		background-color: white;
		color: black;
		transition: 0.1s ease-in;
	}
`

const Logo = styled.a`
	font-size: 40px;
	padding: 0 20px;
	cursor: pointer;
`

const Header = () => {
	return (
		<Navbar>
			<Link href="/shorts">
				<Buttons>Shorts</Buttons>
			</Link>
			<Link href="/music_videos">
				<Buttons>Music Videos</Buttons>
			</Link>
			<Link href="/">
				<Logo>MONESTARY</Logo>
			</Link>
			<Link href="/contact">
				<Buttons>Contact Us</Buttons>
			</Link>
			<Link href="/about">
				<Buttons>About Us</Buttons>
			</Link>
		</Navbar>
	)
}

export default Header
