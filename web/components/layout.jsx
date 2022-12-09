import Box from './box'
import Navbar from './navbar'

export default function Layout ({ children }) {
  return (
    <Box
      css={{ maxW: '100%' }}
    >
      <Navbar />

      {children}
    </Box>
  )
}
