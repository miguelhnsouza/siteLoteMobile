import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imgBlack from "../../assets/images/banner-BlackFriday.jpg";

export default function BlackFridayModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    sessionStorage.setItem("blackfridayShown", "true");
  };

  if (!showModal) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.8)",
      }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content border-0 bg-transparent position-relative">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 bg-light rounded-circle p-2"
            aria-label="Fechar"
            onClick={handleClose}
          ></button>

          <img
            src={imgBlack}
            alt="Black Friday"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}
