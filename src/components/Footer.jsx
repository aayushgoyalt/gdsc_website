import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-black pt-8 pb-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-bold">GDSC</h1>
          <p className="text-gray-400">Google Developer Student Club</p>
        </div>

        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-[200px]">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li><p onClick={() => {navigate('/')}} className="text-gray-700 hover:text-gray-900">Home</p></li>
              <li><p onClick={() => {navigate('/events')}} className="text-gray-700 hover:text-gray-900">Projects</p></li>
              <li><p onClick={() => {navigate('/project')}} className="text-gray-700 hover:text-gray-900">Events</p></li>
              <li><p onClick={() => {navigate('/team')}} className="text-gray-700 hover:text-gray-900">Team</p></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400">gdsc@example.com</p>
            <p className="text-gray-400">123-456-7890</p>
          </div>
        </div>

        <div className="flex">
          <a href="https://www.facebook.com" className="text-gray-400 hover:text-white mx-2" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.506 0-1.796.716-1.796 1.764v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" className="text-gray-400 hover:text-white mx-2" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.004.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.762.127 1.124-4.093-.205-7.719-2.165-10.141-5.144-.425.722-.667 1.561-.667 2.457 0 1.695.863 3.188 2.173 4.065-.803-.025-1.56-.247-2.22-.616v.062c0 2.367 1.685 4.342 3.918 4.788-.411.111-.844.171-1.292.171-.315 0-.623-.03-.921-.086.624 1.951 2.432 3.373 4.575 3.413-1.676 1.313-3.787 2.097-6.08 2.097-.395 0-.788-.023-1.175-.068 2.168 1.391 4.743 2.204 7.512 2.204 9.014 0 13.945-7.47 13.945-13.946 0-.213-.005-.425-.014-.637.96-.695 1.79-1.562 2.447-2.549z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white mx-2" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452H16.82V15.758c0-1.117-.025-2.555-1.558-2.555-1.56 0-1.797 1.219-1.797 2.475v4.774h-3.631V9.748h3.488v1.454h.049c.486-.916 1.673-1.875 3.446-1.875 3.685 0 4.366 2.422 4.366 5.576v6.549zM5.337 8.293c-1.161 0-2.1-.94-2.1-2.1 0-1.161.94-2.1 2.1-2.1 1.161 0 2.1.939 2.1 2.1 0 1.16-.939 2.1-2.1 2.1zm1.816 12.159H3.522V9.748h3.631v10.704zM22.225 0H1.771C.792 0 .006.786.006 1.764v20.473C.006 23.214.792 24 1.771 24h20.451c.979 0 1.764-.786 1.764-1.763V1.764C23.989.786 23.204 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-gray-500 h-[2px] mt-5"></div>
      <div className="text-center mt-2 text-gray-500">
        &copy; {new Date().getFullYear()} GDSC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;