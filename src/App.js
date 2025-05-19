import logo from './image/logo.jpg'; // Ensure correct path to Vivdha logo
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="School-header">
        <div className="School-logo-container">
          <img src={logo} className="School-logo" alt="Vivdha The School Logo" />
        </div>
        <div className="School-text">
          <h1 className="School-title">Vividha The School</h1>
          <h2 className="School-subtitle">The Futuristic School of Excellence</h2>
          
        </div>
      </header>
      

      {/* Body Section */}
      <main className="School-body">
        <section className="School-intro">
          <h2>Welcome to Vividha The School</h2>
          <p>
            Empowering students with knowledge, skills, and excellence for a bright future.
          </p>
        </section>

        {/* Programs Section */}
        <section className="School-programs">
          <h2>Our Programs</h2>
          <div className="Programs-grid">
            {[
              "🎓 Playschool & Pre-Primary Education",
              "📚 Tuitions (Nursery - 10th)",
              "💃 Dance (Kuchipudi & Western)",
              "🎸 Music (Guitar & Keyboard)",
              "🥋 Karate Training",
              "🎨 Art & Craft Activities",
              "🤖 Robotics & STEM Learning",
            ].map((program, index) => (
              <div key={index} className="Program-card">
                {program}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="School-footer">
        <p className="School-contact">
          📞 Contact us: 83284 15068 | 99632 55300
        </p>
        <p className="School-address">
            12-1-532/5, Beside Vijaya Diagnostic Centre Lane, Ramananda Nagar Colony,<br />
            Road No. 1, Bandlaguda ,Nagole, Hyderabad, Telangana 500068
          </p>
      </footer>
    </div>
  );
}

export default App;
