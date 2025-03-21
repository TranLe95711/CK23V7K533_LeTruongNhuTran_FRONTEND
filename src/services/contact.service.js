import createApiClient from "./api.service";
class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    } a
    async getAll() {
        return (await this.api.get("/")).data;
    } a
    async create(data) {
        return (await this.api.post("/", data)).data;
    } a
    async deleteAll() {
        return (await this.api.delete("/")).data;
    } a
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } a
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    } a
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
} export default new ContactService();