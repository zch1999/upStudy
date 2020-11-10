export class AclRuleCreateVO {
  /** dstApp */
  dstApp = undefined;

  /** enabled */
  enabled = false;

  /** rule */
  rule = '';

  /** srcApp */
  srcApp = undefined;
}

export class AclRuleDetailVO {
  /** createdAt */
  createdAt = '';

  /** createdBy */
  createdBy = '';

  /** dstAppId */
  dstAppId = undefined;

  /** dstAppName */
  dstAppName = '';

  /** enabled */
  enabled = false;

  /** rule */
  rule = '';

  /** ruleId */
  ruleId = undefined;

  /** srcAppId */
  srcAppId = undefined;

  /** srcAppName */
  srcAppName = '';
}

export class AclRuleUpdateVO {
  /** enabled */
  enabled = false;

  /** rule */
  rule = '';

  /** ruleId */
  ruleId = undefined;
}

export class AppCallRelationVO {
  /** 调用方应用名称 */
  clientApp = '';

  /** 是否允许访问 */
  isAccepted = false;

  /** 本应用名称 */
  myApp = '';

  /** 本服务角色：调用方/提供方 */
  myRole = '';

  /** 提供方应用名称 */
  serverApp = '';

  /** 调用时间戳 */
  timestamp = '';
}

export class AppCallVO {
  /** callAccepted */
  callAccepted = false;

  /** callTimestamp */
  callTimestamp = '';

  /** clientApp */
  clientApp = '';

  /** clientId */
  clientId = undefined;

  /** id */
  id = undefined;

  /** serverApp */
  serverApp = '';

  /** serverId */
  serverId = undefined;
}

export class AppDetailVO {
  /** acAppName */
  acAppName = '';

  /** acId */
  acId = undefined;

  /** aclEnabled */
  aclEnabled = false;

  /** appGroup */
  appGroup = '';

  /** appName */
  appName = '';

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** isCurrUserParticipantIn */
  isCurrUserParticipantIn = false;

  /** owners */
  owners = [];
}

export class AppFullVO {
  /** acAppName */
  acAppName = '';

  /** acId */
  acId = undefined;

  /** aclEnabled */
  aclEnabled = false;

  /** aclRuleList */
  aclRuleList = [];

  /** appGroup */
  appGroup = '';

  /** appName */
  appName = '';

  /** callRelationList */
  callRelationList = [];

  /** createdAt */
  createdAt = '';

  /** id */
  id = undefined;

  /** instanceList */
  instanceList = [];

  /** isCurrUserParticipantIn */
  isCurrUserParticipantIn = false;

  /** owners */
  owners = [];

  /** versionRuleList */
  versionRuleList = [];
}

export class AppInstanceVO {
  /** appId */
  appId = undefined;

  /** appName */
  appName = '';

  /** debugCmd */
  debugCmd = '';

  /** debugPort */
  debugPort = undefined;

  /** id */
  id = undefined;

  /** ip */
  ip = '';

  /** port */
  port = undefined;

  /** registerId */
  registerId = '';

  /** state */
  state = '';

  /** updatedAt */
  updatedAt = '';

  /** version */
  version = '';
}

export class AppVO {
  /** 应用名称 */
  appName = '';

  /** 应用ID */
  id = undefined;
}

export class IdsVO {
  /** ids */
  ids = [];
}

export class OrderItem {
  /** asc */
  asc = false;

  /** column */
  column = '';
}

export class Page {
  /** current */
  current = undefined;

  /** hitCount */
  hitCount = false;

  /** optimizeCountSql */
  optimizeCountSql = false;

  /** orders */
  orders = [];

  /** pages */
  pages = undefined;

  /** records */
  records = [];

  /** searchCount */
  searchCount = false;

  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

export class Person {
  /** 部门 */
  department = new PersonCommonRes();

  /** 邮箱 */
  email = '';

  /** 入职日期 */
  entryDate = '';

  /** 一级部门 */
  first_dept = new PersonCommonRes();

  /** manager */
  manager = new PersonManagerRes();

  /** 姓名 */
  name = '';

  /** 工号 */
  number = '';

  /** 电话 */
  phone = '';

  /** 头像 */
  photo = '';

  /** 职位名称 */
  positionName = '';

  /** 状态 */
  status = new PersonCommonRes();

  /** 用户名 */
  username = '';
}

export class PersonCommonRes {
  /** 状态code */
  code = '';

  /** 状态name */
  name = '';
}

export class PersonManagerRes {
  /** 邮箱 */
  email = '';

  /** 姓名 */
  name = '';

  /** 工号 */
  number = '';

  /** 用户名 */
  username = '';
}

export class Result {
  /** code */
  code = undefined;

  /** message */
  message = '';

  /** result */
  result = new AclRuleDetailVO();
}

export class RuleTermVO {
  /** desc */
  desc = '';

  /** id */
  id = undefined;

  /** rule */
  rule = '';
}

export class UserInfoItemVo {
  /** account */
  account = '';

  /** avatar */
  avatar = '';

  /** isAdmin */
  isAdmin = false;

  /** name */
  name = '';
}

export class VersionRuleCreateVO {
  /** dstApp */
  dstApp = undefined;

  /** dstVersion */
  dstVersion = '';

  /** enabled */
  enabled = false;

  /** srcApp */
  srcApp = undefined;

  /** srcVersion */
  srcVersion = '';
}

export class VersionRuleDetailVO {
  /** createdAt */
  createdAt = '';

  /** createdBy */
  createdBy = '';

  /** dstAppId */
  dstAppId = undefined;

  /** dstAppName */
  dstAppName = '';

  /** dstVersion */
  dstVersion = '';

  /** enabled */
  enabled = false;

  /** id */
  id = undefined;

  /** srcAppId */
  srcAppId = undefined;

  /** srcAppName */
  srcAppName = '';

  /** srcVersion */
  srcVersion = '';
}

export class VersionRuleUpdateVO {
  /** enabled */
  enabled = false;

  /** ruleId */
  ruleId = undefined;
}
