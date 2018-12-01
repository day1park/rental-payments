import React from "react";

const Search = () => {
  return (
    <div className="Search">
      <form
        ref={input => (this.addForm = input)}
        className="form-inline"
        onSubmit={e => {
          this.idSearch(e);
        }}
      >
        <label>ID:</label>
        <input
          ref={input => (this.idInput = input)}
          type="text"
          placeholder="input ID"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Search;
