import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

const loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Button variant={'ghost'} disabled>
                <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                Please wait
            </Button>
        </div>
    )
}

export default loading
