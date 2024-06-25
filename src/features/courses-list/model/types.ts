type CourseListElement = {
  id: string;
  name: string;
  description: string;
};

type CreateListElementCommand = {
  name: string;
  description: string;
};

type DeleteListElementCommand = {
  id: string;
};
