export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  name?: string;
  userName?: string; //
  avatar?: string; // 个人还是比较喜欢这个字段
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
  jobName?: string;
  organizationName?: string;
  locationName?: string;
  phone?: string;
  registrationDate?: string;
  accountId?: string;
  certification?: number;
  role: RoleType;
}
