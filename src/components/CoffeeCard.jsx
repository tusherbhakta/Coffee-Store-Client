// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// const CoffeeCard = ({coffee}) => {
//     const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;
//     const handleDelete = _id => {
//         console.log(_id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
//             //   Swal.fire({
//             //     title: "Deleted!",
//             //     text: "Your file has been deleted.",
//             //     icon: "success"
//             //   });

//             fetch(`http://localhost:5000/newCoffee/${_id}`,
//                 {
//                     method: 'DELETE'
//                 }
//             )
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if(data.deletedCount > 0){
//                     Swal.fire({
//                         title: 'Deleted!',
//                         text: 'Coffee deleted successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Ok'
//                       })
//                 }
//             })
//             }
//           });
//     }


//     return (
//         <div className="card card-side bg-base-100 shadow-xl">
//             <figure>
//                 <img
//                     src={photo}
//                     alt="coffee photo" />
//             </figure>
//             <div className="card-body">
//                 <h2 className="card-title">Name: {name}</h2>
//                 <p>Supplier: {supplier}</p>
//                 <p>Quantity: {quantity}</p> 
//             </div>
//             <div className="flex flex-col gap-4 justify-center pr-6">
//                     <button className="btn btn-primary">View</button>
//                     <button className="btn btn-primary">Edit</button>
//                     <button className="btn btn-primary" onClick={() => handleDelete(_id)} >Delete</button>
//                 </div>
//         </div>
//     );
// };

// export default CoffeeCard;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, photo } = coffee;
    const [isVisible, setIsVisible] = useState(true); // Control visibility

    useEffect(() => {
        if (!isVisible) {
            // This will force React to remove the component after state update
            setTimeout(() => setIsVisible(false), 0);
        }
    }, [isVisible]); // Runs when `isVisible` changes

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/newCoffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Coffee deleted successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                            });

                            setIsVisible(false); // Hides the component immediately
                        }
                    });
            }
        });
    };

    if (!isVisible) return null; // Hide the card when deleted

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt="coffee photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Supplier: {supplier}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className="flex flex-col gap-4 justify-center pr-6">
                <button className="btn btn-primary">View</button>
                <Link to={`updateCoffee/${_id}`} >
                    <button className="btn btn-primary">Edit</button>
                </Link>

                <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;
