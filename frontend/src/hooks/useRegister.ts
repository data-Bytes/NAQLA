import { useMutation } from "@tanstack/react-query";
import { registerToMoodle } from "../services/Register";
import type { RegisterData } from "../services/types";

export function useRegister() {
  return useMutation<any, Error, RegisterData>({
    mutationFn: (userData) => registerToMoodle(userData),
  });
}
