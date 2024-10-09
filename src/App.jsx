import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContainer from './components/Main'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <DataProvider>
      <div className='flex lg:flex-row flex-col w-[100vw] lg:bg-gray-100 md:bg-gray-100 bg-white overflow-x-hidden'>
        <Sidebar />
        <MainContainer />
      </div>
    </DataProvider>
  )
}

export default App
