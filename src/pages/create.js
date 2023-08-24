import RootLayout from "@/components/Layouts/RootLayout";
import { useForm } from "react-hook-form";

export default function CreateNews() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch("/api/news", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            alert("news created successfully..");
        }
      });
  };

  return (
    <>
    <dir>
        <h1 style={{textAlign:'center', marginTop:'40px'}} >Create news</h1>
    </dir>
    <form onSubmit={handleSubmit(onSubmit)} 
    style={{
        width:"50%",
        margin:"auto",
        marginTop:'70px'
    }}>
      <input {...register("id", { required: true })} placeholder="Id" style={{marginBottom:"10px",width:'100%'}} /> <br />
      <input {...register("title", { required: true })} placeholder="Title" style={{marginBottom:"10px",width:'100%'}}/> <br />
      <input
        {...register("description", { required: true })}
        placeholder="description"
        style={{marginBottom:"10px",width:'100%'}}
      /> <br />
      <input {...register("author", { required: true })} placeholder="author" style={{marginBottom:"10px",width:'100%'}} /> <br />
      <input
        {...register("category", { required: true })}
        placeholder="category"
        style={{marginBottom:"10px",width:'100%'}}
      /> <br />
      <input
        {...register("comment_count", { required: true })}
        placeholder="comment_count"
        style={{marginBottom:"10px",width:'100%'}}
      /> <br />
      <input
        {...register("release_date", { required: true })}
        placeholder="release_date"
        style={{marginBottom:"10px",width:'100%'}}
        
      /> <br />
      <input
        {...register("image_url", { required: true })}
        placeholder="image_url"
        style={{marginBottom:"10px",width:'100%'}}
      /> <br />
 
      <input style={{margin:'10px 0px', width:'100%'}} type="submit" value="Create News" /> <br />
    </form>
    </>
  );
}

CreateNews.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};