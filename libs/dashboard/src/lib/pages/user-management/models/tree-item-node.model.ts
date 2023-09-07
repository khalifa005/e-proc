/**
 * Node for to-do item
 */

export class TreeItemNode {
  children: TreeItemNode[];
  label: string;
  id: number;
  isChecked: boolean;
}
  

/** Flat to-do item node with expandable and level information */
export class TreeItemFlatNode {
  label: string;
  level: number;
  expandable: boolean;
  id: number;
  isChecked: boolean;
}