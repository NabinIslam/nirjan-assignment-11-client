import { useContext, useEffect, useState } from "react";
import ArtifactCard from "../components/ArtifactCard";
import { AuthContext } from "../provider/AuthProvider";
import MyArtifactCard from "../components/MyArtifactCard";
import { Helmet } from "react-helmet-async";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState(null);

  useEffect(() => {
    fetch(`https://artifact-xi.vercel.app/artifacts/my/${user?.email}`)
      .then(response => response.json())
      .then(data => setArtifacts(data));
  }, []);

  return (
    <main className="py-[100px]">
      <Helmet>
        <title>Artifact | My Artifact</title>
      </Helmet>
      <div className="container">
        {artifacts?.length === 0 ? (
          <h2 className="text-center font-bold text-4xl mb-5">
            You no added artifacts
          </h2>
        ) : (
          <>
            {" "}
            <h2 className="text-center font-bold text-4xl mb-5">
              All Artifacts
            </h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
              {artifacts?.map(artifact => (
                <MyArtifactCard key={artifact._id} artifact={artifact} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default MyArtifacts;
