import { TripForm } from "@/components/TripForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, IndianRupee, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Travel Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 text-center space-y-6">
          <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            Student-Friendly Trip Planner
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Plan Your Perfect
            <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Budget Adventure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized itineraries with hotels, places to visit, food recommendations, 
            and transport options - all within your budget!
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-primary" />
              <span>Budget-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Best Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Complete Itinerary</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Start Planning Your Trip</h2>
            <p className="text-muted-foreground">Fill in the details and get your personalized itinerary instantly</p>
          </div>
          
          <TripForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏨",
                title: "Hotel Recommendations",
                description: "Budget-friendly stays with ratings and reviews"
              },
              {
                icon: "🗺️",
                title: "Places to Visit",
                description: "Top attractions with timings and entry fees"
              },
              {
                icon: "🍽️",
                title: "Food Guide",
                description: "Local cuisine recommendations for your preference"
              },
              {
                icon: "🚗",
                title: "Transport Options",
                description: "Best ways to reach and travel around"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 text-center space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 mt-16">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Student Trip Planner. Travel smart, spend less! 🎒</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
