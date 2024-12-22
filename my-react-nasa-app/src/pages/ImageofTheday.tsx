import React, { useState, useEffect } from "react";

interface NasaImage {
    title: string;
    date: string;
    explanation: string;
    hdurl: string;
}

const API_KEY = 'EKJl4IXEy5e4V26Wea5ghzkMn7m06X8bwkYQga84';

const ImageOfTheDay: React.FC = () => {
    const [image, setImage] = useState<NasaImage | null>(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setImage(data))
            .catch((error) => console.error('Error fetching image:', error));
    }, []);

    return (
        <div>
            <h1>NASA Image of the Day</h1>
            {image ? (
                <div>
                    <h2>{image.title}</h2>
                    <p><strong>Date:</strong> {image.date}</p>
                    <p>{image.explanation}</p>
                    <img src={image.hdurl} alt={image.title}  />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ImageOfTheDay;
