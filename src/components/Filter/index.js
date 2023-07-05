import './index.css';
import BlogCard from "../BlogCard";

const Filter=()=> {

  return (
    <div className="filter">
      <div className='categories'>
        <a href='' className='all'>All</a>
        <a href=''>Graphic Design</a>
        <a href=''>Motion Graphics</a>
      </div>
      <div className='blogCards'>
        <BlogCard name="Conquering graphic Designing Challenges Guide " date="January 24,2023" comment="1 comment"/>
        <BlogCard name="5 Easy Tips to Optimize Your Graphic Design Workflow " date="October 11,2022" comment=" No comment"/>
      </div>
    </div>
  );
}

export default Filter;