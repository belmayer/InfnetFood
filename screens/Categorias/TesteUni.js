import React from "react";
// import { render, fireEvent } from "@testing-library/react-native";
// nao consegui importar o jest
import Categorias from "./Categorias";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

const categoriasMock = [
  { id: "1", nome: "Lanches", imagem: "https://i.pinimg.com/736x/5f/f8/ea/5ff8ea62484423881bd3ed421fbb9a73.jpg" },
  { id: "2", nome: "Bebidas", imagem: "https://i.pinimg.com/736x/2d/c4/9a/2dc49ac11a82e71eb2fda5a20ae12164.jpg" },
  { id: "3", nome: "Sobremesas", imagem: "https://i.pinimg.com/736x/ec/d2/c0/ecd2c045ec867c2e298e67b17ed7dad1.jpg" },
];

jest.mock("../Produtos/Produtos", () => ({
  ProdutosPorCategoria: {
    Lanches: [{ id: "101", nome: "Hambúrguer" }],
    Bebidas: [{ id: "201", nome: "Suco" }],
  },
}));

describe("Categorias Component", () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  it("exibe a lista de categorias corretamente", () => {
    const { getByText, getAllByTestId } = render(<Categorias />);

    categoriasMock.forEach((categoria) => {
      expect(getByText(categoria.nome)).toBeTruthy();
    });

    const cards = getAllByTestId("categoria-card");
    expect(cards.length).toBe(categoriasMock.length);
  });

  it("navega para a tela de produtos ao clicar em uma categoria", () => {
    const { getByText } = render(<Categorias />);

    const lanchesButton = getByText("Lanches");
    fireEvent.press(lanchesButton);

    expect(mockNavigate).toHaveBeenCalledWith("Produtos", {
      produtos: [{ id: "101", nome: "Hambúrguer" }],
      categoriaNome: "Lanches",
    });
  });
});
