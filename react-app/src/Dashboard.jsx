let content;
let isLoggedIn = false;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

export default function Dashboard() {
  return <>
    {content}
   {isLoggedIn && <AdminPanel />}
   {!isLoggedIn && <LoginForm />}
  </>
}

function AdminPanel() {
  return (
    <>
      <div className="col-xxl-5">
        <div className="text-center text-xxl-start">
          <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
            <div className="text-uppercase">Design · Development · Marketing</div>
          </div>
          <div className="fs-3 fw-light text-muted">Saya seorang pengajar</div>
          <h1 className="display-3 fw-bolder mb-5">
            <span className="text-gradient d-inline">Get online and grow fast</span>
          </h1>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
            <a
              className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
              href="resume.html"
            >
              Resume
            </a>
            <a
              className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
              href="projects.html"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function LoginForm() {
  return (
    <>
      username <input type="text" />
      password <input type="text" />
      <input type="submit" value="Login" />
    </>
  );
}
