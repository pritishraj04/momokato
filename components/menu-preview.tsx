import { MenuItemCard } from "@/components/menu-item-card";
import { getFeaturedItems } from "@/lib/menu-data";

export function MenuPreview() {
  const featuredItems = getFeaturedItems();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 stagger-children">
      {featuredItems.map((item, index) => (
        <div key={item.id} className="h-full">
          <MenuItemCard item={item} showOrderButton={true} />
        </div>
      ))}
    </div>
  );
}
