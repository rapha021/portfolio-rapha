import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../contexts/ModalContext";
import { twMerge } from "tailwind-merge";

interface IStackModalProps {
  title: string;
  ytbEnd: string;
}

const StackModal = ({ title, ytbEnd }: IStackModalProps) => {
  const {closeModal, isOpen } = useModal();

  return (
    <>
      <div
        id="backdrop"
        className={twMerge(
          "w-full h-full fixed top-0 flex flex-col justify-center items-center backdrop-blur-md z-10 transition-opacity duration-300 opacity-0",
          isOpen && "opacity-100"
        )}
      >
        <div
          id="modal"
          className="w-11/12 max-w-5xl h-[550px] fixed p-6 rounded-xl bg-gradient-to-br from-[rgba(253,253,253)] to-[rgb(255,39,104)] dark:from-[rgb(71,39,112)] dark:to-[rgb(52,21,78)] shadow-2xl"
        >
          <div id="wrapper" className="flex flex-col items-end w-full">
            <button
              onClick={closeModal}
              className="border-2 border-transparent rounded-md hover:border-gray-100 transition-all duration-150"
            >
              <AiOutlineClose size="24px" />
            </button>

            <section
              id="content"
              className="flex flex-col justify-center items-center gap-8 w-full"
            >
              <h2 className="font-poppins text-center text-2xl">{title}</h2>

              <iframe
                width="90%"
                className="max-w-[700px] rounded-md"
                height="350px"
                src={`https://www.youtube.com/embed/${ytbEnd}?si=yKFLAP58J-IHhQzf`}
                title={`${title} Demo Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackModal;
