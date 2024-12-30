import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ArtifactCard = ({ artifact }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const isAllVisasPage = pathname === "/all-visas";

  const {
    _id,
    artifact_adder_email,
    artifact_adder_name,
    artifact_image,
    artifact_name,
    artifact_type,
    created_At,
    discovered_At,
    discovered_by,
    historical_context,
    present_location,
  } = artifact;

  const handleDeleteVisa = () => {
    fetch(`https://visa-master-server.vercel.app/visas/id/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Visa deleted successfully");
        }
      })
      .catch(err => {
        toast.error("Could not delete the visa");
      });
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <img
        src={artifact_image}
        alt={artifact_name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-bold">{artifact_name}</h3>
        <p className="text-sm text-gray-600">Artifact Type: {artifact_type}</p>
      </div>
      <Link to={`/artifact/${_id}`}>
        <Button className="mt-4 w-full">View Detail</Button>
      </Link>
      {/* {user && !isHomePage && !isAllVisasPage && (
        <>
          <Button className="mt-4 w-full" onClick={() => {}} color="warning">
            Update
          </Button>

          <Button
            className="mt-4 w-full"
            onClick={handleDeleteVisa}
            color="failure"
          >
            Delete
          </Button>
        </>
      )} */}
    </div>
  );
};

export default ArtifactCard;
