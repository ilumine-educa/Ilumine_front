
export interface Child {
  id: string;
  responsibleId: string;
  name: string;
  age: number;
}

const children: Child[] = [
  {
    id: "101",
    responsibleId: "1",
    name: "Sofia",
    age: 7,
  },
  {
    id: "102",
    responsibleId: "1",
    name: "Lucas",
    age: 9,
  },
  {
    id: "103",
    responsibleId: "2",
    name: "Mariana",
    age: 6,
  },
];

export function findChildrenByResponsibleId(
  responsibleId: string
): Child[] {
  return children.filter(
    (child) => child.responsibleId === responsibleId
  );
}

export function findChildById(id: string) {
  return children.find((child) => child.id === id);
}
