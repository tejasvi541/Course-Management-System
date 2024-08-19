import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.attachment.delete({
      where: {
        id: params.attachmentId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("COURSE_ID_ATTACHMENTS", error);
    return new NextResponse("Course Attachment Issues", { status: 500 });
  }
}
