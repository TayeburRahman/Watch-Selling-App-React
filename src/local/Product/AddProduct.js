import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import { useForm } from "react-hook-form";
import "./Products.css";

const AddProduct = () => {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://sleepy-journey-86126.herokuapp.com/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Order Successfully Send");
          reset();
        }
      }); 
  };

  return (
    <div>
      <Container maxWidth="sm BgImage ">
        <Grid container spacing={0} className="d-grid addProduct">
          <Grid item className="text-left m-5" xs={12} md={12}>
            <form className="text-left ms-2" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="width"
                type="text"
                {...register("name")}
                placeholder="Name"
              />{" "}
              <br /> <br />
              <input
                className="width"
                type="number"
                {...register("oldPrice")}
                placeholder="Old Price $"
              />{" "}
              <br /> <br />
              <input
                className="width"
                type="text"
                {...register("updatePrice")}
                placeholder="Update Price $"
              />{" "}
              <br /> <br />
              <input
                className="width"
                type="text"
                {...register("rating")}
                placeholder="Rating [0-5]"
              />{" "}
              <br /> <br />
              <input
                className="width"
                type="text"
                {...register("vendor")}
                placeholder="Vendor"
              />{" "}
              <br /> <br />
              <input
                className="width"
                {...register("img")}
                placeholder="Image url"
              />{" "}
              <br /> <br />
              <textarea
                className="text-from description width"
                {...register("description")}
                placeholder="Description"
              />{" "}
              <br /> <br />
              <input
                className="submit-from width buttons ps-4 pe-4 p-2"
                type="submit"
              />
            </form>
            ;
          </Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddProduct;
