import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTY1NzJiZjBhZThiM2RmYjBlZWQ0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODk3Njg5NCwiZXhwIjoxNjM5MjM2MDk0fQ.gWyzYTu1ppOqiM-R8smBlxXHqiCH8DpNGnKZpYoH45I";

export const publicRequst = axios.create({
  baseUrl: BASE_URL,
});

export const publicRequst = axios.create({
  baseUrl: BASE_URL,
  header: { token: "Bearer " },
});
