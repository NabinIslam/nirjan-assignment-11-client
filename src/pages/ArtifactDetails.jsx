import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [likedArtifact, setLikedArtifact] = useState(null);
  const [likeCount, setLikeCount] = useState(null);

  useEffect(() => {
    fetch(`https://artifact-xi.vercel.app/artifacts/liked/${user?.email}`)
      .then(response => response.json())
      .then(data => setLikeCount(data));
  }, [likeCount]);

  useEffect(() => {
    fetch(`https://artifact-xi.vercel.app/artifacts/${id}`)
      .then(response => response.json())
      .then(data => setArtifact(data));
  }, []);

  const handleLikeArtifact = () => {
    const likedData = { artifact, liked_by: user?.email };

    fetch(`https://artifact-xi.vercel.app/artifacts/liked`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likedData),
    })
      .then(response => response.json())
      .then(data => setLikedArtifact(data));
  };

  return (
    <main>
      <div className="container flex flex-col gap-5 items-center justify-center py-[100px]">
        <img className="h-[200px] w-[350px]" src={artifact?.artifact_image} />
        <h1 className="text-4xl font-bold">{artifact?.artifact_name}</h1>
        <h2>Artifact Type: {artifact?.artifact_type}</h2>
        <h2>Created At: {artifact?.created_At}</h2>
        <h2>Discovered At: {artifact?.discovered_At}</h2>
        <h2>Discovered By: {artifact?.discovered_by}</h2>
        <h2>Historical Context: {artifact?.historical_context}</h2>
        <h2>Present Location: {artifact?.present_location}</h2>

        <Button onClick={handleLikeArtifact}>Like</Button>

        <h2>Total Likes: {likeCount?.length}</h2>
      </div>
    </main>
  );
};

export default ArtifactDetails;
