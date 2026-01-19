# ZAuth

ZAuth is a authentication service for ZLS.

## Installation

```bash
npm install @zlspace/z-auth
```

## Usage

### User Service

```javascript
import { createConnection, UserService, RoleService, PermissionService } from "@zlspace/z-auth";
import type { I_Users } from "@zlspace/z-auth";

const zAuth = createConnection({
  baseURL: "https://z-auth-stage.zerologicspace.com/api",
  apiKey: "tenant-api-key",
  apiSecretKey: "tenant-api-secret-key",
});

const userService = new UserService(zAuth);

async function example1() {
    const users = await userService.getUserById("paradise-1704caa");
    console.log(users);
}

example1();

Output:

{
  id: 'paradise-86f98b7c5030',
  email: 'stickdemon2043@gmail.com',
  isBlocked: false,
  isEmailVerified: true,
  emailVerificationToken: null,
  emailVerificationTokenExpiresAt: null,
  passwordResetToken: null,
  passwordResetTokenExpiresAt: null,
  tenantId: 5,
  refreshToken: null
} 
```

```javascript
import { createConnection, UserService } from "@zlspace/z-auth";

const zAuth = createConnection({
  baseURL: "https://z-auth-stage.zerologicspace.com/api",
  apiKey: "tenant-api-key",
  apiSecretKey: "tenant-api-secret-key",
});

const userService = new UserService(zAuth);

async function example2() {
   const data: I_Users = {
        email: "user@example.com",
        password: "Asdf1234!",
        roleId: [2,5]
    }
    const users = await userService.createUser(data);
    console.log(users);
}

example2();

Output:
{ error: 'Must be valid email address.', status: 400 } 
{ error: 'User already exists', status: 400 } 

```
## Usage Function

### User Service

```javascript
createUser(data: I_Users) // {data: email, password, contactNumber, recoveryEmail, recoveryNumber, roleId; all optional}
login(data: I_LoginRequest) // {data: email, password, contactNumber(optional)}
forgotPassword(data: I_ForgotPasswordRequest) // {data: email, contactNumber, recoveryEmail, recoveryNumber; all optional}
getUserById(id: string)
resetPassword(token: string, tenantId:number, data: I_ResetPassword) //{data: password, confirmPassword}
changePassword(id: string, data: I_ChangePassword) //{data: currentPassword, newPassword, confirmPassword}
deleteUserById(id: string)
logout(id: string)
sendVerificationEmail(email: string)
verifyEmail(token: string, tenantId:number)
updateUserById(userId: string, data: I_UpdateUserByIdRequest) //{data: email, contactNumber, recoveryEmail, recoveryNumber, isBlocked, roleId; all optional}

```
### Role Service

```javascript
createRole(name:string, description?:string)
getAllRoles()
getRoleById (id: number)
updateRoleById (id:number, name:string, description?:string)
deleteRoleById (id : number)
getPermissionsByRoleId(id: number)
getAccessToken()
getRefreshToken()
```

### Permissions Service

```javascript
createPermission(module:string,access:string,description?:string)
getAllPermissions()
getPermissionById (id: number)
updatePermissionById (id:number, module:string,access:string,description?:string)
deletePermissionById (id : number)
setPermissionByRoleId (roleId: number, permissionId: number[])
setAllPermissions(roleId:number)
```

