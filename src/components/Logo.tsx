import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
}

const Logo = ({ size = "md", variant = "full", className }: LogoProps) => {
  const sizeClasses = {
    sm: variant === "full" ? "h-8" : "h-6",
    md: variant === "full" ? "h-10" : "h-8",
    lg: variant === "full" ? "h-12" : "h-10",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative flex items-center justify-center">
        {/* 3D Куб логотип */}
        <div className={cn("relative", sizeClasses[size])}>
          <div className="absolute inset-0 bg-cubeworld-primary rounded opacity-80 animate-pulse-slow"></div>
          <div className="absolute inset-0 transform translate-x-1 translate-y-1 bg-cubeworld-secondary rounded opacity-80 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-0 transform translate-x-0.5 translate-y-0.5 bg-cubeworld-accent rounded opacity-80 animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
          <div className={cn("relative z-10 flex items-center justify-center bg-white rounded", sizeClasses[size])}>
            <span className="text-cubeworld-primary font-bold" style={{ fontSize: size === "lg" ? "24px" : size === "md" ? "18px" : "14px" }}>CW</span>
          </div>
        </div>
      </div>
      
      {variant === "full" && (
        <div className="ml-2 font-bold">
          <span className="text-cubeworld-primary">Cube</span>
          <span className="text-cubeworld-secondary">World</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
