import { useState } from "react";
function ListItem() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="form-control mx-2 my-0.5">
      <label className="cursor-pointer label">
        <span className="label-text">Remember me</span>
        <input
          type="checkbox"
          checked={isChecked} 
          className="checkbox checkbox-secondary checkbox-sm"
        />
      </label>
    </div>
  );
}

export default ListItem;
