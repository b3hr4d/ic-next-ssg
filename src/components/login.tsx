import { useAuth } from "@ic-reactor/react"

const Login: React.FC = () => {
  const {
    login,
    logout,
    loginError,
    loginLoading,
    identity,
    authenticating,
    authenticated,
  } = useAuth()

  const userIdentifier = identity?.getPrincipal()

  return (
    <div className="flex-auto flex justify-end items-center">
      <div className="mx-2">
        {loginError
          ? loginError
          : userIdentifier
          ? userIdentifier.isAnonymous()
            ? userIdentifier.toString()
            : userIdentifier.toText().substring(0, 10) + "..."
          : "No user"}
      </div>
      <div>
        <button
          className="bg-gray-800 text-white px-2 py-1 rounded-lg"
          onClick={() => {
            if (authenticated) {
              logout()
            } else {
              login()
            }
          }}
          disabled={authenticating || loginLoading}
        >
          {authenticating
            ? "Authenticating..."
            : loginLoading
            ? "Loading..."
            : authenticated
            ? "Logout"
            : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Login
