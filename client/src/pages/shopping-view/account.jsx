import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/account.jpg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";

function ShoppingAccount() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={accImg}
          className="h-full w-full object-cover object-center"
          alt="Account Banner"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className=" font-poppins font-semibold ">My Account</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col rounded-lg border border-secondary bg-background p-8 shadow-sm">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="orders" className="font-poppins font-medium">Orders</TabsTrigger>
                <TabsTrigger value="address" className="font-poppins font-medium">Address</TabsTrigger>
              </TabsList>
              <TabsContent value="orders" className="space-y-6">
                <ShoppingOrders />
              </TabsContent>
              <TabsContent value="address" className="space-y-6">
                <Address />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
