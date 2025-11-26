import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, IndianRupee } from "lucide-react";

interface PlaceCardProps {
  name: string;
  image: string;
  rating: number;
  duration: string;
  entryFee: number;
  description: string;
  category: string;
}

export const PlaceCard = ({ name, image, rating, duration, entryFee, description, category }: PlaceCardProps) => {
  return (
    <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <IndianRupee className="w-4 h-4" />
            {entryFee === 0 ? "Free" : `₹${entryFee}`}
          </div>
        </div>
      </div>
    </Card>
  );
};
