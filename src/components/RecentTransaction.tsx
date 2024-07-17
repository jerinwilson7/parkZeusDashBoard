import { FaAngleRight } from "react-icons/fa";
import noData from '../assets/Images/nodata.svg'


export const RecentTransaction = () => {
  return (
    <div className="bg-white rounded-md p-6 w-1/3">
      <div className="h-full">
        <div className="flex justify-between">
          <h2>Recent Transaction</h2>
          <div className="flex items-center">
            <span>View all</span>
            <FaAngleRight />
          </div>
        </div>

        <div className="flex flex-col h-full items-center justify-center ">
          <img src={noData} alt="" />
          <span className="pt-2">No Data Here</span>
        </div>
      </div>
    </div>
  );
};
