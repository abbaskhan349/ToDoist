import './App.css'
import Layout from './components/Layout'
import Tasks from './components/Tasks'

function App() {

  return (
    <div className='flex justify-content'>
      <Layout>
        <Tasks />
      </Layout>
    </div>
  )
}

export default App
