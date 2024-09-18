import LoginModal from "../components/LoginModal";

export default function Login() {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="row g-5">
            <LoginModal btnStyle={"button--login"} />
          </div>
        </div>
      </section>
    </>
  );
}
