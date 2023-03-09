import { GetDoctorByIdQuery } from 'graphql/graphql';
import { create } from 'zustand';

type Doctor = GetDoctorByIdQuery['getDoctorById'];
interface CurrentDoctorForwardStore {
  doctor: Doctor | null;
  setCurDoctor: (doctor: Doctor) => void;
}

export const useCurDoctorForwardStore = create<CurrentDoctorForwardStore>(
  (set) => ({
    doctor: null,
    setCurDoctor: (doctor: Doctor) => set({ doctor }),
  })
);
