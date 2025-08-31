import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="p-10 max-w-md w-full text-center border-secondary">
        <CardHeader className="p-0">
          <CardTitle className="text-section font-poppins font-semibold text-foreground">Payment Successful!</CardTitle>
        </CardHeader>
        <p className="text-body font-inter text-muted-foreground mt-4 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-medium uppercase tracking-wide" 
          onClick={() => navigate("/shop/account")}
        >
          View Orders
        </Button>
      </Card>
    </div>
  );
}

export default PaymentSuccessPage;
