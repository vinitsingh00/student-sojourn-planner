import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Coffee } from "lucide-react";

interface HotelCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  amenities: string[];
}

export const HotelCard = ({ name, image, rating, reviews, price, location, amenities }: HotelCardProps) => {
  return (
    <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
          ₹{price}/night
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
