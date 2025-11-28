import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { InvestorCard } from "@/components/InvestorCard";
import { mockInvestors } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Investors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState<string>("all");

  const filteredInvestors = mockInvestors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         investor.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === "all" || 
                           investor.industries.includes(industryFilter);
    return matchesSearch && matchesIndustry;
  });

  const allIndustries = Array.from(
    new Set(mockInvestors.flatMap(i => i.industries))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Meet Our Investors</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Connect with experienced investors looking for the next big opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search investors..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {allIndustries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvestors.map(investor => (
            <InvestorCard key={investor.id} investor={investor} />
          ))}
        </div>

        {filteredInvestors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No investors found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Investors;
