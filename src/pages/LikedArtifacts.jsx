import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);

  const [artifacts, setArtifacts] = useState(null);

  useEffect(() => {
    fetch(`https://artifact-xi.vercel.app/artifacts/liked/${user?.email}`)
      .then(response => response.json())
      .then(data => setArtifacts(data));
  }, []);

  return (
    <main className="py-[100px]">
      <Helmet>
        <title>Artifact | Liked Artifact</title>
      </Helmet>
      {artifacts?.length === 0 ? (
        <h2 className="text-center font-bold text-4xl mb-5">
          No liked artifact found
        </h2>
      ) : (
        <div className="container">
          <h2 className="text-center font-bold text-4xl mb-5">All Artifacts</h2>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
            {artifacts?.map(artifact => (
              <ArtifactCard key={artifact._id} artifact={artifact?.artifact} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default LikedArtifacts;
