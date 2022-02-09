import GLOBALS from './globals';
import {GetFunc, PatchFunc, PostFunc} from './http_mthd';
import {SaveToStorage} from '../../config/utils/utils';
import axios from 'axios';

// API calls
export const CREATE_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}signup`;
  let response;
  try {
    response = await PostFunc(url, data);
    let input = {email: data.email, password: data.password, strategy: 'local'};
    await LOGIN_ACCOUNT(input);
  } catch (error) {
    response = error;
  }
  return response;
};

export const LOGIN_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}authentication`;
  let response;
  try {
    response = await PostFunc(url, data);
    await SaveToStorage('token', response.accessToken);
    await SaveToStorage('user', response.user);
  } catch (error) {
    response = error;
  }
  return response;
};

export const PATCH_DEVICE = async data => {
  const url = `${GLOBALS.BASE_URL}devices/${data.device}`;
  let response;
  try {
    response = await PatchFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const PATCH_USER = async data => {
  const url = `${GLOBALS.BASE_URL}users/${data.userId}`;
  let response;
  try {
    response = await PatchFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}user/verify-otp`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_AJO_GROUP = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-group/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_GROUP = async data => {
  const url = `${GLOBALS.BASE_URL}groups`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_GROUP_RESERVE_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}group/generate-reverse-account`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_RECENT_ACTIVE_GROUPS = async data => {
  const url = `${GLOBALS.BASE_URL}group/limit-by?limit=${data.limit}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const MY_GROUPS = async () => {
  const url = `${GLOBALS.BASE_URL}group/my-groups`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_INVITATION = async data => {
  const url = `${GLOBALS.BASE_URL}invitation/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

// export const INVITATION_ACTION = async data => {
//   const url = `${GLOBALS.BASE_URL}invitation/action/${data.id}`;
//   let response;
//   try {
//     response = await GetFunc(url);
//   } catch (error) {
//     response = error;
//   }
//   return response;
// };

export async function INVITATION_ACTION(url) {
  let response;
  try {
    response = await axios.get(url);
  } catch (error) {
    response = error;
  }
  return response;
}

export async function MY_CIRCLE() {
  const url = `${GLOBALS.BASE_URL}circle/my-circle`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
}

export const ADD_GROUP_MEMBER = async data => {
  const url = `${GLOBALS.BASE_URL}group-member/add`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const RESET_PASSWORD_REQUEST = async data => {
  const url = `${GLOBALS.BASE_URL}user/forgot-password?email=${data.email}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const RESET_PASSWORD = async data => {
  const url = `${GLOBALS.BASE_URL}user/reset-password`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const SAVE_BANK = async data => {
  const url = `${GLOBALS.BASE_URL}bank/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const BANK_DETAILS = async data => {
  const url = `${GLOBALS.BASE_URL}bank/my-banks`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_BANK = async data => {
  const url = `${GLOBALS.BASE_URL}bank/verify-bank?accountNumber=${data.accountNumber}&bankCode=${data.bankCode}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const TRANSACTIONS_STATUS = async data => {
  const url = `${GLOBALS.BASE_URL}transaction-trackers?$skip=${data.skip}&$sort[createdAt]=-1&group=${data.group}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_GROUP_REMINDERLIST = async (id, data) => {
  console.log(data);
  const url = `${GLOBALS.BASE_URL}addtoreminderlist`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GROUP_REMINDER_LIST = async data => {
  const url = `${GLOBALS.BASE_URL}reminderlist/${data}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const SEND_GROUP_REMINDER = async data => {
  console.log(data);
  const url = `${GLOBALS.BASE_URL}createremindermessages`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_NOTIFICATION = async data => {
  const url = `${GLOBALS.BASE_URL}notification/history`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CLEAR_NOTIFICATION = async () => {
  const url = `${GLOBALS.BASE_URL}notification/clear`;
  let response;
  try {
    response = await PatchFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

///////AJO//////////

export const MY_AJO_GROUPS = async () => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-group/my-groups`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_PARTICIPANTS = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-participant/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const AJO_GROUPS_PARTICIPANTS = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-participants?ajoGroup=${data.ajoGroup}&isActive=true&membershipStatus[$in][]=Member&membershipStatus[$in][]=CreatorMember`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_CARD_PAYMENT = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-transaction/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const AJO_GROUPS_PARTICIPANTS_STATUS = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-participant/status?phone=${data.phone}&ajoGroup=${data.ajoGroup}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_RECENT_ACTIVE_AJO = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-group/limit-by?limit=${data.limit}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const AJO_TRANSACTION_LOG = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-transaction/log?group=${data.group}&skip=${data.skip}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const AJO_TRANSACTION_MONITOR = async data => {
  const url = `${GLOBALS.BASE_URL}v1/ajo-transaction/summary?group=${data.group}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};
