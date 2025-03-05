import axios from "axios";

export const $api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {'x-api-key': 'live_8TfDiVuBqGTBXMBsGEtOk8OgevzLrcl8sx3r7tRJehi7cCAfWAvXoC7LsZ3pla0z'}
});

