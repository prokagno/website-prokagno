"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Client Component Wrapper to avoid hydration issues
function ClientOnlyPopup({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return children;
}

const PopupComponent = ({
  isOpen: externalIsOpen,
  onClose = () => {}, // Default empty function to prevent errors
  children,
  title = "Notification",
  showCloseButton = true,
  backgroundOpacity = 0.7,

  autoOpen = true, // Changed to true by default
  autoOpenDelay = 1000, // Delay in milliseconds
  storageKey = "popupStatus", // Add storage key for localStorage
}) => {
  // Internal state to manage popup visibility
  const [internalIsOpen, setInternalIsOpen] = useState(false); // Default to false initially

  // Check localStorage on component mount
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const popupClosed = localStorage.getItem(storageKey) === "closed";

      // If popup was not closed before, respect the external isOpen prop or set to false
      if (!popupClosed) {
        setInternalIsOpen(
          externalIsOpen !== undefined ? externalIsOpen : false
        );
      }
    }
  }, [externalIsOpen, storageKey]);

  // Sync internal state with external prop if provided
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setInternalIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  // Auto-open logic
  useEffect(() => {
    let timer;
    if (autoOpen && !internalIsOpen) {
      // Check localStorage before auto-opening
      const popupClosed = localStorage.getItem(storageKey) === "closed";

      if (!popupClosed) {
        timer = setTimeout(() => {
          setInternalIsOpen(true);
        }, autoOpenDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [autoOpen, autoOpenDelay, internalIsOpen, storageKey]);

  // Handle ESC key to close popup
  useEffect(() => {
    const handleEscKey = (event) => {
      if (internalIsOpen && event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [internalIsOpen]);

  // Custom close handler to update internal state and call parent onClose
  const handleClose = () => {
    setInternalIsOpen(false);
    // Save to localStorage that user closed the popup
    localStorage.setItem(storageKey, "closed");
    onClose();
  };

  if (!internalIsOpen) return null;

  return (
    <ClientOnlyPopup>
      <div className="fixed inset-0 mt-20 z-50 flex items-center justify-center">
        {/* Semi-transparent background overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: backgroundOpacity }}
          onClick={handleClose}
        />

        {/* Popup container */}
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden w-11/12 max-w-md animate-fadeIn">
          {/* Rest of component remains the same, just update onClose to handleClose */}
          <div className="bg-orange-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium text-lg">{title}</h3>
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>

          <div className="w-full">
            <Image
              src="https://drive.usercontent.google.com/download?id=1jb9sjvCqRMTPzpE7C6KcmdcwsB43hUk-"
              alt="Popup image"
              width={700}
              height={400}
              className="w-full object-cover "
            />
          </div>

          <div className="p-6 bg-white">{children}</div>

          <div className="bg-orange-100 px-4 py-3 flex justify-end">
            <button
              onClick={handleClose}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </ClientOnlyPopup>
  );
};

export default PopupComponent;
