import { useSession } from 'next-auth/react'

export const withSession = (Component) => (props) => {
  const { data: session } = useSession()

  return <Component {...props} session={session} />
}
