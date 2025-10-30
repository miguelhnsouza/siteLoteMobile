import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./commentsMobile.css";

export default function CommentsMobile() {
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
    <section className="comments-carousel-section-mobile text-white px-4 py-5">
      <h2 className="carousel-title-mobile fw-bold text-center">
        O que os nossos clientes <br />
        <span>falam sobre nós</span>
      </h2>

      <div
        id="carouselCommentsMobile"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores (bolinhas) */}
        <div className="carousel-indicators">
          {comments.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselCommentsMobile"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner mb-5">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="comment-card-mobile mx-auto">

                <div className="comment-header-mobile">
                  <img
                    src={comment.img}
                    alt={comment.name}
                    className="profile-img-mobile"
                  />
                  <div>
                    <h6 className="fw-bold">{comment.name}</h6>
                    <small>{comment.role}</small>
                  </div>
                </div>

                <div className="stars-mobile d-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < comment.rating ? "bi-star-fill" : "bi-star"
                      }`}
                    ></i>
                  ))}
                </div>

                <p className="comment-text-mobile">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Setas
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCommentsMobile"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCommentsMobile"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button> */}
      </div>
    </section>
  );
}
