import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Kpi } from "types/kpi";

type KpiCardProps = {
  kpi?: Kpi;
};

const KpiCard = ({ kpi }: KpiCardProps) =>
  kpi ? (
    <div className="relative w-52 h-52 m-4 flex flex-col capitalize justify-around bg-white rounded-3xl p-6">
      <div className="absolute w-16 h-16 -top-8 flex justify-center items-center rounded-xl bg-brown">
        <FontAwesomeIcon icon={faCircleHalfStroke} color="white" size="xl" />
      </div>
      <span className="text-sm mt-6">{kpi.name}</span>
      <span className="text-2xl font-bold">{kpi.value}</span>
    </div>
  ) : (
    <div className="w-52 h-52 m-4 capitalize bg-white rounded-3xl p-6">
      <span className="text-xl font-bold">Your New Metrics</span>
    </div>
  );

export { KpiCard };
