import { classOneStudentsList } from "../../../assets/Data";
import avatar from "../../../assets/avatar.png";

export default function ClassOne() {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          class One
        </td>
      </tr>

      {classOneStudentsList.map((Students) => (
        <>
          <tr className="border-b border-[#7ECEB529]" key={Students.Id}>
            <td className="p-5 text-sm md:text-xl">{Students.Id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={Students.img || avatar}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{Students.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {Students.Percentage}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {Students.Scores}
            </td>
          </tr>
        </>
      ))}
    </>
  );
}
