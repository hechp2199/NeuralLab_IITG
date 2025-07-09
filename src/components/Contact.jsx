import './css/Contact.css';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <div className="address">
        <p>
          Department of Biosciences and Bioengineering (BSBE)
          <br></br>
          Office No:6 (Ground floor), Block N
          <br></br>
          IIT Guwahati, India
          <br></br>
          Email: <a href="mailto:cngupta@iitg.ac.in">cngupta@iitg.ac.in</a>
          <br></br>
          Phone (Office): +91-(0)3612582232
        </p>
      </div>
      <div className="prospective-text">
        <h2>Note for Prospective Students:</h2>
        <ul>
          <li>Prospective PhD students have to apply as per the institute guidelines. Typically admissions are open twice a year (Jul and Dec). Please send a One page Research Statement and your college grade sheets. Also apply formally to IITG-BSBE PhD program.</li>
          <li>B.Tech/M.Tech projects open every summer. Students can contact with grade sheets.</li>
          <li>Junior Research fellow positions will be advertised from time to time. However, candidates with CSIR/UGC/ICMR or equivalent fellowship are encouraged to apply with a detailed CV throughout the year. </li>
          <li>Prospective post doctoral fellows are encouraged to apply or inquire with a CV (including a brief statement describing research experience and scientific interests, and the contact information of at least 2-3 references). For deserving candidates, based on mutual interests and suitability, the lab will support their application(s) for external fellowship(s).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact