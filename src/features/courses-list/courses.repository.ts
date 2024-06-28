import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourseElement = (command: CreateListElementCommand): any => {
    return dbClient.course.create({
      data: command,
    });
  };

  deleteCourseElement = (command: DeleteListElementCommand) => {
    dbClient.course
      .delete({ where: { id: command.id } })
      .then((result) => {
        console.log("Delete successful:", result);
      })
      .catch((error) => {
        console.error("Delete failed:", error);
      });
  };
}

export const coursesRepository = new CoursesRepository();
