import React, {Fragment} from 'react';
import AvailableMeal from './AvailableMeal';
import MealsSummary from './MealsSummary';
const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeal />
        </Fragment>
    );
}

export default Meals;