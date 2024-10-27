import { LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className='flex items-center gap-3 p-4 '>
      <img
        src='https://github.com/RaianeBatista.png'
        alt='Profile'
        className='h-10 w-10 rounded-full'
      />

      <div className='flex flex-1 flex-col truncate '>
        <span className=' text-sm font-semibold text-zinc-700'>
          Raiane Batista
        </span>
        <span className='truncate text-sm text-zinc-500'>
          raiane@gmail.com
        </span>
      </div>

      <button type='button' className='ml-auto p-2 hover:bg-zinc-50 rounded-md'>
        <LogOut className='h-5 w-5 text-zinc-500' />
      </button>
    </div>
  );
}
