import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import './edit.css';
 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function EditModal({reset,register,handleSubmit,handleClose, product,open}) {
    
     const onSubmit = (data) => { 
        //  console.log(data)
        fetch(`https://sleepy-journey-86126.herokuapp.com/updateProduct/${product._id}`, {
         method: "PUT",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(data),
       })
         .then((res) => res.json())
         .then((result) => {
           if (result) {
             alert("Product Update Successful");
             reset();
             handleClose()
           }
         }); 
    }; 
    return (
        <div>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
               
                        <img width="80px" src={product.img} alt="" />
                   
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            Name
                        </span>
                        <br />
                        <input
                            style={{
                                height: '35px',
                                width: '100%',
                                marginBottom: '5px',
                                fontSize: 'revert'
                            }}
                            {...register('name')}
                            defaultValue={product?.name}
                        /> 
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                         Old Price
                        </span>
                        <input
                            style={{
                                height: '35px',
                                width: '100%',
                                marginBottom: '5px',
                                fontSize: 'revert'
                            }}
                            {...register('oldPrice')}
                            defaultValue={product?.oldPrice}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                            Update Price
                        </span>
                        <input
                            style={{
                                height: '35px',
                                width: '100%',
                                marginBottom: '5px',
                                fontSize: 'revert'

                            }}
                            {...register('updatePrice')}
                            defaultValue={product?.updatePrice}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                         Product Description
                        </span>
                        <textarea
                           style={{
                            height: '80px',
                            width: '100%',
                            marginBottom: '5px',
                            fontSize: 'revert'
                        }}
                         className="text-from description width "
                         required
                         {...register("description")}
                         defaultValue={product?.description}
                       />

                        <br />
                        <div className='d-flex' style={{justifyContent: 'space-between'}}>
                        <button
                            style={{
                                padding: '8px 14px',
                                color: 'white',
                                backgroundColor: 'rgb(31 165 130)',
                                border: 'none',
                                borderRadius: '4px',
                                marginRight: '5px',
                                fontSize:"15px"
                            }}
                            type="submit"
                        >
                            Update Product
                        </button>
                        <button
                         onClick={handleClose}
                            style={{
                                padding: '8px 14px',
                                color: 'white',
                                backgroundColor: 'rgb(230 60 86)',
                                border: 'none',
                                borderRadius: '4px',
                                marginRight: '5px',
                                fontSize:"15px"
                            }} 
                        >
                           Cancel
                        </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
