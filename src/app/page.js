import Newsletter from "@/components/Newsletter";

import { getSubs } from "@/lib/supabase";

import Link from "next/link";

export default async function Home() {
  const subscribers = await getSubs();
  return (
    // grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]
    <div className="p-10">
      {/* flex flex-col gap-8 row-start-2 items-center sm:items-start */}
      <main className="">
        <h1 className="mb-10 text-4xl font-bold text-center">Newsletter</h1>
        <Newsletter />
        <div className="m-auto w-full max-w-md mt-10">
          <ul>
            {subscribers.map((sub) => (
              <li key={sub.id} className="flex gap-4">
                <span>
                  {sub.name} - {sub.email}
                </span>
                <Link href={`/update/${sub.id}`} className="text-blue-500">
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
