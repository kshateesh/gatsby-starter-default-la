export default function handler(req, res) {


  if (req.method === "GET") {
      console.log("Hello from eleventy website");
    res
      .status(200)
      .json({ method: "GET", route: "id", params: req.params })
  } else {
          console.log("Call not supported");
        res
      .status(500)
      .json({ error: "Bad Request" })
    
  }
  


}
