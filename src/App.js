import logo from './image/logo.jpg'; // Ensure correct path to Vivdha logo
import './App.css';
import school1 from './image/school1.jpg'; // Ensure correct path to school image 1
import school2 from './image/school2.jpg'; // Ensure correct path to school image 2
import school3 from './image/school3.jpg'; // Ensure correct path to school image 3



setInterval(() => {
  const container = document.querySelector('.photo-container');
  
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    // Reset scroll position to start when reaching the end
    container.scrollLeft = 0;
  } else {
    // Move forward by a step
    container.scrollLeft += 100; // Adjust step size if needed
  }
}, 2000);

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
    
  </section>

  {/* Photo Gallery Section */}
  <section className="School-photos">
    <div className="photo-container">

      <img src={school1} alt="School 1" />
      <img src={school2} alt="School 2" />
      <img src={school3} alt="School  3" />
      <img src={school1} alt="School 1" />
      <img src={school2} alt="School 2" />
      <img src={school3} alt="School  3" />
      <img src={school1} alt="School 1" />
    </div>
  </section>
  <p>
      Empowering students with knowledge, skills, and excellence for a bright future.
    </p>



        {/* Programs Section */}
        <section className="School-programs">
          <h2>Our Programs</h2>
          <div className="Programs-grid">
            {[
              "🎓 Playschool & Pre-Primary Education (Nursery - 5th)",
              "📚 Tuitions (Nursery - 10th)",
              "💃 Dance (Kuchipudi & Western)",
              "🎸 Music (Guitar & Keyboard)",
              "🥋 Karate ",
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
      <section className="admission-block">
  <h2>Admissions are open</h2>
  <p>For enquiries regarding admissions, please contact:</p>
  <p><strong>Phone:</strong> +91  99632 55300</p>
  <p><strong>Email:</strong> admissions@vividhaschool.com</p>
</section>

      {/* Footer Section */}
      <footer className="School-footer">
        <p className="School-contact">
          📞 Contact us: 83284 15068 | 99632 55300
        </p>
        <p className="School-address">
            12-1-532/5,  Road No. 1, Ramananda Nagar Colony,
            ,Bandlaguda ,Nagole, Hyderabad, Telangana 500068
          </p>
      </footer>
    </div>
  );
}

export default App;
