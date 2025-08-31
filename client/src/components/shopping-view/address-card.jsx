import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card 
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer  border-secondary ${
        selectedId?._id === addressInfo?._id
          ? "border-accent  border-[4px] bg-accent/10"
          : "border-secondary hover:border-accent/50"
      } transition-colors`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>pincode: {addressInfo?.pincode}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button 
          onClick={() => handleEditAddress(addressInfo)}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-poppins font-medium uppercase tracking-wide"
        >
          Edit
        </Button>
        <Button 
          onClick={() => handleDeleteAddress(addressInfo)}
          variant="destructive"
          className="hover:bg-destructive/90 font-poppins font-medium uppercase tracking-wide"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
