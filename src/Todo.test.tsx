import Todo from "./Todo";

describe("Todo List", () => {
  it("should render heading", () => {
    render(<Todo />);
    const heading = screen.getByText("Jest test");
    expect(heading).toBeInTheDocument();
  });

  it("should add item in todo list", () => {
    render(<Todo />);
    const input = screen.getByTestId("todo-input");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { targrt: { value: "Shoes" } });
    const button = screen.getByTestId("add-button");
    fireEvent.click(button);
    expect(screen.getByText("Shoes")).toBeInTheDocument();
  });

  it("should delete todo from list", () => {
    render(<Todo />);
    const input = screen.getByTestId("todo-input");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { targrt: { value: "Shoes" } });
    const button = screen.getByTestId("add-button");
    fireEvent.click(button);
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("delete-testId-0"));
    expect(screen.queryByText("Shoes")).not.toBeInTheDocument();
  });
});

//Async mock
describe('test async code',()=>{
    it('should mock the async code', async()=>{
        const result = await getApiData();
        expect(result).toBe('data');
    })
})