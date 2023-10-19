import React from "react";

const CreateIssue = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h1 className="text-2xl text-center font-semibold mb-4">New Issue</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Issue Title
            </label>
            <input
              type="text"
              id="text"
              name="title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Issue Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={9}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your description here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateIssue;
