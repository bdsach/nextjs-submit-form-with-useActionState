interface UserFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
}

interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof UserFormData]?: string[];
  };
  inputs?: UserFormData;
}
