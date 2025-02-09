export interface Contact {
  id: number;
  phonenumber?: string;
  email?: string;
  linkedid?: number | null;
  linkprecedence: 'primary' | 'secondary';
  createdat: Date;
  updatedat: Date;
  deletedat?: Date | null;
}
