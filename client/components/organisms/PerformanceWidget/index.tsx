import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PerformanceWidget = () => {
  return (
    <div className="w-full p-8 rounded-2xl bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">Performance</span>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="cursor-pointer"
          size="sm"
        />
      </div>
      <div className="flex justify-around py-12">
        <div className="flex flex-col items-center">
          <span className="text-4xl">76%</span>
          <span className="text-xs opacity-30">Income</span>
        </div>
        <div className="border-solid border border-gray-800 my-2"></div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">44%</span>
          <span className="text-xs opacity-30">Spendings</span>
        </div>
      </div>
      <div className="flex items-center py-4">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="bg-white rounded-full border-none"
          size="xl"
          color="#e6410f"
        />
        <span className="text-sm ml-4">
          <strong>Spending course</strong> was taken
        </span>
      </div>
      <div className="flex items-center py-4">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="bg-white rounded-full border-none"
          size="xl"
          color="#52d3ed"
        />
        <span className="text-sm ml-4">
          <strong>Deposit program</strong> was setup
        </span>
      </div>
      <div className="flex items-center py-4">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="bg-white rounded-full border-none"
          size="xl"
          color="#9CA3AF"
        />
        <span className="text-sm ml-4">
          <strong>Cashback program</strong> activated
        </span>
      </div>
    </div>
  );
};

export { PerformanceWidget };
