/**
 * Database config files
 *
 * I am exposing credentials,
 * but they are time-limeted
 * and moreover db is set to my network
 */

const username = "library-project-tl";
const password = "TomasLukac12345";
const collection = "Library";

export const mongoURI = `mongodb+srv://${username}:${password}@cluster0.wbbnd.mongodb.net/${collection}?retryWrites=true&w=majority`;
