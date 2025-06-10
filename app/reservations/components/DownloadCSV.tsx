"use client";

import { Button } from "@/components/ui/button";
import { FormSchema, ValidFieldNames } from "@/lib/types";
import React, { useState } from "react";

const DownloadCSV = ({
  data,
  fileName,
}: {
  data: FormSchema[];
  fileName: string;
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertToCSV = (objArray: FormSchema[]) => {
    if (!objArray.length) return '';
    
    // Define headers in a specific order
    const headers: ValidFieldNames[] = ['firstName', 'lastName', 'email', 'note', 'withTour'];
    
    // Create header row with Czech labels
    const headerLabels: Record<ValidFieldNames, string> = {
      firstName: 'Jméno',
      lastName: 'Příjmení',
      email: 'Email',
      note: 'Poznámka',
      withTour: 'S prohlídkou'
    };
    
    let csv = headers.map(header => `"${headerLabels[header]}"`).join(',') + '\r\n';
    
    // Add data rows
    objArray.forEach(obj => {
      const row = headers.map(header => {
        const value = obj[header];
        
        // Handle different types of values
        if (value === null || value === undefined) return '';
        
        if (typeof value === 'string') {
          // Escape quotes and wrap in quotes
          return `"${value.replace(/"/g, '""')}"`;
        }
        
        if (typeof value === 'boolean') {
          return value ? 'Ano' : 'Ne';
        }
        
        // For any other type, convert to string and escape
        return `"${String(value).replace(/"/g, '""')}"`;
      });
      csv += row.join(',') + '\r\n';
    });
    
    return csv;
  };

  const downloadCSV = async () => {
    setIsDownloading(true);
    setError(null);
    let csvURL: string | null = null;
    let csvData: Blob | null = null;

    try {
      const csvContent = convertToCSV(data);
      csvData = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      csvURL = URL.createObjectURL(csvData);
      
      const link = document.createElement("a");
      link.href = csvURL;
      link.download = `${fileName}.csv`;
      link.setAttribute('aria-label', 'Stáhnout CSV soubor');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Nepodařilo se stáhnout soubor. Zkuste to prosím znovu.');
      console.error('CSV download error:', err);
    } finally {
      if (csvURL) {
        URL.revokeObjectURL(csvURL);
      }
      setIsDownloading(false);
    }
  };

  return (
    <div>
      <Button 
        onClick={downloadCSV}
        disabled={isDownloading}
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400"
        aria-busy={isDownloading}
      >
        {isDownloading ? 'Stahuji...' : 'Stáhnout tabulku'}
      </Button>
      {error && (   
        <p className="text-red-500 mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default DownloadCSV;
