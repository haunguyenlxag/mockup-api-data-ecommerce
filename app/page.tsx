import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Hello world</h1>
          <div>GET list: http://localhost:3000/products/</div>
          <div>GET by ID: http://localhost:3000/products/GGOEAFKA087499</div>
          <div>PATCH update: http://localhost:3000/products/GGOEAFKA087499</div>
      </main>
  );
}
