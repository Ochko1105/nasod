import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function SearchCard() {
  return (
    <Card className="bg-white shadow-2xl rounded-xl p-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">
            University Name
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name..."
              className="pl-10 h-12 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Major</label>
          <div className="relative">
            <Input
              placeholder="Computer Science..."
              className="h-12 bg-slate-50 border-slate-200 pr-10"
            />
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">
            Min Score
          </label>
          <Input
            placeholder="1200"
            type="number"
            className="h-12 bg-slate-50 border-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Year</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                defaultValue="2024"
                className="h-12 bg-slate-50 border-slate-200 pr-10"
              />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button
              size="lg"
              className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white h-12 px-8"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
