import { useParams } from "react-router-dom";

function SurahPage() {
  const { id } = useParams();

  console.log(id);

  return <div>SurahPage</div>;
}

export default SurahPage;
