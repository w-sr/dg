import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "components/atoms/Input";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Kpi } from "types/kpi";

Modal.setAppElement("#__next");

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
  kpi?: Kpi;
  isOpen: boolean;
  closeModal: () => void;
  submitModal: (data: Kpi) => void;
  deleteModal: (id?: string) => void;
}

const FormModal = ({
  kpi,
  isOpen,
  closeModal,
  submitModal,
  deleteModal,
}: IFormModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Kpi>();

  useEffect(() => {
    if (kpi) {
      reset({
        name: kpi.name,
        value: kpi.value,
        description: kpi.description,
      });
    } else {
      reset({
        name: "",
        value: "",
        description: "",
      });
    }
  }, [kpi]);

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
      <div className="flex justify-end mb-2">
        <FontAwesomeIcon
          icon={faClose}
          className="cursor-pointer"
          size="xl"
          onClick={onClose}
        />
      </div>

      <form onSubmit={handleSubmit(submitModal)}>
        <div className="py-2">
          <Input
            label="Name"
            name="name"
            register={register}
            error={errors.name}
            required
          />
        </div>
        <div className="py-2">
          <Input
            label="Description"
            name="description"
            register={register}
            error={errors.description}
            required
          />
        </div>
        <div className="py-2">
          <Input
            label="Value"
            name="value"
            register={register}
            error={errors.value}
            required
          />
        </div>
        <div className="flex justify-between mt-2">
          {kpi && (
            <button
              type="button"
              onClick={() => deleteModal(kpi?._id)}
              className="text-white bg-brown focus:outline-none rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="text-white bg-brown focus:outline-none rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {kpi ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { FormModal };
