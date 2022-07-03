const Topbar = () => {
    return (
      <div className='flex-1 flex flex-col'>
        <nav className='px-4 flex justify-between bg-white h-16 border-b-2'>
          <ul className='flex items-center'>
            <li className='font-2xl font-bold'>
                🌙&nbsp;&nbsp;
                <p className='inline text-yellow-500'>D</p><p className='inline text-yellow-400'>a</p><p className='inline text-yellow-300'>y</p>
                <p className='inline text-slate-900'>n</p><p className='inline text-slate-800'>i</p><p className='inline text-slate-700'>g</p><p className='inline text-slate-600'>h</p><p className='inline text-slate-500'>t</p>
            </li>
          </ul>
  
          <ul className='flex items-center'>
            <li className='h-10 w-10'>
              <img
                className='h-full w-full rounded-full mx-auto'
                src='https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop'
                alt='profile woman'
              />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default Topbar
  