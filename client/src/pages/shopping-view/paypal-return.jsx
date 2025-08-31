import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (paymentId && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(capturePayment({ paymentId, payerId, orderId })).then((data) => {
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/shop/payment-success";
        }
      });
    }
  }, [paymentId, payerId, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="p-10 max-w-md w-full text-center border-secondary">
        <CardHeader>
          <CardTitle className="text-subsection font-poppins font-semibold text-foreground">Processing Payment...</CardTitle>
          <p className="text-body font-inter text-muted-foreground mt-4">
            Please wait while we complete your transaction.
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}

export default PaypalReturnPage;
