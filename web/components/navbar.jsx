import { Navbar, Button, Link, Text, useTheme } from '@nextui-org/react'

export default function () {
  const { isDark } = useTheme()

  return (
    <Navbar
      shouldHideOnScroll
      isBordered={isDark}
      variant='sticky'
    >
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Thesis
        </Text>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' variant='underline'>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
            Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
              Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
