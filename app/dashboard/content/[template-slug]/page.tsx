"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'

import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'
import { useUser } from '@clerk/nextjs'

interface PROPS{
    params:Promise<{
        'template-slug':string
    }>
}


function CreateNewContent(props:PROPS) {
   
    const params = React.use(props.params);
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==params['template-slug']);
    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const {user}=useUser();
    const router=useRouter();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    const {userSubscription,setUserSubscription}=useContext(UserSubscriptionContext);
    const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
    /**
     * Used to generate content from AI
     * @param formData 
     * @returns 
     */
    const GenerateAIContent=async(formData:any)=>{
        if(totalUsage>=10000&&!userSubscription)
            {
                console.log("Please Upgrade");
                router.push('/dashboard/billing')
                return ;
            }
        setLoading(true);
        try {
            const SelectedPrompt=selectedTemplate?.aiPrompt;
            const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
            const result=await chatSession.sendMessage(FinalAIPrompt);
            
            setAiOutput(result?.response.text());
            await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
            setUpdateCreditUsage(Date.now())
        } catch (error) {
            console.error("AI Generation Error:", error);
        } finally {
            setLoading(false);
        }
    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
        const result=await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy'),
        });

        console.log(result);
    }
    

  return (
    <div className='p-8 min-h-screen gradient-mesh'>
        <Link href={"/dashboard"}>
            <Button className='mb-6 bg-white hover:bg-slate-50 text-slate-800 border shadow-sm rounded-xl px-6 py-2 transition-all hover:shadow-md'> 
              <ArrowLeft className='w-4 h-4 mr-2'/> Back to Dashboard
            </Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* FormSection  */}
            <div className='md:sticky md:top-24 h-fit'>
                <FormSection 
                selectedTemplate={selectedTemplate}
                userFormInput={(v:any)=>GenerateAIContent(v)}
                loading={loading} />
            </div>
            {/* OutputSection  */}
            <div className='col-span-2'>
                <OutputSection aiOutput={aiOutput} />
            </div>
        </div>
    </div>
  )
}

export default CreateNewContent