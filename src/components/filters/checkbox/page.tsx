import React from "react";
import "./styles.css";
const FiltersComp = () => {
	return (
		<div className="innerContainer" id="main_inner_container">
			<h2 className="filters_part_heading" id="main_body_filters_heading">
				Search Filters
			</h2>
			<h2 className="filters_type_heading" id="filters_type_heading">
				Select type:
			</h2>
            {/* site main filters part compoenetns inputs */}
			<div className="filter_input_boxes_container" id="filter_input_boxes_container">
                {/* for clothes */}
				<label className="toggleable_filter_label" htmlFor="filter_clothes_id_clothes">
					clothes
					<input className="toggleable_filter_input" id="filter_clothes_id_clothes" type="checkbox" placeholder="tick" />
				</label>
                {/*for electronic */}
				<label className="toggleable_filter_label" htmlFor="filter_electronics">
					electronics
					<input className="toggleable_filter_input" id="filter_electronics" type="checkbox" placeholder="tick" />
				</label>
                {/* for households */}
				<label className="toggleable_filter_label" htmlFor="filter_households_label">
					Households
					<input className="toggleable_filter_input" id="filter_households_label" type="checkbox" placeholder="tick" />
				</label>
                {/* for meals*/}
				<label className="toggleable_filter_label" htmlFor="filter_meals_id_meals">
					meals
					<input className="toggleable_filter_input" id="filter_meals_id_meals" type="checkbox" placeholder="tick" />
				</label>
                {/* for education */}
                <label className="toggleable_filter_label" htmlFor="filter_meals_id_meals">
					Education
					<input className="toggleable_filter_input" id="filter_meals_id_meals" type="checkbox" placeholder="tick" />
				</label>
			</div>
            {/* set delivery method */}
            <div className="filters_set_payment_container">
            <h2 className="filters_part_heading">payment method</h2>
            <div className="set_payment_inputs_container">
                <label className="toggleable_filter_label" htmlFor="filter_meals_id_meals">
					lease assets
					<input className="toggleable_filter_input" id="filter_meals_id_meals" type="checkbox" placeholder="tick" />
				</label>
                <label className="toggleable_filter_label" htmlFor="filter_meals_id_meals">
					cash payment
					<input className="toggleable_filter_input" id="filter_meals_id_meals" type="checkbox" placeholder="tick" />
				</label>
                <label className="toggleable_filter_label" htmlFor="filter_meals_id_meals">
					card
					<input className="toggleable_filter_input" id="filter_meals_id_meals" type="checkbox" placeholder="tick" />
				</label>
            </div>
            </div>
            {/* price set */}
            <div className="filters_set_price_container">
            <h2 className="filters_part_heading">set price</h2>
            <div className="set_price_inputs_container">
            <input type="number" placeholder="minimum" inputMode="numeric" className="filters_price_set_input" id="min_price_set_input" />
            <h2>:</h2>
            <input type="number" placeholder="maximum" inputMode="numeric" className="filters_price_set_input" id="max_price_set_input" />
            </div>
            </div>
                
		</div>
	);
};

export default FiltersComp;
