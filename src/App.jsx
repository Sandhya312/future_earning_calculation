import {Flex} from '@chakra-ui/react'
import Calculator from './components/Calculator'


function App() {

  return (
    <Flex direction = "column" alignItems= "center" minH = "100vh" bg = "#E34731" p = "2rem">
      <Calculator />
    </Flex>
  )
}

export default App
