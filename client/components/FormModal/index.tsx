import { Input } from "components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "react-modal";
import { IFormInput } from "types/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface IFormModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const FormModal = ({ isOpen, closeModal }: IFormModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const onClose = () => {
    reset();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={false}
    >
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faClose}
          className="cursor-pointer"
          size="xl"
          onClick={onClose}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <Input
            label="name"
            register={register}
            error={errors.name}
            required
          />
        </div>
        <div className="py-2">
          <Input
            label="description"
            register={register}
            error={errors.description}
            required
          />
        </div>
        <div className="py-2">
          <Input
            label="value"
            register={register}
            error={errors.value}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export { FormModal };
