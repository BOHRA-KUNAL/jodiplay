import React from 'react';

const AlertDialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

const AlertDialogContent = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

const AlertDialogHeader = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

const AlertDialogFooter = ({ children }) => {
  return <div className="flex justify-end space-x-2 mt-4">{children}</div>;
};

const AlertDialogTitle = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

const AlertDialogDescription = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};

const AlertDialogAction = ({ onClick, children }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const AlertDialogCancel = ({ onClick, children }) => {
  return (
    <button
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

