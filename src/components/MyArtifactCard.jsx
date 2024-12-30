import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyArtifactCard = ({ artifact }) => {
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

  const handleDeleteArtifact = () => {
    fetch(`https://artifact-xi.vercel.app/artifacts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Artifact deleted successfully");
        }
      })
      .catch(err => {
        toast.error("Could not delete the Artifact");
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

      <Button className="mt-4 w-full" onClick={() => {}} color="warning">
        Update
      </Button>

      <Button
        className="mt-4 w-full"
        onClick={handleDeleteArtifact}
        color="failure"
      >
        Delete
      </Button>
    </div>
  );
};

export default MyArtifactCard;
