export class ProjectDetails {
    _id: string;
    userRole: string;
    status: string;
    isDeleted: boolean;
    categories: Category[];
    tasks: Task[];
    learningResources: LearningResource[];
    // Add other properties here as needed
  
    constructor() {
      this._id = '';
      this.userRole = '';
      this.status = '';
      this.isDeleted = false;
      this.categories = [];
      this.tasks = [];
      this.learningResources = [];
    }
  }
  
  export class Category {
    _id!: string;
    externalId!: string;
    name!: string;
  }
  
  export class Task {
    _id!: string;
    createdBy!: string;
    updatedBy!: string;
    isDeleted!: boolean;
  }
  
  export class LearningResource {
    name!: string;
    link!: string;
    app!: string;
    id!: string;
  }
  