import { useState } from 'react'
import useUser from '../lib/useUser'
import Form from '../components/Form'
import fetchJson from '../lib/fetchJson'

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/profile-sg',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
    }

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <div className="login">
      <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
    </div>
  )
}

export default Login
