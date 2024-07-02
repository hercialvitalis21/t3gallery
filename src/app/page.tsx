import { db } from "@vercel/postgres";
import { drizzle } from 'drizzle-orm/';



const mockUrls = [
 "https://utfs.io/f/97ad1a34-43f4-4140-b8f6-5edcde20cd40-6gy3av.jpg",
 "https://utfs.io/f/a5a61ab1-eead-414f-8fde-ba7ff96779bd-6gy3bj.0001.jpg",
 "https://utfs.io/f/d5de412f-c446-4464-8aa9-4e0eb52e05be-2684k.jpg",
 "https://utfs.io/f/ccf05df8-9439-485a-93c8-964a4332191c-d0x393.jpg",
 "https://utfs.io/f/015aad6d-8077-4e03-8860-6aa1ab369cf5-6gy3bj.0002.jpg",
 "https://utfs.io/f/4b3c6636-0e69-4e31-a8f8-8bcdab2b1f3d-odv1fk.jpg",
 "https://utfs.io/f/ad5ca0dc-d505-4538-8c7f-68a21dd8461f-qml98i.jpg",
 "https://utfs.io/f/d8940d64-0527-4d50-be8f-1427a0350206-ezp3ej.jpg",
 "https://utfs.io/f/968f7b24-0e75-439a-8b8b-38c09af62b4b-ezp3ei.jpg",
 "https://utfs.io/f/dcbf0d06-fd1d-4637-b5df-6c72cbd50ffe-ezp3eh.jpg",
 "https://utfs.io/f/a63b028c-754a-4537-8015-b8880a5fc4de-ezp3eg.jpg",
 "https://utfs.io/f/217d2f35-540f-4a68-835b-ee76e685bc01-lgq0mg.png",
 "https://utfs.io/f/4bc21b77-7811-4ef6-b4f9-5c94019ae053-6gy3bj.0003.jpg"

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {



  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
        }
        </div>
    Hello Gallery in progress
    </main>
  );
}
