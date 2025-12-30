import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  href?: string;
}

export function Logo({
  className,
  width = 160,
  height = 40,
  priority = false,
  href = "/",
}: LogoProps) {
  return (
    <Link href={href} className={cn("mt-5", className)}>
      <Image
        src="/logo.png"
        alt="Smarting logo"
        width={width}
        height={height}
        priority={priority}
        className="object-contain"
      />
    </Link>
  );
}
