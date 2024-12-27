import { Button, Label, Select, TextInput } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const visaData = {
      ...data,
      adder_name: user.name,
      adder_email: user.email,
    };

    fetch("http://localhost:5000/artifacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.acknowledged) {
          reset();
          toast.success("Artifact added successfully");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <main className="py-[100px]">
      <div className="container">
        <h2 className="text-center font-bold text-4xl mb-5">Add an Artifact</h2>
        <form
          className="w-full lg:w-1/2 mx-auto space-y-5"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Label>Artifact Image</Label>
            <TextInput
              {...register("artifact_image")}
              type="text"
              placeholder="Image URL"
              required
            />
          </div>

          <div>
            <Label>Artifact Name</Label>
            <TextInput
              {...register("artifact_name")}
              type="text"
              placeholder="Artifact Name"
              required
            />
          </div>

          <div>
            <Label>Artifact Type</Label>
            <Select {...register("artifact_type")} required>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </Select>
          </div>

          <div>
            <Label>Historical Context</Label>
            <TextInput
              {...register("historical_context")}
              type="text"
              placeholder="Historical Context"
              required
            />
          </div>

          <div>
            <Label>Created At</Label>
            <TextInput
              {...register("created_At")}
              type="text"
              placeholder="Created At"
              required
            />
          </div>

          <div>
            <Label>Discovered At</Label>
            <TextInput
              {...register("discovered_At")}
              type="text"
              placeholder="Discovered At"
              required
            />
          </div>

          <div>
            <Label>Discovered By</Label>
            <TextInput
              {...register("discovered_by")}
              type="text"
              placeholder="Discovered By"
              required
            />
          </div>

          <div>
            <Label>Present Location</Label>
            <TextInput
              {...register("present_location")}
              type="text"
              placeholder="Present Location"
              required
            />
          </div>

          <div>
            <Label>Artifact adder name</Label>
            <TextInput
              {...register("artifact_adder_name")}
              type="text"
              placeholder="Artifact adder name"
              defaultValue={user?.displayName}
              required
            />
          </div>

          <div>
            <Label>Artifact adder email</Label>
            <TextInput
              {...register("artifact_adder_email")}
              type="email"
              placeholder="Artifact adder name"
              defaultValue={user?.email}
              required
            />
          </div>

          <div>
            <Button type="submit">Add Artifact</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddArtifact;
