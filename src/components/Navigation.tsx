import { ImStatsBars } from 'react-icons/im';

export default function Navigation() {
  return (

    <header className='container max-w-2xl px-6 py-6 mx-auto'>
    <div className='flex items-center justify-between'>

   
    <div className='flex items-center gap-2'>
      <img  alt='Imagem de perfil' className='w-[40px] h-[40px] rounded-full overflow-hidden' src='https://www.github.com/athospugliesedev.png' />

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
        </div>
    </header>
  );
}