import axios from "axios";
import { useForm } from "react-hook-form";

function InputsForReg() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    let formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    try {
      const response = await axios.post(
        "http://localhost:3001/message/data",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 flex justify-center flex-col"
    >
      <input
        className="border-white border-2 my-2 h-[50vh] rounded-xl px-2 bg-[#131317] text-white outline-none"
        placeholder="Логин"
        {...register("login", { required: true })}
      />
      <input
        className="border-white border-2 my-2 h-[50vh] rounded-xl px-2 bg-[#131317] text-white outline-none"
        placeholder="Пароль"
        {...register("password", { required: true })}
      />
      <input
        className="border-white border-2 my-2 h-[50vh] rounded-xl px-2 bg-[#131317] text-white outline-none"
        placeholder="Повторите пароль"
      />
      <button
        className="my-2 h-[50vh] rounded-xl px-2 bg-slate-300 text-black outline-none hover:bg-white font-medium"
        type="submit"
        value="Submit"
      >
        Зарегестрироваться
      </button>
    </form>
  );
}

export default InputsForReg;
