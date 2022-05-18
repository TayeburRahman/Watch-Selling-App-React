import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import img from "../../image/C1.png";
 
const Products = () => {
  const [product, setProduct] = useState([]);
  const [searchProduct,setSearchProduct] = useState([])
  console.log('searchProduct',searchProduct);

  useEffect(() => {
    fetch("https://shielded-island-32774.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    // setValue(searchText)
    const matchedProducts = product.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(matchedProducts);
  }

  return (
    <>
      <div className="m-5">
        <div className="text-left" sx={{ fontFamily: "Monospace" }}>
          <h3 className="d-grid" style={{justifyContent: 'center'}}>Watch</h3>
          <p className="text-secondary">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            you're ready for summer! Accessorize with a straw hat and you're
            ready
            <br />
            <br />
            for summer! Accessorize with a straw hat and you're ready for
            summer! Faded short sleeves t-shirt with high neckline. Soft and
            stretchy material for a comfortable fit. Accessorize with a straw
            hat and you're ready for summer!...
          </p>
          <img src={img} width="100%" alt="" />
        </div>
        <div className="product-section-name p-3 mt-3 mb-5" >
          <Grid container spacing={3} style={{alignItems: 'center',background: '#e2e2e2'}}> 
          <Grid className="p-3" item xs={12} md={6}>
              <h4>Showing {product.length} of {searchProduct?.length} products</h4>
            </Grid>
            <Grid className="p-3" item xs={12} md={6}> 
               <h4>Find Your Product</h4>
             <div className="search">
               <TextField
                 onChange={handleSearch}
                 id="outlined-basic"
                 variant="outlined"
                 fullWidth
                 label="Search"
               />
             </div>
            </Grid> 
          </Grid>
        </div>
        <div className="d-flex row product-row" style={{justifyContent: "center",flexWrap: 'wrap'}}>
          {searchProduct?.map((pd, idx) => (
            <Card idx={idx} className="col-md-4 col-lg-3 col-sm-12" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                width="100%"
                height="140"
                image={pd.img}
                alt="green iguana"
              />
              <Rating
                className="Rating"
                initialRating={pd.rating}
                emptySymbol="fa fa-star-o fa-2x Rating"
                fullSymbol="fa fa-star fa-2x Rating"
                fractions={2}
                readonly
              />{" "}
              <br /> <br />
              <Typography gutterBottom variant="h6" component="div">
                {pd.name}
              </Typography>
              <div className="d-flex product-row">
                <p class="text-decoration-line-through">{pd.oldPrice}</p>
                <p class="ms-3 me-3">{pd.updatePrice}</p>
              </div>
              <Link to={`/product/${pd._id}`}>
                <Button variant="contained" className=" mb-4">
                  Shop Now{" "}
                  <span className="ms-2">
                    {" "}
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        <div className="d-flex row product-row" style={{justifyContent: "center",flexWrap: 'wrap'}}>
        <h5 className=" text-left mb-2" style={{fontWeight: 600}} >Total Product:</h5>
          {product.map((pd, idx) => (
            <Card idx={idx} className="col-md-4 col-lg-3 col-sm-12" sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                width="100%"
                height="140"
                image={pd.img}
                alt="green iguana"
              />
              <Rating
                className="Rating"
                initialRating={pd.rating}
                emptySymbol="fa fa-star-o fa-2x Rating"
                fullSymbol="fa fa-star fa-2x Rating"
                fractions={2}
                readonly
              />{" "}
              <br /> <br />
              <Typography gutterBottom variant="h6" component="div">
                {pd.name}
              </Typography>
              <div className="d-flex product-row">
                <p class="text-decoration-line-through">{pd.oldPrice}</p>
                <p class="ms-3 me-3">{pd.updatePrice}</p>
              </div>
              <Link to={`/product/${pd._id}`}>
                <Button variant="contained" className=" mb-4">
                  Shop Now{" "}
                  <span className="ms-2">
                    {" "}
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
