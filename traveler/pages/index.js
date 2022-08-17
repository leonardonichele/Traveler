export default function Home() {
  return (
    <div class="min-h-screen bg-white flex">
      <div class="hidden lg:block relative w-0 flex-1 bg-gray-900">
        <div class="flex h-full justify-center items-center">
          <img class="w-auto h-auto" src="./aside.jpg" alt="Aside background image"></img>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img class="lg:hidden w-auto h-auto" src="./aside.jpg" alt="Aside background image"></img>
            <h2 class="mt-6 text-3x1 font-semibold text-blue-700">Acesso ao sistema</h2>
            <p class="mt-2 text-sm text-gray-600 max-w">Novo por aqui? <a href="#" class="font-medium text-blue-700">Registre-se</a></p>
          </div>
          <div class="mt-6">
            <form action="">
              <div class="mb-4">
                <input type="text" placeholder="E-mail" class="apperance-none black w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"></input>
              </div>
              <div class="mb-4">
                <input type="password" placeholder="Senha" class="apperance-none black w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"></input>
              </div>
              <div class="mb-4">
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-blue-700 hover:bg-blue-900 font-semibold rounded shadow">Entrar</button>
              </div>
              <div class="mb-4">
                <p>
                  <a href="#" class="text-blue-700">Esqueceu a senha?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}