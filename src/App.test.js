import { render, screen } from '@testing-library/react';
import Button from './components/Button';
import Header from './components/Header';
import UploadBox from "./components/UploadBox";
import DragAndDropFile from './components/DragAndDropFile';
import ButtonGroup from './components/ButtonGroup';
import UploadGroup from './components/UploadGroup';

describe("testing various components on general use cases", () => {

  test('render the text on button component', () => {

    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();

  });

  test('render the text on header component', () => {

    render(<Header>Click Me</Header>);
    const headerElement = screen.getByText(/Click Me/i);
    expect(headerElement).toBeInTheDocument();

  });

  test('render the text on the upload box component', () => {

    render(<UploadBox innerText={<p>Click Me</p>} dragAndDropComponent={<DragAndDropFile index={0} />}></UploadBox>);
    const uploadBoxElement = screen.getByText(/Click Me/i);
    expect(uploadBoxElement).toBeInTheDocument();

  });

  test('render the button group component', () => {

    render(<ButtonGroup text="1. Choose an Algorithm." textStyle={{fontFamily: "Helvetica, sans-serif"}}>
      <Button algorithm="none-1">Algorithm 1</Button>
      <Button algorithm="none-2">Algorithm 2</Button>
    </ButtonGroup>);

    const buttonGroupElement = screen.getByText(/Algorithm 2/i);
    expect(buttonGroupElement).toBeInTheDocument();

  });

  test('render the upload group component', () => {

    render(<UploadGroup ></UploadGroup>);

  })

});

describe("testing components on edge cases and misuse", () => {

  test('render the button group component with only 1 child', () => {

    render(<ButtonGroup text="1. Choose an Algorithm." textStyle={{fontFamily: "Helvetica, sans-serif"}}>
      <Button algorithm="none">Algorithm 2</Button>
    </ButtonGroup>);

    const buttonGroupElement = screen.getByText(/Algorithm 2/i);
    expect(buttonGroupElement).toBeInTheDocument();

  }); 

  test('render the button group component with only no children', () => {

    render(<ButtonGroup text="1. Choose an Algorithm." textStyle={{fontFamily: "Helvetica, sans-serif"}}>
    </ButtonGroup>);

    const buttonGroupElement = screen.getByText(/No buttons provided./i);
    expect(buttonGroupElement).toBeInTheDocument();

  }); 

});