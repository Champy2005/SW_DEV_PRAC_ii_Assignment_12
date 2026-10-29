import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-stone-900">
      <main className="flex w-full flex-col">
        <Banner />
        <PromoteCard />
      </main>
    </div>
  );
}
