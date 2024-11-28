import { Button } from "@/components/ui/button";
import { FaSliders } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMarketplace } from "@/lib/context/useMarketplace";
import { IoMdClose } from "react-icons/io";
import { PlatformType } from "@/types";
import { RangeSlider } from "../common/RangeSlider";
import { Separator } from "../ui/separator";
import { platformsData } from "@/data/platforms";
import Image from "next/image";

const ProductFilters = () => {
  const {
    showFilters,
    setShowFilters,
    priceRange,
    setPriceRange,
    setSelectedPlatforms,
    selectedPlatforms,
    generateProductsList,
    selectedCategory,
    selectedSubCategory,
    searchQuery,
    setProductsList,
  } = useMarketplace();

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const togglePlatform = (platformId: PlatformType) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const clearAll = () => {
    setPriceRange([0, 1000]);
    setSelectedPlatforms([]);
    const newProductsList = generateProductsList(
      selectedCategory,
      selectedSubCategory,
      searchQuery,
      [0, 1000]
    );
    setProductsList(newProductsList);
  };
  return (
    <Popover
      open={showFilters}
      onOpenChange={(isOpen) => setShowFilters(isOpen)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-transparent hover:bg-background-3 text-dark-secondary hover:text-dark-secondary w-10 h-10 border-dark-secondary"
          onClick={() => setShowFilters(!showFilters)}>
          <FaSliders className="!w-6 !h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[560px] rounded-xl p-0 bg-background-2"
        sideOffset={16}>
        <div className="w-full h-16 border-b border-light-gray text-dark-secondary flex items-center justify-center relative">
          <IoMdClose
            className="!w-6 !h-6 absolute left-4 top-4 cursor-pointer"
            onClick={() => setShowFilters(false)}
          />
          <span className="font-[700]">Filters</span>
        </div>
        <div className="text-dark-secondary border-b border-light-gray p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-normal">Price range</h3>
            <RangeSlider
              value={priceRange}
              min={0}
              max={1000}
              step={1}
              onValueChange={handlePriceChange}
            />
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs">Minimum</span>
                <div className="rounded-full bg-background-2 border border-light-gray px-4 py-[13.5px]">
                  <span className="text-sm">$ {priceRange[0].toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs">Maximum</span>
                <div className="rounded-full bg-background-2 border border-light-gray px-4 py-[13.5px]">
                  <span className="text-sm">$ {priceRange[1].toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-light-gray" />
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-normal">Platforms</h3>
            <div className="flex flex-wrap gap-4">
              {platformsData.map((platform) => (
                <Button
                  key={platform.id}
                  variant="ghost"
                  size="sm"
                  className={`flex items-center justify-center w-[120px] h-[70px] bg-transparent hover:bg-background-3 border border-light-gray rounded-lg px-2.5 pt-[18px] pb-3 ${
                    selectedPlatforms.includes(platform.id)
                      ? "bg-background-3"
                      : ""
                  }`}
                  onClick={() => togglePlatform(platform.id)}>
                  <span className="flex flex-col items-start justify-end w-full gap-0.5 h-full">
                    {platform.image && (
                      <span style={platform.imageStyle}>
                        <Image
                          src={platform.image}
                          alt={platform.label}
                          height={platform.imageHeight}
                          width={platform.imageWidth}
                        />
                      </span>
                    )}
                    <span className="text-dark-secondary text-[10px] leading-3">
                      {platform.label}
                    </span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-20 text-dark-secondary flex items-center justify-between px-6">
          <Button
            variant="link"
            className="text-dark-secondary text-base font-normal"
            onClick={() => clearAll()}>
            Clear all
          </Button>
          <Button
            className="bg-dark-secondary hover:bg-dark-secondary text-[#1B0809] hover:text-[#1B0809] text-base font-normal w-[181px]"
            onClick={() => {
              const newProductsList = generateProductsList(
                selectedCategory,
                selectedSubCategory || undefined,
                searchQuery,
                priceRange
              );
              setProductsList(newProductsList);
            }}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductFilters;
