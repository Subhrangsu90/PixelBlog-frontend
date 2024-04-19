export const BaseURL = "https://pixelblog-backend.onrender.com/api/blogs/";
export const BaseAuthURL = "https://pixelblog-backend.onrender.com/api/auth/";

// export const BaseURL = "http://localhost:3000/api/blogs/";

// ======================= GET URL ========================= //
export const GETurl = {
	getBlogs: BaseURL + "getBlogs",
	getBlogById: BaseURL + "getBlogById",
};

// ===================== POST URL ======================== //
export const POSTurl = {
	postBlog: BaseURL + "postBlog",

	register: BaseAuthURL + "register",
	login: BaseAuthURL + "login",
};

// ===================== DELETE URL ======================== //
export const DELETEurl = {
	deleteById: BaseURL + "delete",
};

// ===================== UPDATE URL ======================== //
export const UPDATEurl = {
	updateById: BaseURL + "update",
};
