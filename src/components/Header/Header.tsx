import { useEffect } from 'react'
import { Menu } from './Menu/Menu'
import { ListStyle, HeaderStyle } from './style'

export function Header() {
	const isMobile = window.screen.width
	return (
		<HeaderStyle data-aos='slide-down' data-aos-duration='1500'>
			{isMobile < 1023 ? (
				<Menu />
			) : (
				<div className='menu-desk'>
					<nav>
						<ul>
							<li>
								<a href=''>Sobre mim</a>
							</li>
							<li>
								<a href=''>Skills</a>
							</li>
							<li>
								<a href=''>Projetos</a>
							</li>
							<li>
								<a href=''>Contato</a>
							</li>
						</ul>
					</nav>
				</div>
			)}
			<a
				href='file:///C:/Users/Matheus/Desktop/Meu%20CV/C%C3%B3pia/Meu%20CV.pdf'
				className='link-curriculo'
			>
				Currículo
			</a>
		</HeaderStyle>
	)
}
