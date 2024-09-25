import React from 'react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-4">{content}</div>
        <div className="mt-4 flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <Link href="#" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;