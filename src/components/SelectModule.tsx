import { Option, Select, Spinner } from "@material-tailwind/react";
import {} from "../redux/api/baseApi";
import { useGetAllModuleQuery } from "../redux/features/module/moduleApi";
import { setSelectedModule } from "../redux/features/module/moduleSlice";
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
          const moduleTitle = modules.data.find(
            (module: any) => module._id === value
          ).title;
          dispatch(
            setSelectedModule({
              moduleTitle,
              moduleId: value,
            })
          );
          dispatch(setActiveStepper(1));
        }}
        placeholder={""}
        label="Select Module"
      >
        {modules?.data.map((module) => (
          <Option value={module._id} key={module._id}>
            {module.title}
          </Option>
        ))}
      </Select>
    </div>
  );
}
