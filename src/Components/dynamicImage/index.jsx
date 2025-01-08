import useFetch from "../useFetch/useFetch"








function ImageGallery() {

    const {data, loading} = useFetch('https://dummyjson.com/users');
    console.log(data);




    return (
       <div>
            

            {
                loading ? (
                    <h1>Loading...</h1>
                ):  (              
                                        <table border="1" className=" w-full" >
                                    
                                        <thead className="divide-y divide-gray-200">
                                            <tr className="even:bg-gray-100 odd:bg-white" >
                                                <th className=" border sm:text-xs p-2">First Name</th>
                                                <th className=" border p-2">Last Name</th>
                                                <th className=" border p-2">Email</th>
                                                <th className=" border p-2">Image</th>
                                            </tr>
                                        </thead>
                
                                
                                        <tbody className="divide-y divide-gray-200">
                                            {
                                                data?.users?.map((user) => (
                                                    <tr className="even:bg-gray-100 odd:bg-white"  key={user.id}>
                                                        <td className=" border">{user.firstName}</td>
                                                        <td className=" border">{user.lastName}</td>
                                                        <td className=" border">{user.email}</td>
                                                        <td className=" border flex justify-center">
                                                            <img 
                                                                src={user.image} 
                                                                alt={`${user.firstName} ${user.lastName}`} 
                                                                width="50" 
                                                                height="50"
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    )
                                }
                           </div>
                        )
           
                    }

export default ImageGallery