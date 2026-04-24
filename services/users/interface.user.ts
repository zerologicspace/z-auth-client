export interface I_Users {
  email?: string;
  contactNumber?: string;
  password?: string;
  isBlocked?: boolean;
  roleId?: number[];
  recoveryEmail?: string | null;
  recoveryNumber?: string | null;
}

export interface I_ResetPassword {
  password?: string;
  confirmPassword?: string;
}

export interface I_VerficationToken {
  verificationToken?: string;
  verificationTokenExpiresAt?: string;
}

export interface I_ResetPasswordToken {
  resetToken?: string;
  resetTokenExpiresAt?: string;
}

export interface I_LoginRequest {
  email?: string;
  contactNumber?: string;
  password?: string;
}

export interface I_LoginResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    roles: string[];
    permissions: string[];
  };
}

export interface I_Payload {
  id: string;
  roles: string[];
  permissions: string[];
}

export interface I_ChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface I_CreatedUser {
  id: string;
  verificationToken?: string;
  expiryHours?: string;
  verificationLink?: string;
  message?: string;
  tenantId?: number;
}

export interface I_ForgotPasswordRequest {
  email?: string;
  contactNumber?: string;
  recoveryEmail?: string;
  recoveryNumber?: string;
}

export interface I_ForgotPasswordResponse {
  resetToken?: string;
  tenantId?: number;
  message?: string;
  expiryHours?: string;
}
export interface I_UpdateUserByIdRequest {
  email?: string;
  contactNumber?: string;
  recoveryEmail?: string;
  recoveryNumber?: string;
  isBlocked?: boolean;
  roleId?: number[];
}

export interface I_SendVerificationEmailResponse {
  verificationToken?: string;
  expiryHours?: string;
  tenantId?: number;
  message?: string;
}
export interface I_VerifyEmailResponse {
  status?: number;
  id?: number;
  error?: string;
  needEmailVerification?: boolean;
  allowZAuthEmailVerification?: boolean;
}

export interface I_SystemGeneratedUserPassword {
  token: string;
  password: string;
  confirmPassword: string;
}
export interface I_SendEmailVerificationAndRegisterEmailRequest {
  email?: string;
  roleId?: number;
  forAdmin?: boolean;
}