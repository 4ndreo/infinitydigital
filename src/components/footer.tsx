const Footer = () => {
	return (
		<footer className="text-white body-font bg-black footer">
			<div className="container py-8 px-10 flex items-center sm:flex-row flex-col gap-10 md:gap-0 m-auto">
				<span
					className={
						"bg-[url('/img/logos/white-infinity-digital-logo.svg')] bg-no-repeat bg-center md:bg-left bg-contain indent-[-9999px] whitespace-nowrap w-full md:w-1/3 h-4"
					}
				>
					Infinity Digital
				</span>

				<p className="w-full md:w-1/3 text-sm text-center ">
					© {new Date().getFullYear()} Infinity Digital <span className="hidden xl:inline-block">—</span>{" "}
					<span className="block md:inline-block">Todos los derechos reservados</span>
				</p>

				<div className="w-full md:w-1/3 justify-center flex-col-reverse md:flex-row gap-3">
					<div className="flex justify-around py-5 md:justify-end md:gap-10">
						{/* Facebook */}
						<a href="https://www.facebook.com/tech.infinitydigital" target="_blank" rel="noreferrer">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5 transition duration-200 hover:scale-110"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>

						{/* Twitter */}
						{/* <a href="">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5 transition duration-200 hover:scale-110"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a> */}

						{/* Instagram */}
						<a
							href="https://www.instagram.com/infinitydigital.tech?igsh=MXJheWZtbGc1NnV0cQ%3D%3D&utm_source=qr"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5 transition duration-200 hover:scale-110"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>

						{/* Linkedin */}
						<a
							href="https://www.linkedin.com/company/infinitydigital-tech"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5 transition duration-200 hover:scale-110"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
