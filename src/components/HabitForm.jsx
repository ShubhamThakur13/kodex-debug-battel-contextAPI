import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset } = useForm();

  const onCommit = (values) => {
    const payload = {
      ...values,
      id: crypto.randomUUID(),
      completed: false,
    };

    addHabit(payload);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onCommit)}>
      <input {...register("name")} />
      <input {...register("goalValue")} />
      <button type="submit">Create</button>
    </form>
  );
};

export default HabitForm;