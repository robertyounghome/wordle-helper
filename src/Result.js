import Pagination from "./Pagination";
import Answer from "./Answer";
import { Component } from "react";
import { render } from "@testing-library/react";

class Result extends Component {
    render() {
    return (
      <div>
        {this.props.value.length > 0 ? (
          <div>
              <p>Words remaining: {this.props.value.length}</p>
            <Pagination
              data={this.props.value}
              RenderComponent={Answer}
              title="Answers"
              pageLimit={5}
              dataLimit={10}
            />
          </div>
        ) : (
         <h1>No Answers to display</h1>
        )}
      </div>
    );
    }
  }

  export default Result;

  