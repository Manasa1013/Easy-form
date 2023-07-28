import { NavLink } from "react-router-dom";

import { useForm } from "../../Contexts/FormContext";
import { TextInput } from "../TextInput/TextInput";

export function FormElements() {
  const { openElements } = useForm();

  return (
    <>
      <div
        className={`bg-gray-100 p-4 md:mr-16 mr-6 mt-12  bottom-0 left-0 top-0 fixed ${
          openElements ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col justify-between items-center  py-4">
          <div className="flex flex-col font-normal md:text-md text-lg items-start justify-between w-full">
            <>
              <span className="p-4 inline">Input</span>
            </>

            <>
              <span className="p-4 inline">Checkbox</span>
            </>
            <>
              <span className="p-4 inline">DropDown</span>
            </>
            <>
              <span className="p-4 inline">Categorize</span>
            </>
            <>
              <span className="p-4 inline">Cloze</span>
            </>
            <>
              <span className="p-4 inline">TextArea</span>
            </>
            <>
              <span className="p-4 inline">Comprehension</span>
            </>
            <>
              <span className="p-4 inline">Radio</span>
            </>
            <>
              <span className="p-4 inline">Image</span>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
