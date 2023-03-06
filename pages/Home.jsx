import { Button,extendBaseTheme } from '@chakra-ui/react'
import { View } from 'react-native'


const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function Home() {
  return (
    <View>
        <Button colorScheme='gray'>Start</Button>
    </View>
  )
}

export default Home;