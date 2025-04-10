import React from "react";
import Box from "./component/Box";
// ana component'ten objectler ile şekil oluşturma

function Mondrian() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      backgroundColor: "rgb(0, 24, 45)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position : "fixed",
      top : 0,
      left : 0
    }}>
      <div style={{
        position: "relative",
        width: "500px",
        height: "500px"
      }}>
        <Box width="225px" height="225px" top="50px" left="55px" backgroundColor="red" position="absolute"></Box>
        <Box width="115px" height="40px" top="0px" left="0px" backgroundColor="beige" position="absolute"></Box>
        <Box width="170px" height="40px" top="0px" left="131px" backgroundColor="beige" position="absolute"></Box>
        <Box width="150px" height="40px" top="0px" left="298px" backgroundColor="beige" position="absolute"></Box>
        <Box width="30px" height="40px" top="0px" left="460px" backgroundColor="beige" position="absolute"></Box>
        <Box width="40px" height="128px" top="50px" left="0px" backgroundColor="beige" position="absolute"></Box>
        <Box width="40px" height="170px" top="190px" left="0px" backgroundColor="beige" position="absolute"></Box>
        <Box width="40px" height="110px" top="370px" left="0px" backgroundColor="beige" position="absolute"></Box>
        <Box width="100px" height="120px" top="290px" left="50px" backgroundColor="rgb(1, 4, 30)" position="absolute"></Box>
        <Box width="100px" height="53px" top="426px" left="56px" backgroundColor="beige" position="absolute"></Box>
        <Box width="110px" height="53px" top="290px" left="167px" backgroundColor="beige" position="absolute"></Box>
        <Box width="110px" height="60px" top="350px" left="167px" backgroundColor="beige" position="absolute"></Box>
        <Box width="110px" height="22px" top="427px" left="170px" backgroundColor="rgb(1, 4, 30)" position="absolute"></Box>
        <Box width="273px" height="15px" top="465px" left="170px" backgroundColor="beige" position="absolute"></Box>
        <Box width="150px" height="130px" top="50px" left="295px" backgroundColor="yellow" position="absolute"></Box>
        <Box width="72px" height="90px" top="190px" left="295px" backgroundColor="beige" position="absolute"></Box>
        <Box width="74px" height="90px" top="190px" left="372px" backgroundColor="beige" position="absolute"></Box>
        <Box width="152px" height="50px" top="293px" left="293px" backgroundColor="beige" position="absolute"></Box>
        <Box width="152px" height="96px" top="355px" left="293px" backgroundColor="rgb(5, 5, 89)" position="absolute"></Box>
        <Box width="30px" height="325px" top="52px" left="460px" backgroundColor="beige" position="absolute"></Box>
        <Box width="30px" height="125px" top="355px" left="460px" backgroundColor="rgb(214, 80, 53)" position="absolute"></Box>
      </div>
    </div>
  )
}

export default Mondrian;