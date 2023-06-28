import { KpiCard } from "components/molecules/KpiCard";
import { Kpi } from "types/kpi";

interface KpiWidgetProps {
  kpis: Kpi[] | [];
  onSelect: (id?: string) => void;
}

const KpiWidget = ({ kpis, onSelect }: KpiWidgetProps) => {
  return (
    <div className="p-8 grid grid-cols-5 rounded-2xl bg-copper">
      <div className="flex flex-col justify-around">
        <span className="font-bold text-xl">KPI</span>
        <span className="text-xs opacity-80">Key Performance Indicators</span>
      </div>

      <div className="col-span-4 flex">
        {kpis &&
          kpis.map((kpi) => (
            <div
              className="cursor-pointer"
              onClick={() => onSelect(kpi._id)}
              key={kpi._id}
            >
              <KpiCard kpi={kpi} />
            </div>
          ))}

        <div className="cursor-pointer" onClick={() => onSelect()}>
          <KpiCard />
        </div>
      </div>
    </div>
  );
};

export { KpiWidget };
