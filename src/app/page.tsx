import { ImStatsBars,  } from 'react-icons/im'


export default function Home() {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img width={40} height={40} alt='Imagem de perfil' className='rounded-full overflow-hidden' src='https://www.github.com/athospugliesedev.png' />

        <small>Oi, Athos!</small>
      </div>
        <nav className='flex items-center gap-2'>
          <div>
            <ImStatsBars className='text-2xl' />
          </div>
          <div>
            <button className='btn btn-danger'>Sign Out</button>
          </div>
        </nav>
    </header>
  );
}