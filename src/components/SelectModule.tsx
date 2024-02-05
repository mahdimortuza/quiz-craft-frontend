import { Option, Select, Spinner } from "@material-tailwind/react";
import { useGetAllModuleQuery } from "../redux/api/baseApi";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";
import { useAppDispatch } from "../redux/hooks";

export function SelectModule() {
  const dispatch = useAppDispatch();
  const { data: modules, isLoading } = useGetAllModuleQuery("");
  if (isLoading) {
    return (
      <div className=" justify-center h-full">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="w-72">
      <Select
        onChange={(value) => {
          dispatch(setActiveStepper(1));
        }}
        placeholder={""}
        label="Select Module"
      >
        {modules?.data.map((module) => (
          <Option value={module.title} key={module._id}>
            {module.title}
          </Option>
        ))}
      </Select>
    </div>
  );
}
