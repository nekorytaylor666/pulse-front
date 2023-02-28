import { create } from 'zustand';

interface CurrentPatientStore {
  patientId: string;
  setPatientId: (patientId: string) => void;
}

export const useCurrentPatientStore = create<CurrentPatientStore>((set) => ({
  patientId: '',
  setPatientId: (patientId: string) => set({ patientId }),
}));
