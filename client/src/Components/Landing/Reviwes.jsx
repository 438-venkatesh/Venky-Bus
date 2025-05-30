import styles from "../../Styles/landing.module.css";
function Reviews() {
  return (
    <>
      <h2
        style={{
          marginBottom: "28px",
          color: "#4a4a4a",
          textAlign: "center",
          fontWeight: 800,
          fontSize:"30px",
        }}
      >
        Customer Reviews
      </h2>
      <div className={styles.reviewmain}>
        <div className="card">
          <img
            src={require("../../Images/venky.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">P.Venkatesh</h5>
            <p className="card-text">
              I travel between Hyderabad and Vijayawada often, and Venky Bus is always my first choice. The buses are clean, seats are comfortable, and the ride is always on time.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../Images/ashu.png")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">K.Ashwanth</h5>
            <p className="card-text">
              Booking online was super easy and convenient. The driver was polite and the journey was smooth. I just wish the Wi-Fi was a bit faster
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={require("../../Images/ani.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">T.Anirudh</h5>
            <p className="card-text">
              From seat selection to live tracking, everything was seamless. I appreciate the cleanliness and punctuality. Will definitely travel again!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
