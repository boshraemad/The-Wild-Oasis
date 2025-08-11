import Select from "./Select"
import { useSearchParams } from "react-router-dom"

export default function SortBy({options}) {
    const [searchParams , setSearchParams]=useSearchParams();
    const currenSort=searchParams.get("sort-by") || "";
    function handleChange(e){
        searchParams.set("sort-by" , e.target.value);
        setSearchParams(searchParams);
    }
  return (
    <Select options={options} value={currenSort} onChange={handleChange} type="white"/>
  )
}
