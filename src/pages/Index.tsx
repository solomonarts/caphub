import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, TrendingUp, Target, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="bg-dark-bg text-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Connect Visionary Projects with Strategic Investors And Partners.
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                FundMatch is the premier platform for entrepreneurs seeking funding and investors looking for their next
                big opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
                  >
                    Explore Projects <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/investors">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-2 border-white text-white hover:bg-white hover:text-dark-bg font-semibold px-8 rounded-full"
                  >
                    Meet Investors <Users className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Innovative Projects</h3>
                <p className="text-muted-foreground">
                  Discover cutting-edge startups across FinTech, HealthTech, AI/ML, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Verified Investors</h3>
                <p className="text-muted-foreground">Connect with experienced investors with proven track records.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-success" />
                </div>
                <h3 className="font-bold text-xl mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">Monitor funding progress and investment trends in real-time.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-14 w-14 rounded-xl bg-featured/20 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-featured" />
                </div>
                <h3 className="font-bold text-xl mb-2">Smart Matching</h3>
                <p className="text-muted-foreground">
                  AI-powered recommendations to connect the right projects with the right investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-dark-bg text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Whether you're an entrepreneur with a groundbreaking idea or an investor seeking the next unicorn,
                FundMatch is your gateway to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
                  >
                    Browse All Projects
                  </Button>
                </Link>
                <Link to="/investors">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-dark-bg font-semibold px-8 rounded-full"
                  >
                    View All Investors
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-primary">
              <Rocket className="h-5 w-5" />
              <span>Capital Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Capital Hub. Connecting innovation with investment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
