import { useState } from "react";

interface CounterButtonProps {
  initialValue: number;
}

function CounterButton(props: CounterButtonProps) {
  const [value, setValue] = useState(props.initialValue);

  return (
    <input
      onClick={() => {
        setValue(value + 1);
      }}
      type="button"
      value={value}
    />
  );
}

// Kan jag anända detta för att skapa en ruta som växer med mer info? Se händelser usestate minut 40

export default CounterButton;

// Här använder jag useState. Value = värde. setValue är en funktion som används för att ändra på värdet. I vue används istället this.value++
