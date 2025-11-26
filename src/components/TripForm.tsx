import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Calendar, IndianRupee, Utensils } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TripForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    people: "",
    days: "",
    foodPreference: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in sessionStorage and navigate to results
    sessionStorage.setItem("tripData", JSON.stringify(formData));
    navigate("/itinerary");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="destination" className="flex items-center gap-2 text-base font-medium">
            <MapPin className="w-5 h-5 text-primary" />
            Destination
          </Label>
          <Select onValueChange={(value) => setFormData({...formData, destination: value})} required>
            <SelectTrigger id="destination" className="h-12">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="goa">Goa</SelectItem>
              <SelectItem value="agra">Agra</SelectItem>
              <SelectItem value="jaipur">Jaipur</SelectItem>
              <SelectItem value="manali">Manali</SelectItem>
              <SelectItem value="kerala">Kerala</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget" className="flex items-center gap-2 text-base font-medium">
            <IndianRupee className="w-5 h-5 text-primary" />
            Budget per person (INR)
          </Label>
          <Input
            id="budget"
            type="number"
            placeholder="e.g., 15000"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
            className="h-12"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="people" className="flex items-center gap-2 text-base font-medium">
              <Users className="w-5 h-5 text-primary" />
              Number of People
            </Label>
            <Input
              id="people"
              type="number"
              placeholder="e.g., 4"
              value={formData.people}
              onChange={(e) => setFormData({...formData, people: e.target.value})}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="days" className="flex items-center gap-2 text-base font-medium">
              <Calendar className="w-5 h-5 text-primary" />
              Number of Days
            </Label>
            <Input
              id="days"
              type="number"
              placeholder="e.g., 5"
              value={formData.days}
              onChange={(e) => setFormData({...formData, days: e.target.value})}
              className="h-12"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="food" className="flex items-center gap-2 text-base font-medium">
            <Utensils className="w-5 h-5 text-primary" />
            Food Preference
          </Label>
          <Select onValueChange={(value) => setFormData({...formData, foodPreference: value})} required>
            <SelectTrigger id="food" className="h-12">
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="jain">Jain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
          Plan My Trip
        </Button>
      </form>
    </Card>
  );
};
