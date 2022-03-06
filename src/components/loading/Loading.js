import { XlviLoader } from "react-awesome-loaders";
import './../ui/styles.css';

export const Loading = () => {
  return (
    <>
      <div className='loder'>
          <XlviLoader
            className="loaderbolt"
            boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
            
          />
        </div>
    </>
  );
};