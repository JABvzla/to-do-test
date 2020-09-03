import { renderHook, act } from "@testing-library/react-hooks";
import useToDo from "./useToDo";

describe("useToDo", () => {
  it("initial state", () => {
    const { result } = renderHook(() => useToDo());
    expect(result.current.todoList).toStrictEqual([]);
  });

  it("should add an item", () => {
    const { result } = renderHook(() => useToDo());
    const expectResult = [{ text: "itemnuevo", checked: false }];

    act(() => result.current.add("itemnuevo"));

    expect(result.current.todoList).toStrictEqual(expectResult);
  });

  it("dont should add empty an item", () => {
    const { result } = renderHook(() => useToDo());

    act(() => result.current.add(""));

    expect(result.current.todoList).toStrictEqual([]);
  });
});
