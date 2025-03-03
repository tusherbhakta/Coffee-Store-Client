import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo
        }

        console.log(newCoffee);
        fetch('http://localhost:5000/newcoffee', {

            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }


    return (
        <div className='w-11/12 mx-auto mt-6'>
            <div>
                <h1 className='text-4xl font-bold text-center '>Add Coffee</h1>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam consequuntur non placeat eos expedita provident similique quam quas pariatur.</p>
            </div>
            <div>
                <form onSubmit={handleAddCoffee} className='mt-12 justify-center'>
                    <div className=' w-full md:w-1/2 mx-auto '>
                        <div className='flex justify-between   gap-12'>
                            <label className="form-control flex-col w-full  max-w-xs">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Available Quantity</span>
                                </div>
                                <input type="number" name='quantity' placeholder="Enter coffee Quantity" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className='flex justify-between  gap-12'>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Supplier</span>
                                </div>
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Taste</span>
                                </div>
                                <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className='flex justify-between  gap-12'>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className='flex-1 w-full gap-12'>
                            <label className="form-control flex-col w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Photo URL</span>
                                </div>
                                <input type="url" name='photo' placeholder="Enter photo url" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <input type="submit" className='btn btn-block font-semibold border-[#331A15] border-2 mt-8 bg-[#D2B48C] hover:bg-[#331A15] hover:border-[#D2B48C] hover:text-[#D2B48C] ' value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;