import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox () {
    return (
<div class="filter-checkbox">
    <input className= "filter-checkbox__input" type="checkbox" id="hidcheck" hidden/>
    <label className="filter-checkbox__capsule" for="hidcheck" id="capsule-id">
      <span className="filter-checkbox__round"></span>
    </label>
    <p className="filter-checkbox__text">Короткометражки</p>
</div>

    )
}

export default FilterCheckbox;