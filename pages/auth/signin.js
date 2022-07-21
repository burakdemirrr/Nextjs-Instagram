import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function signin({ providers }) {
  return (
    <>
    <Header/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id,{callbackUrl:"/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}