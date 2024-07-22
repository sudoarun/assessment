import FanCloudComp from "@/components/fanCloud/fanCloudComp";
import FooterComp from "@/components/footer/footerComp";
import HeroComp from "@/components/hero/heroComp";

export default function Home() {
  return (
    <section style={{ backgroundColor: "#2A2A2B" }}>
      <div
        style={{
          backgroundColor: "#1E1E1E",
        }}
      >
        <HeroComp />
      </div>
      <div className="mt-5">
        <FanCloudComp />
      </div>
      <div className="mt-5">
        <FooterComp />
      </div>
    </section>
  );
}
