import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-background rounded-lg shadow-sm border border-secondary sticky top-20">
      <div className="p-6 border-b border-secondary">
        <h2 className="text-subsection font-poppins font-semibold text-foreground">Filters</h2>
      </div>
      <div className="p-6 space-y-8">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              <h3 className="text-card-title font-poppins font-semibold text-foreground mb-4">{keyItem.toUpperCase()}</h3>
              <div className="grid gap-4">
                {filterOptions[keyItem].map((option) => (
                  <Label 
                    key={option.id} 
                    className="flex font-inter font-normal items-center gap-3 text-foreground hover:text-primary transition-colors cursor-pointer group"
                  >
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1  && {bg: "bg-primary"}
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                      className="group-hover:border-primary"
                    />
                    <span className="text-sm">{option.label}</span>
                  </Label>
                ))}
              </div>
            </div>
            <Separator className="bg-secondary" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
