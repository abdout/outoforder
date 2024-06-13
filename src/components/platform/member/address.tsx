import React, { useState } from 'react';
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Control } from 'react-hook-form';
import { countries } from './constant'; // Assuming you have a file with countries array

interface AddressFormFieldProps {
    control: Control;
    name: string;
}

const AddressFormField: React.FC<AddressFormFieldProps> = ({ control, name }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState<string[]>([]);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryName = event.target.value;
        const selectedCountryObj = countries.find(country => country.name === selectedCountryName);
        setSelectedCountry(selectedCountryName);
        setCities(selectedCountryObj ? selectedCountryObj.cities : []);
    };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <>
                    <FormItem>
                        <FormControl>
                            <select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                {...field}
                            >
                                <option value="">اختر البلد</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country.name}>{country.name}</option>
                                ))}
                            </select>
                        </FormControl>
                    </FormItem>
                    <FormItem>
                        <FormControl>
                            <select {...field}>
                                <option value="">اختر المدينة</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </FormControl>
                    </FormItem>
                    <FormMessage />
                </>
            )}
        />
    );
};

export default AddressFormField;
