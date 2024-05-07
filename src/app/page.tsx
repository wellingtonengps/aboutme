import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
        <div className="flex flex-row">
            <Image src="/profile.svg" alt="profile" height={245} width={245}/>
            <div className="flex flex-col items-start">
                <h1>Wellingto Pereira Silva</h1>
                <p>Olá, sou Wellington estudante de Ciência da Computação, estagiário em suporte de TI
                    no Hospital Unimed Juiz de Fora, com experiência em desenvolvimento Web e mobile,
                    com aptidão também em UX/UI, buscando uma oportunidade como desenvolver.</p>
            </div>
        </div>
    </main>
  );
}
