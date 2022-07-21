import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"

export default function signin({ providers }) {
  return (
    <>
    <Header/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="flex items-center justify-center flex-col">
          <img className="h-64 w-64 object-contain" src="http://localhost:3000/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Focw&w=1920&q=75" alt="" />
          <button className="border-2 p-3 bg-gray-400" onClick={() => signIn(provider.id,{callbackUrl:"/"})}>
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