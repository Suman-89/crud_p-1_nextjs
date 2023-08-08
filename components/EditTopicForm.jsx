import Link from "next/link";

export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-state-500 px-8 py-2"
        type="text"
        placeholder="Topic titile"
      />
      <input
        className="border border-state-500 px-8 py-2"
        type="text"
        placeholder="Topic description"
      />
      <button className="bg-green-600 w-fit px-6 py-3 font-bold text-white">
        Update Topic
      </button>
    </form>
  );
}
