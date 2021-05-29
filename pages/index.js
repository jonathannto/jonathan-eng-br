import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Jonathan Nascimento - Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div class="hero min-h-screen">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img src="https://pbs.twimg.com/profile_images/1388308127200784387/blQNlISm_400x400.jpg" class="max-w-sm rounded-lg shadow-2xl"/>
            <div>
              <h1 class="mb-5 text-5xl font-bold">
                Bem Vindo(a)!
              </h1>
              <p class="mb-5">
                Meu nome é Jonathan e este é um rascunho de um site que estou construindo para poder deixar meus projetos pessoais, coisas em que estou trabalhando e quaisquer outras informações úteis, ou quase uteis...

              </p>
              <button class="btn btn-primary">Aguardem</button>
            </div>
        </div>
      </div>
      

     
    </div>
  )
}
