import './App.css'
import { Faq } from './Components/Faq'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-400 flex justify-center items-center'>
      <div className='max-w-2xl bg-white rounded-2xl shadow-2xl p-10'>
        <h1 className='text-2xl font-bold text-center text-indigo-800 mb-7  ' >Questions and Answers about Login</h1>
        <Faq/>
      </div>
    </div>
  )
}

export default App
