import { useRouter } from "next/router";

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic part of the URL

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}
