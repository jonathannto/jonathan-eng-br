import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-base-300">
     
          <Head>
            <title>Jonathan Nascimento - Site</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div class="flex-1 px-2 mx-2 lg:flex-none">
              <span class="text-lg font-bold">
              Jonathan Nascimento
                        </span>
            </div>
            <div class="justify-center flex-1 hidden px-2 mx-2 lg:flex">
              <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">
                  Home
                </a>
                
              </div>
            </div>
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> 
                    </svg>
              </button>
            </div>
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> 
                    </svg>
              </button>
            </div>
          </div>

          <div className="hero min-h-screen fonte-branca  ">
            <div className="flex-col hero-content lg:flex-row-reverse">
                  <img src="https://pbs.twimg.com/profile_images/1388308127200784387/blQNlISm_400x400.jpg" 
                      className="mask mask-circle"></img>
                    <div>
                      <h1 className="mb-5 text-5xl font-bold">
                        Bem Vindo(a)!
                      </h1>
                      <p className="mb-5">
                        Meu nome é Jonathan e este é um rascunho de um site que estou construindo para poder deixar meus projetos pessoais, coisas em que estou trabalhando e quaisquer outras informações úteis, ou quase uteis...

                      </p>
                      <button className="btn btn-primary">Aguardem</button>
                    </div>
            </div>
          </div>
        <div className="divider"></div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center fonte-branca">
          jonathan.eng.br - 2021
        </div>
       
      
        
 
    </div>
  )
}

/*
<div className="hero min-h-screen fonte-branca bg-base-300 " >
            <div className="flex-col hero-content lg:flex-row-reverse">
              <img src="https://pbs.twimg.com/profile_images/1388308127200784387/blQNlISm_400x400.jpg" classNameName="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                  <h1 className="mb-5 text-5xl font-bold">
                    Bem Vindo(a)!
                  </h1>
                  <p className="mb-5">
                    Meu nome é Jonathan e este é um rascunho de um site que estou construindo para poder deixar meus projetos pessoais, coisas em que estou trabalhando e quaisquer outras informações úteis, ou quase uteis...

                  </p>
                  <button className="btn btn-primary">Aguardem</button>
                </div>
            </div>
          </div>

           <div className="grid h-20 card  rounded-box place-items-center">
          <div className="hero min-h-screen fonte-branca bg-base-300 " >
              <div className="flex-col hero-content lg:flex-row-reverse">
                <img src="https://pbs.twimg.com/profile_images/1388308127200784387/blQNlISm_400x400.jpg" 
                    className="rounded-lg"></img>
                  <div>
                    <h1 className="mb-5 text-5xl font-bold">
                      Bem Vindo(a)!
                    </h1>
                    <p className="mb-5">
                      Meu nome é Jonathan e este é um rascunho de um site que estou construindo para poder deixar meus projetos pessoais, coisas em que estou trabalhando e quaisquer outras informações úteis, ou quase uteis...

                    </p>
                    <button className="btn btn-primary">Aguardem</button>
                  </div>
              </div>
            </div>
          
        </div> 
        <div className="divider"></div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          footer
        </div>
          */
