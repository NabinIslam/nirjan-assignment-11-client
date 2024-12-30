import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ArtifactCard from "../components/ArtifactCard";

const HomePage = () => {
  const [artifacts, setArtifacts] = useState(null);

  useEffect(() => {
    fetch(`https://artifact-xi.vercel.app/artifacts`)
      .then(response => response.json())
      .then(data => setArtifacts(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="py-[100px]">
      <Helmet>
        <title>Artifact | Home</title>
      </Helmet>
      <div className="container">
        <h2 className="text-center font-bold text-4xl mb-5">All Artifacts</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {artifacts?.map(artifact => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
