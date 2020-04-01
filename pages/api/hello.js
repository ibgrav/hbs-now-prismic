export default (req, res) => {
  //this code is server-side and not available to the browser
  const secret = "I AM A SECRET! 12345";
  console.log({ secret });
  
  res.status(200).json({ message: "sent from the next.js api folder" });
}