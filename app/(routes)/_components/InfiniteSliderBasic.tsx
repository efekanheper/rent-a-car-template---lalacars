import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { logoData } from "@/constans"; // Logo verilerini içeren dosyayı import edin

export function InfiniteSliderBasic() {
  return (
    <div className="relative">
      <h1 className="text-center text-btncolor font-poppins  text-xl md:text-4xl lg:text-5xl font-bold mb-2">
        Trusted by Leading Brands
      </h1>
      <p className="text-center text-footer font-poppins  font-semibold">
        Executive Partners
      </p>
      <InfiniteSlider gap={24} reverse>
        {logoData.map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className="h-[80px] md:h-[120px] max-w-full mt-8" // Logo boyutlarını responsive yapalım
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
