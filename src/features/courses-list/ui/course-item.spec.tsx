import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { CourseItem } from "./course-item";

describe('course item', ()=>{
  it('should call delete callback on click', async () => { 
    const onDelete = jest.fn();
    render(
      <CourseItem 
      course={{id: 'asdfadsf', description: 'qewrqewr', name: 'zxcvzxcv'}} 
      onDelete={onDelete}
      />
    );
      
    await userEvent.click(screen.getByText('Delete course'));
    
    expect(onDelete).toHaveBeenCalled()
   })
})