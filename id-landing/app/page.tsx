import Image from 'next/image'

export default function Home() {
  return (
    <body>
      <header className='flex flex-row gap-5 content-center items-center w-full'>
        <img src="infinity-digital-logo.png" alt='logo' className='w-[100px] h-auto'></img>
        <nav >
          <ul className='flex flex-row gap-10'>
            <li>
              <a href='/services'>Servicios</a>
            </li>
            <li>
              <a href='/contact'>Contacto</a>
            </li>
            <li>
              <a href='/about'>acerca de nosotros</a>
            </li>
          </ul>
        </nav>
      </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Start with Infinity Digital</h1>
    </main>
    </body>
  )
}
