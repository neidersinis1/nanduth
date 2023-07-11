// import { useCallback, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import useUsers from "@/hooks/useUsers";
// import { HiSearchCircle } from "react-icons/hi";

// // import useCurrentUser from "@/hooks/useCurrentUser";

// // import Button from "./Button";
// import Avatar from "./Avatar";

// interface SearchProps {
//   placeholder: string;
//   // id: boolean
// }

// const SearchUsuario: React.FC<SearchProps> = ({ placeholder }) => {
//   // const { data: currentUser } = useCurrentUser();

//   // const [isLoading, setIsLoading] = useState(false);
//   const [search, setSearch] = useState("");

//   const { data: users = [] } = useUsers();

//   const searcher = (e: any) => {
//     setSearch(e.target.value);
//     console.log(e.target.value);
//   };

//   let result = [];
//   if (!search) {
//     result = [];
//   } else {
//     result = users.filter((dato: any) =>
//       dato.name.toLowerCase().includes(search.toLocaleLowerCase())
//     );
//   }

//   return (
//     <>
//       <div className="flex ml-5 flex-col gap-4">
//         <div className="flex ">
//           <div className=" mr-3">
//             <label className="cursor-pointer w-60 mr-10" htmlFor="textarea">
//               <HiSearchCircle size={45} color="white" />
//             </label>
//           </div>
//           <div className="">
//             <textarea
//               onChange={searcher}
//               id="textarea"
//               value={search}
//               placeholder={placeholder}
//               className="
//               disabled:opacity-80
//               peer
//               resize-none
//               mt-3
//               w-full
//               bg-black
//               ring-0
//               outline-none
//               text-[20px]
//               placeholder-gray-400
//               text-white
//             "
//             ></textarea>
//             <hr
//               className="
//                 opacity-0
//                 peer-focus:opacity-100
//                 h-[1px]
//                 w-full
//                 border-2px
//                 border-gray-800
//                 transition"
//             />
//           </div>
//         </div>


//       </div>
//     </>
//   );
// };

// {/* <div className="flex flex-col gap-6 mt-4"> */ }
// // {result.map((user) => (
// // <div key={user.id} className="flex flex-row gap-4">
// //   <Avatar userId={user.id} />
// //   <div className="flex flex-col">
// //     <p className="text-white font-semibold text-sm">{user.name}</p>
// //     <p className="text-gray-400 text-sm">@{user.username}</p>
// // </div>
// // </div>
// // ))}
// // </div>

// export default SearchUsuario;
