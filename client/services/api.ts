import { IFormInput } from "types/form";
import { axd, axg, axp } from "./axios";

const baseURL = process.env["REACT_APP_API_ENDPOINT"];

export const fetchKpis = async (): Promise<IFormInput[]> =>
  axg(`${baseURL}/kpis`);

export const createKpi = async (data: IFormInput): Promise<IFormInput> =>
  axp(`${baseURL}/kpis`, data);

export const getKpi = async (id: string): Promise<IFormInput> =>
  axg(`${baseURL}/kpis/${id}`);

export const updateKpi = async (
  id: string,
  data: IFormInput
): Promise<IFormInput> => axp(`${baseURL}/kpis/${id}`, data);

export const deleteKpi = async (id: string): Promise<IFormInput> =>
  axd(`${baseURL}/kpis/${id}`);
