import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//import {useNavigate} from "react-router-dom"
const Div = styled.div`
display:flex;
margin-top:30px;
gap:400px

`;

const Form = styled.form`
box-shadow:box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
justify-content:center;
align-items:center;
margin-auto;
padding-top:10px;
text-align:center;
margin-left:50px;
`;
const P=styled.p`
text-align:center;
font-size::20px;
font-weight:bold;
`
const Button= styled.button`
height:20px;
width:100px
background-color:rgba(255, 255, 255, 0.5);
`
const Div10= styled.div`
padding-top:10px;
display:flex;
gap:30px

`
const Div13=styled.div`
display:flex;
gap:100px;
margin:auto;
justify-content:center;
`
const Img=styled.img`
height:50px;
width:80px
`

const Signup = ({ submitForm }) => {
  const navigate = useNavigate();
  const [name, setname] = React.useState("");

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [formData, setFormData] = React.useState({
    status: false,
  });
  const handleChange = (e) => {
    const type = e.target.name;
    if (type === "name") {
      const inputName = e.target.value;
      setname(e.target.value);
      setFormData({ ...formData, [inputName]: e.target.value });
    } else if (type === "email") {
      const inputName = e.target.value;
      setemail(e.target.value);
      setFormData({ ...formData, [inputName]: e.target.value });
    } else if (type === "password") {
      const inputName = e.target.value;
      setpassword(e.target.value);
      setFormData({ ...formData, [inputName]: e.target.value });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const postvalue = {
      name: name,
      email: email,

      password: password,
    };
    const data = JSON.parse(localStorage.getItem("registeration")) || [];
    data.push(postvalue);
    localStorage.setItem("registeration", JSON.stringify(data));
    setname("");
    setemail("");

    setpassword("");
    alert("Registeration Success!");
    // navigate("/signin")
  };

  return (
    
    <Div>
      <div>
        <Div13>
          <Img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAflBMVEX+vwAAAAD/wgD/xAD/xgD/yABrUADwtwD6vgDYpQDQnwDYogCNagD/ywAYEQDlsAC7jgAwJAAmHAD/0ADgqwAhGADLmQA5KwBCMgBNOgA2KAClfABbRAAKBgAqHwCbdwCuhABjSgB8XgCTcACFZADBlgB0WgATDABUPwAcFQCxATT/AAAFCklEQVRoge2ae3PqLBCHZQEhMQqmaYymGrzEy/f/gi/kYtoaBc6c8cy8w/NHm0lXfiyX3QU7mQQCgUAgEAgEAoHATwAw0WCAdyvT+YRFtaqS5FjWGabv7cBp+blAPdvdIefkfeJ4in5RKPY2fZz8VkdoVeM3qZPyUR2hKXnP9ON8TB3txFvch6yVuxRF+l0+nb1l8llxPspYCMaYyA+bu/wtf4s80HuYwZTJ1V0/f9faG8DkeJ/7N278OzTu9v2fuA64wTFkw4g5zsz6K5jfpgNCOBOzvJZS5nEmOH65a3VmacxzKWttzgZzLDZomXm5jkGow9du2DOL9bSKOH7SAQxMmy9/mB9nnTlmGy9xysv1WNS4JdlY1qJcjZqnp2je6nsMO2GH0YjV8DWjD+Yjwb2niH+bvwaw2j5vTXP4uQSpur02Zx6jDvz8sjHN+lt7wE9Wc59J/7K1htBm2D78xST1pJnrtM/39tb0bPLOnFo9N1wcncej+fmRc7uWiHIz3ztFWWBurfU5g71ecANO5Q15sXd+sjbOk8rZnFu1tS+pvaEOs5KoszWK7c4/qYtGOeIJxO7mB3vQodatPnCFyZC77RT2oYfRaP0EPoGH4v05n8K659nK3swdAXxpt7oT29RBfHo0FwG/eJjnVvXMdfs26ph7WKP6L6uDl7rV94nwmcgMuE9n7eq88GiOgc8W2UZWdbx3b27HJ9ghu/ZsmE3cI27rLIcn2DHDGb7skbY/A7ogdXPOGRGh0iXHOhQ2HWYaqbP5RTiI49q1uaPxxT3NnJyqG+zozWebNKhrpHc7R7kWN3U3jWxht0XtInFy3mkwyz5b4+h17d+SzN3E9a5zqDCqwRUc2+UTj3qezCwRbyu/7x6c2cyV3/GVv6xZ9uLn1gV+fJVpvzLfOwsqnta2+/jxEEvF0+5+5X9yU0txfXqob7dTxccbI7Q+bR6kpyX701tijLmoq9O043CUGYfnM2jM88H8fFQRxz7H9gcAE9xfxJhHB/MesJsHAoG/BQEG83+15Zpyc+8d4B95dj088hruAQZHlTym9oPjGJw1mI/q8JkJAP2mfW/eMYY5E0JwU9Qy3v5B91JEeSRMZ/WHZjPB2TXC0DblIQ6z2zJN081UP6qiGUJYrcQEy3QjAMvFaXY1CWgtgRY7XavS8lJRMTVVxvasLfKrSTG7I2B2XqW73efe47IUZuiqlFqjcp6ghZI6e+qEX5F5YapyckVxuT0pWd5QPU+RwJRdUET6+m4D0T3FfezR+pgkiVMtP6hP9XgnqM7QhnOOc3QSKCUR2uy28wit6OQDZ3F+QsnHDtWx7p2cD9d89VDmsuUi11OU+XwxoNXbrnOJupptTfdIq8gDyhKkqNibl4tGXbOMKR7KCzUUWrPuKsThxui7+t58xaDrErSSeg6UlKRGh92N5ShZfgqyRUkseNmoK3VIUfLtACj3g++bSyk1Mz/fp3oV68qaFajket1WGZgbnTPhaXNHipYZZNWyUWeEsqs26xUvTPaPxcdyIUzK99l4/chrj7Ju6CIwl5gxNt/xxkBb71bo9IGQaM+etCusLzGh3RooGN4i59vpOyyPDYxMgGaqKqVZNTw3sUP/SRvQSKkcWJ6ROG5OVHHOMYnLqtQd1GGW11WlMqqPebHLBelv71uaR9yPHHz/2bzTz10kbH7BMMb9h97/rw+BQCAQCAQCgUAgEAgE/kf8B2uRSXxsZb2AAAAAAElFTkSuQmCC"
            alt=""
          />
          <h1>Create Your Account</h1>
        </Div13>
        {/* register */}
        <div>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <P> Name </P>
              <input
                style={{
                  height: "20px",
                  width: "300px",
                  borderRadius: "5px",
                  textAlign: "center",
                  border: "1.5px solid black",
                  marginLeft: "31px",
                }}
                type="email"
                name="email"
                placeholder="johnsmith"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <P>Email </P>
              <input
                style={{
                  height: "20px",
                  width: "300px",
                  borderRadius: "5px",
                  textAlign: "center",
                  border: "1.5px solid black",
                  marginLeft: "31px",
                }}
                type="email"
                name="email"
                placeholder="johnsmith@mail.com"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <P>Password</P>
              <input
                style={{
                  height: "20px",
                  width: "300px",
                  borderRadius: "5px",
                  border: "1.5px solid black",
                  borderradius: "5px",
                  marginLeft: "31px",
                  textAlign: "center",
                }}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <Div10>
              <input
                style={{ marginLeft: "50px" }}
                type="checkbox"
                name="checkbox"
              />
              <Button
                style={{
                  backgroundColor: "rgb(48, 112, 240)",
                  height: "30px",
                  width: "200px",
                  borderRadius: "5px",
                  border: "1.5px solid black",
                }}
                type="submit"
                onClick={() => navigate("/login")}
              >
                Sign Up
              </Button>
            </Div10>
          </Form>
          <div>
            <P>I accept Terms of Service</P>
          </div>
        </div>
       
        
        <P>or</P>
        
        <div>
          {/* <div>
            <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
            <P>Sign Up with Google</P>
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "100px",
              gap: "15px",
              border: "1px solid black",
              borderRadius: "5px",
              height: "25px",
              width: "70%",
              marginTop: "10px",
            }}
          >
            <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
            <P style={{ cursor: "pointer", marginTop: "1px" }}>
              Sign Up with Apple
            </P>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "100px",
              gap: "15px",
              border: "1px solid black",
              borderRadius: "5px",
              height: "25px",
              width: "70%",
              marginTop: "10px",
            }}
          >
            <img
              src="https://id.tmetric.com/images/microsoft_logo.svg"
              alt=""
            />
            <P>Sign Up with Microsoft</P>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "100px",
              gap: "15px",
              border: "1px solid black",
              borderRadius: "5px",
              height: "25px",
              width: "70%",
              marginTop: "10px",
            }}
          >
            <img src="https://id.tmetric.com/images/apple_logo.svg" alt="" />
            <P>Sign Up with Apple</P>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
          alt=""
        />
      </div>
    </Div>
  );
};

export default Signup;
