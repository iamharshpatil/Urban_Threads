import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto h-full flex flex-col">
      <div onClick={() => handleGetProductDetails(product?._id)} className="flex-1">
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-3 left-3 bg-destructive hover:bg-destructive/90 text-white">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-3 left-3 bg-accent hover:bg-accent/90 text-white">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-3 left-3 bg-accent hover:bg-accent/90 text-white">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4 flex-1">
          <h2 className="text-card-title font-poppins font-semibold mb-3 hover:underline cursor-pointer transition-all duration-200 line-clamp-2">
            {product?.title}
          </h2>
          <div className="flex justify-between items-center mb-3">
            <span className="text-label font-inter text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-label font-inter text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-sm text-muted-foreground" : ""
              } text-body font-inter font-bold text-primary`}
            >
                  &#8377;{product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-body font-inter font-bold text-primary">
                &#8377;{product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0 mt-auto">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed bg-muted text-muted-foreground font-poppins font-medium uppercase tracking-wide">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-medium uppercase tracking-wide"
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
