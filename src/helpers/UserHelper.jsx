import axios from "axios"
export const BASE_URL = "http://localhost:8080/";
import { getToken, getId } from '../context/AppContext'
import { getUser } from "../services/UserService";

export const fetchUser = async () => {
  const response = await axios.get(`${BASE_URL}user/id/${getId()}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
}

export const fetchUserByEmail = async (email) => {
  const response = await axios.get(`${BASE_URL}user/email/${email}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
}

export const createUser = async (firstName, lastName, email, password) => {
  const response = await axios.post(`${BASE_URL}user/auth/signup`, null, {
    params: {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'password': password
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
}

export const updatePassword = async (password, newPassword) => {
  const response = await axios.post(`${BASE_URL}user/update-password`, null, {
    params: {
      'password': password,
      'newPassword': newPassword,
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (response.status === 200) {
    return response.status;
  }
  return {};
}

export const recuperatePassword = async (email, newPassword, code) => {
  const response = await axios.post(`${BASE_URL}user/recuperate-password`, null, {
    params: {
      'email': email,
      'newPassword': newPassword,
      'Code': code
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    return response.status;
  }
  return {};
}

export const requestRecuperatePassword = async (email) => {
  const response = await axios.post(`${BASE_URL}user/request-recuperate`, null, {
    params: {
      'email': email
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    return response.status;
  }
  return {};
}

export const fetchAllEvents = async ({ size, page }) => {
  const response = await axios.get(`${BASE_URL}events/`,
    {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      },
      params: {
        size: size,
        page: page
      }
    });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
};

export const fetchEventyName = async ({ name }) => {
  const response = await axios.get(`${BASE_URL}events/${name}`,
    {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
};

export const fetchTicketByUser = async () => {
  const response = await axios.get(`${BASE_URL}ticket/userid/${getId()}`,
    {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    const data = await response.data;
    return data;
  }
  return {};
};

export const generateTicketQR = async (ticket) => {
  const response = await axios.post(`${BASE_URL}ticketqr/generate/${ticket}`,
    {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    //data o status
    const data = await response.data;
    return data;
  }
  return {};
};

//Create new Ticket and save Order
export const saveTicketOrder = async (quantity) => {
  const response = await axios.post(`${BASE_URL}ticket/save/${quantity}`,
    {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    //data o status
    const data = await response.data;
    return data;
  }
  return {};
};

//Confirm ticket buy 
export const ticketBuy = async (order) => {
  const response = await axios.post(`${BASE_URL}ticket/finish`, null, {
      params: {
        'oderId': order
      },
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    //data o status
    const data = await response.data;
    return data;
  }
  return {};
};
///ticket/finish HERE

//Transctions 

//Request a transaction 
export const completeTransaction = async (userFrom, userTo, ticket) => {
  const response = await axios.post(`${BASE_URL}transaction/request`, null, {
      params: {
        'userCodeFrom': userFrom,
        'userCodeTo': userTo,
        'ticketCode': ticket
      },
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    //data o status
    const data = await response.data;
    return data;
  }
  return {};
};

//Complete transaction 
export const saveTransaction = async (code, emailTransfer) => {
  const response = await axios.post(`${BASE_URL}transaction/complete`, null, {
      params: {
        'HashEmail': code,
        'UserToTransferEmail': emailTransfer
      },
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    });

  if (response.status === 200) {
    //data o status
    const data = await response.data;
    return data;
  }
  return {};
};
