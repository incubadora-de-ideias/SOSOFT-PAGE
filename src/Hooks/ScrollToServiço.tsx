import { useNavigate , useLocation} from "react-router-dom";

export default function ScrollToServiço() {
  const navigate = useNavigate();
const location = useLocation();
  

      const irParaServicos = () => {
        if (location.pathname === "/paginaInicial") {
        // já estou na página inicial → só scrollar
      const secao = document.getElementById("Serviços");
      secao?.scrollIntoView({ behavior: "smooth" });
    } else {
      // estou noutra página → navegar e pedir scroll
      navigate("/paginaInicial", { state: { scrollTo: "Serviços" } });
    }
      }
  

  return {irParaServicos}
   
  
}
