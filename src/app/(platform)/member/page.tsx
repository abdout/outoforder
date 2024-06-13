'use client';
import React from 'react';
import { DataTable } from '@/components/table/data-table';
import { columns } from '@/components/table/coloum';
import { MemberProvider, useMember } from '@/components/platform/member/context';
import MemberContent from '@/components/platform/member/content';



const Member = () => {
    
    const { members } = useMember();

    return (
        <div>
            <DataTable columns={columns} data={members} />
            <MemberContent />
        </div>
            
    );
};

export default Member;