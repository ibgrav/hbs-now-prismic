export default (req, res) => {
  //this code is server-side and not available to the browser
  res.status(200).json({ message: "sent from the next.js api folder" });
}