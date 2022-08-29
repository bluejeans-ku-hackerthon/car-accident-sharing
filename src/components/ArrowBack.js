import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function ArrowBack({ url }) {
  const navigate = useNavigate();

  return (
    <ArrowBackIcon
      cursor="pointer"
      w={8}
      h={8}
      mt="2rem"
      onClick={() => navigate(url)}
    />
  );
}
