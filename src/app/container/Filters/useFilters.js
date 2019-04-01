import { useEffect, useState } from 'react';
import { useApiResult, useApiWithoutResult } from 'react-components';
import { queryFilters, toggleEnable, deleteFilter } from 'proton-shared/lib/api/filters';
import { defer } from 'proton-shared/lib/helpers/function';

const useFilters = () => {
    const { result = {}, loading } = useApiResult(queryFilters, []);
    const requestStatus = useApiWithoutResult(toggleEnable);
    const requestRemove = useApiWithoutResult(deleteFilter);

    const [filerList, setFilters] = useState([]);

    useEffect(() => {
        setFilters(result.Filters || []);
    }, [result.Filters]);

    const toggleStatus = async ({ ID }, enable = true) => {
        await requestStatus.request(ID, enable);
    };

    const removeFilter = ({ ID }) => {
        setFilters(filerList.filter((filter) => filter.ID !== ID));
    };

    return {
        loading,
        list: filerList,
        toggleStatus,
        removeFilter
    };
};

export default useFilters;
