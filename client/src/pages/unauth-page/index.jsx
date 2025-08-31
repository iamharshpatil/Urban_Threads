import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function UnauthPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-section font-poppins font-semibold text-primary">Access Denied</h1>
        <p className="text-body font-inter text-foreground max-w-md">
          You don't have access to view this page. Please log in with appropriate credentials.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => navigate("/auth/login")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-medium uppercase tracking-wide"
          >
            Login
          </Button>
          <Button 
            onClick={() => navigate("/shop/home")}
            variant="outline"
            className="border-secondary hover:bg-secondary hover:text-secondary-foreground font-poppins font-medium uppercase tracking-wide"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UnauthPage;
