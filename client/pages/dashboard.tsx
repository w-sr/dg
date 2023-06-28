import { ChartWidget } from "components/organisms/ChartWidget";
import { FormModal } from "components/organisms/FormModal";
import { KpiWidget } from "components/organisms/KpiWidget";
import { MainLayout } from "components/organisms/MainLayout";
import { PerformanceWidget } from "components/organisms/PerformanceWidget";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Kpi } from "types/kpi";
import { createKpi, deleteKpi, fetchKpis, updateKpi } from "../services/api";

export default function Dashboard() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedKpi, setSelectedKpi] = useState<Kpi>();

  const [kpis, setKpis] = useState<Kpi[]>([]);

  useEffect(() => {
    const loadKpis = async () => {
      try {
        const res = await fetchKpis();
        setKpis(res);
      } catch (error) {
        console.log(error);
      }
    };

    loadKpis();
  }, []);

  const onSelect = (id?: string) => {
    if (id) {
      const selected = kpis.find((x) => x._id === id);
      setSelectedKpi(selected);
    } else {
      setSelectedKpi(undefined);
    }

    setShowDialog(true);
  };

  const onSubmit: SubmitHandler<Kpi> = async (data) => {
    try {
      if (selectedKpi) {
        const updated = await updateKpi(selectedKpi?._id, data);
        const temp = [...kpis];
        const index = kpis.findIndex((k) => k._id === selectedKpi._id);
        temp[index] = updated;
        setKpis(temp);
      } else {
        const created = await createKpi(data);
        const temp = [...kpis, created];
        setKpis(temp);
      }

      onModalClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id?: string) => {
    if (!id) return;

    try {
      await deleteKpi(id);
      const temp = kpis.filter((x) => x._id !== id);
      setKpis(temp);
      onModalClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onModalClose = () => {
    setSelectedKpi(undefined);
    setShowDialog(false);
  };

  return (
    <>
      <Head>
        <title>Kpi Dashboard</title>
        <meta name="description" content="Kpi dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <PerformanceWidget />
          </div>
          <div className="col-span-2">
            <ChartWidget />
          </div>
          <div className="col-span-3">
            <KpiWidget kpis={kpis} onSelect={onSelect} />
          </div>
        </div>
      </MainLayout>

      <FormModal
        kpi={selectedKpi}
        isOpen={showDialog}
        closeModal={onModalClose}
        submitModal={onSubmit}
        deleteModal={onDelete}
      />
    </>
  );
}
