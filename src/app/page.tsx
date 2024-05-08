import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col md:flex-row items-center">
            <Image src="/profile.svg" alt="profile" height={245} width={245}/>
            <div className="flex flex-col items-center md:items-start md:ml-20  mt-8 md:mt-0 ">
                <h1 className="text-2xl md:text-start">Wellingto Pereira Silva</h1>
                <p className="mt-3 text-justify md:text-start">Olá, sou Wellington estudante de Ciência da Computação, estagiário em suporte de TI
                    no Hospital Unimed Juiz de Fora, com experiência em desenvolvimento Web e mobile,
                    com aptidão também em UX/UI, buscando uma oportunidade como desenvolver.</p>
            </div>
        </div>
        <div className="">

        </div>
    </main>
  );
}
