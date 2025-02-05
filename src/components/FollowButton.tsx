"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2Icon } from 'lucide-react'

import { toggleFollow } from '@/actions/user.action'
import toast from 'react-hot-toast'

const FollowButton = ({userId}:{userId:string}) => {

    const [isLoading,setIsLoading] = useState(false)

    const handleFollow = async () => {
        setIsLoading(true);


        try{
            await toggleFollow(userId)
            toast.success("User Followed successfully")

        }
        catch(error)
        {
            toast.error("Error following user")
            
        }
        finally{
            setIsLoading(false)
        }
    }


  return (
    <Button
    size={"sm"}
    variant={"secondary"}
    onClick={handleFollow}
    className="W-20"
    >

    {isLoading ? <Loader2Icon className='size-4 animate-spin'/> : "Follow" }

    </Button>
  )
}

export default FollowButton