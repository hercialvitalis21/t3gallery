import Link from "next/link";

const mockUrls = [
 "https://utfs.io/f/97ad1a34-43f4-4140-b8f6-5edcde20cd40-6gy3av.jpg",
 "https://utfs.io/f/a5a61ab1-eead-414f-8fde-ba7ff96779bd-6gy3bj.0001.jpg",
 "https://utfs.io/f/d5de412f-c446-4464-8aa9-4e0eb52e05be-2684k.jpg",
 "https://utfs.io/f/ccf05df8-9439-485a-93c8-964a4332191c-d0x393.jpg",
 "https://utfs.io/f/015aad6d-8077-4e03-8860-6aa1ab369cf5-6gy3bj.0002.jpg",

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
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
