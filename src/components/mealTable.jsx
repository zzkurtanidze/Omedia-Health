import React, { Component } from "react";
import Table from "./common/table";
import authService from "../services/authService";

class MealTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
    },
    {
      path: "date",
      label: "Date (YYYY-MM-DD)",
    },
    { path: "mealCalories", label: "Calories" },
  ];

  editColumn = {
    key: "edit",
    content: (meal) => (
      <button
        onClick={() => this.handleEdit(meal)}
        className="btn btn-primary btn-sm"
      >
        Edit
      </button>
    ),
  };

  handleEdit = (meal) => {
    this.props.handleEdit(meal);
  };
  constructor() {
    super();
    const user = authService();
    if (user) this.columns.push(this.editColumn);
  }
  render() {
    const { data } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={data}
          name="desiredMealCalories"
          dimension="mealCalories"
        />
      </>
    );
  }
}

export default MealTable;