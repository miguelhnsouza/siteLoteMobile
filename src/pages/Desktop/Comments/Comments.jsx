import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Comments() {
  // Lista de comentários
  const comments = [
    {
      name: "Noah Carter",
      role: "Food Critic",
      rating: 5,
      text: "One of the best meals I’ve had! The flavors were amazing, and the staff was friendly. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Mason Evans",
      role: "Student",
      rating: 3,
      text: "Most of my favorite shows aren’t available, and the pricing is too high for what’s offered. Not satisfied.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Ethan Russell",
      role: "Freelancer",
      rating: 2,
      text: "Took days to get a response, and the agent didn’t provide a clear solution. Very frustrating experience.",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Jessica Harper",
      role: "Fashion Blogger",
      rating: 5,
      text: "Fast delivery, great quality, and fantastic customer service. I will definitely shop here again!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section
      className="py-5 text-center text-white d-flex align-items-center"
      style={{
        background: "linear-gradient(15deg, #1d1844ff 25%, #2a1d9d, #0956bbff)",
        height: "auto",
      }}
    >
      <div className="container w-100 h-75">
        <h2 className="fw-bold fs-2 mb-5">
          <span style={{ color: "#00bcd4" }}>O que os nossos clientes</span>{" "}
          falam dos nossos produtos e serviços
        </h2>

        <div className="row g-4 justify-content-center">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch"
            >
              <div
                className="p-4 rounded-4 text-start w-100 h-100"
                style={{ border: "1px solid #00bcd4" }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={comment.img}
                    alt={comment.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0 text-white fw-bold">{comment.name}</h6>
                    <small className="text-secondary">{comment.role}</small>
                  </div>
                </div>

                <div className="mb-2 d-flex gap-1"
                style={{color: "#00bcd4",}}>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < comment.rating ? "bi-star-fill" : "bi-star"
                      }`}
                    ></i>
                  ))}
                </div>

                <p className="text-light" style={{ fontSize: "0.95rem" }}>
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
