import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HotelCard } from "@/components/HotelCard";
import { PlaceCard } from "@/components/PlaceCard";
import { ItineraryDay } from "@/components/ItineraryDay";
import { ArrowLeft, Download, Share2, MapPin, Train, Plane, Bus, Utensils } from "lucide-react";
import hotelImage from "@/assets/hotel-room.jpg";
import tajMahalImage from "@/assets/taj-mahal.jpg";
import foodImage from "@/assets/indian-food.jpg";

const Itinerary = () => {
  const navigate = useNavigate();
  const [tripData, setTripData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("tripData");
    if (data) {
      setTripData(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!tripData) return null;

  // Sample data for demonstration
  const hotels = [
    {
      name: "Student Budget Inn",
      image: hotelImage,
      rating: 4.2,
      reviews: 328,
      price: 1200,
      location: "City Center",
      amenities: ["WiFi", "Breakfast", "AC"]
    },
    {
      name: "Backpacker's Paradise",
      image: hotelImage,
      rating: 4.5,
      reviews: 456,
      price: 1500,
      location: "Near Station",
      amenities: ["WiFi", "Parking", "24/7"]
    }
  ];

  const places = [
    {
      name: "Taj Mahal",
      image: tajMahalImage,
      rating: 4.8,
      duration: "3-4 hours",
      entryFee: 50,
      description: "One of the Seven Wonders of the World, a stunning marble monument",
      category: "Historical"
    },
    {
      name: "Agra Fort",
      image: tajMahalImage,
      rating: 4.6,
      duration: "2-3 hours",
      entryFee: 40,
      description: "UNESCO World Heritage site with rich Mughal history",
      category: "Historical"
    }
  ];

  const itinerary = [
    {
      day: 1,
      activities: [
        {
          time: "09:00",
          title: "Arrival & Check-in",
          location: "Hotel",
          description: "Check into your hotel, freshen up, and have breakfast"
        },
        {
          time: "11:00",
          title: "Taj Mahal Visit",
          location: "Taj Mahal",
          description: "Explore the magnificent monument, perfect lighting for photos"
        },
        {
          time: "14:00",
          title: "Lunch Break",
          location: "Local Restaurant",
          description: "Enjoy authentic North Indian cuisine"
        },
        {
          time: "16:00",
          title: "Agra Fort",
          location: "Agra Fort",
          description: "Discover the historic fort with stunning architecture"
        }
      ]
    },
    {
      day: 2,
      activities: [
        {
          time: "08:00",
          title: "Morning Market Visit",
          location: "Sadar Bazaar",
          description: "Shop for local handicrafts and souvenirs"
        },
        {
          time: "11:00",
          title: "Mehtab Bagh",
          location: "Mehtab Bagh",
          description: "Beautiful garden with Taj Mahal view from across the river"
        },
        {
          time: "13:00",
          title: "Farewell Lunch",
          location: "Restaurant",
          description: "Last meal together before departure"
        }
      ]
    }
  ];

  const totalBudget = parseInt(tripData.budget) * parseInt(tripData.people);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-6 px-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Trip Overview */}
        <Card className="p-6 bg-gradient-to-br from-card to-muted/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 capitalize">Your {tripData.destination} Adventure</h1>
              <p className="text-muted-foreground">
                {tripData.days} days • {tripData.people} travelers • {tripData.foodPreference}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
              <p className="text-3xl font-bold text-primary">₹{totalBudget.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Budget-Friendly</Badge>
            <Badge variant="secondary">Student Special</Badge>
            <Badge variant="secondary">Guided Tours</Badge>
          </div>
        </Card>

        {/* Hotels Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Places to Visit */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Must-Visit Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Transport Options */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Transport & Getting Around</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 space-y-2">
              <Train className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Train</h3>
              <p className="text-sm text-muted-foreground">₹450/person from Delhi</p>
              <p className="text-xs text-muted-foreground">3-4 hours journey</p>
            </Card>
            <Card className="p-4 space-y-2">
              <Bus className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Bus</h3>
              <p className="text-sm text-muted-foreground">₹300/person from Delhi</p>
              <p className="text-xs text-muted-foreground">4-5 hours journey</p>
            </Card>
            <Card className="p-4 space-y-2">
              <Plane className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Flight</h3>
              <p className="text-sm text-muted-foreground">₹2500/person</p>
              <p className="text-xs text-muted-foreground">1 hour journey</p>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Food Recommendations */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Food Recommendations</h2>
          <Card className="p-6">
            <div className="flex gap-6 flex-col md:flex-row">
              <img src={foodImage} alt="Food" className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-primary" />
                    Budget-Friendly Restaurants
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Estimated ₹300-500 per person per meal
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Pinch of Spice</p>
                      <p className="text-sm text-muted-foreground">North Indian, Mughlai</p>
                    </div>
                    <Badge>4.3★</Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Dasaprakash</p>
                      <p className="text-sm text-muted-foreground">South Indian, Vegetarian</p>
                    </div>
                    <Badge>4.5★</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <Separator />

        {/* Day-wise Itinerary */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Day-wise Itinerary</h2>
          <div className="space-y-6">
            {itinerary.map((day) => (
              <ItineraryDay key={day.day} {...day} />
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Location Map</h2>
          <Card className="p-4">
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 mx-auto text-primary" />
                <p className="text-muted-foreground">Interactive map view</p>
                <p className="text-sm text-muted-foreground">Shows all destinations and routes</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Itinerary;
