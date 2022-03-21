import { XlviLoader } from "react-awesome-loaders";
import './../ui/styles.css';

export const Loading = () => {
  return (
    <>
      <div className='loder'>
          <XlviLoader
            className="body1"
            boxColors={["#EFB700", "#008450", "#B81D13"]}
            
          />
        </div>
    </>
  );
};