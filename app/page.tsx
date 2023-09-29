import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-900">Hello World</p>
      <Button>Click me</Button>
    </div>
  );
}
