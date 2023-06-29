import { KpiCard } from "components/molecules/KpiCard";
import { Kpi } from "types/kpi";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface KpiWidgetProps {
  kpis: Kpi[] | [];
  onSelect: (id?: string) => void;
}

const KpiWidget = ({ kpis, onSelect }: KpiWidgetProps) => {
  return (
    <div className="p-8 grid grid-cols-6 rounded-2xl bg-copper">
      <div className="flex flex-col mt-10">
        <span className="font-bold text-xl">KPI</span>
        <span className="text-xs opacity-80 mt-20">
          Key Performance Indicators
        </span>
      </div>

      <div className="flex flex-wrap col-span-4">
        {kpis &&
          kpis.map((kpi) => (
            <div
              className="cursor-pointer w-max pt-5"
              onClick={() => onSelect(kpi._id)}
              key={kpi._id}
            >
              <KpiCard kpi={kpi} />
            </div>
          ))}
      </div>
      <div className="pt-5">
        <div className="relative cursor-pointer" onClick={() => onSelect()}>
          <KpiCard />
          <div className="absolute left-10 bottom-10 bg-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faArrowRight} color="white" size="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { KpiWidget };
