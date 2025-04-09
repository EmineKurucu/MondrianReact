import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function InitialPage() { // export tanımlayınca başka dosyada kullanabiliriz
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/mondrian");
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome to Composition with Red, Blue and Yellow</h1>
        <p style={styles.paragraph}>Enter your name to see the painting of Piet Mondrian</p>
        <form autoComplete="on" onSubmit={handleSubmit} style={styles.form}>
          <table>
            <tbody>
              <tr>
                <td>Name Surname: </td>
                <td>
                  <input
                    name="nameSurname"
                    type="text"
                    size="25"
                    maxLength="50"
                    required
                    placeholder="Name Surname"
                    autoFocus
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button type="submit"  name= "Submit" style={styles.button}>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100vh",
    marginTop: "20px",
    backgorunColor : "rgb(0, 24, 45)"

  },


  header: {
    fontSize: "2em",
    margin: 0, 
    padding: "10px"
  },


  paragraph: {
    fontSize: "1.2em",
    margin: 0,
    padding: "10px"
  },


  form: {
    marginTop: "20px", 
  },

  button: {
    padding: "10px 20px",
    fontSize: "1em",
    marginTop: "20px" 
  }


};

export default InitialPage;