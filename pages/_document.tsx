import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap'
				/>

				<meta name='theme-color' content='#cd3a42' />
				<meta name='msapplication-navbutton-color' content='#cd3a42' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#cd3a42' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
