export const fetchGoogleAPI = async (req, res) => {
    try {       
        res.status(200).json({ data: process.env.REACT_APP_GOOGLE_API_TOKEN });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}