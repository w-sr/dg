import { Kpi } from "types/kpi";
import { axd, axg, axp, axu } from "./axios";

const baseURL = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const fetchKpis = async (): Promise<Kpi[]> => {
  const data = await axg(`${baseURL}/kpis`);
  return data.kpis;
};

export const createKpi = async (data: Kpi): Promise<Kpi> => {
  const created = await axp(`${baseURL}/kpis`, data);
  return created.kpi;
};

export const getKpi = async (id: string): Promise<Kpi> => {
  const data = await axg(`${baseURL}/kpis/${id}`);
  return data.kpi;
};

export const updateKpi = async (id: string, data: Kpi): Promise<Kpi> => {
  const updated = await axu(`${baseURL}/kpis/${id}`, data);
  return updated.kpi;
};

export const deleteKpi = async (id: string): Promise<Kpi> => {
  const deleted = await axd(`${baseURL}/kpis/${id}`);
  return deleted.kpi;
};
