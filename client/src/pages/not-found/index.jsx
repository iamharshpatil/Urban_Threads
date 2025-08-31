import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-elegant font-poppins font-bold text-primary">404</h1>
        <h2 className="text-section font-poppins font-semibold text-foreground">Page Not Found</h2>
        <p className="text-body font-inter text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => navigate("/shop/home")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-medium uppercase tracking-wide"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
