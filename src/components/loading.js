import React, { useState } from 'react';
import axios from 'axios';

const Loading = () => {
    

    return (
        <div className='w-1/4 mx-auto my-20'>
            <div className="bg-indigo-500 text-white rounded px-4 py-2 flex items-center justify-center" disabled>
                <svg class="animate-spin h-5 w-5 mr-3 border border-white rounded-full" viewBox="0 0 24 24">
                  <circle className="opacity-0" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                </svg>
                Processing...
              </div>
        </div>
    );
};

export default Loading;