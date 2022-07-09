import type { NextPage } from 'next'
import Topbar from '../components/Topbar'

const SignIn: NextPage = () => {
  return (
    <div>
      <Topbar />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-[10%] bg-slate-200 text-left rounded-md z-0'>
        <p className='font-bold text-2xl'>로그인</p>
        <p>아이디</p>
        <input className='rounded px-2' size={21} />
        <p>비밀번호</p>
        <input className='rounded px-2' type='password' /> <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white my-2 py-1 px-4 rounded'>
          로그인
        </button>
      </div>
    </div>
  )
}

export default SignIn
