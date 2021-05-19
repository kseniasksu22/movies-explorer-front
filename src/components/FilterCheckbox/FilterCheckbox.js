import "../FilterCheckbox/FilterCheckbox.css";
import React from "react";

function FilterCheckbox (props) {

    return (
<div className="filter-checkbox">
    <input className= "filter-checkbox__input" type="checkbox" id="hidcheck"  hidden/>
    <label className="filter-checkbox__capsule" htmlFor="hidcheck" id="capsule-id">
      <span className="filter-checkbox__round"></span>
    </label>
    <p className="filter-checkbox__text">Короткометражки</p>
</div>

    )
}

export default FilterCheckbox;