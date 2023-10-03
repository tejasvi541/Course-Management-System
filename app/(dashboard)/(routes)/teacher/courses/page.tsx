import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Create Your Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
