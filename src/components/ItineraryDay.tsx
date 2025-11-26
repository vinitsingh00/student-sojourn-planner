import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

interface Activity {
  time: string;
  title: string;
  location: string;
  description: string;
}

interface ItineraryDayProps {
  day: number;
  activities: Activity[];
}

export const ItineraryDay = ({ day, activities }: ItineraryDayProps) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-primary">Day {day}</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {activity.time.split(':')[0]}
              </div>
              {index < activities.length - 1 && (
                <div className="w-0.5 h-full bg-border my-2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold">{activity.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                    <MapPin className="w-3 h-3 ml-2" />
                    {activity.location}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
