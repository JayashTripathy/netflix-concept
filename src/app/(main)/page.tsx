import Top10Movies from "@/components/top10Movies";
import TopMoviesStrip from "@/components/topMoviesStrip";

export default function Home() {
  return (
    <div className="pb-20 md:pb-0">
      <TopMoviesStrip />
      <Top10Movies />
    </div>
  );
}
