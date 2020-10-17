import React from 'react'
import s from './Users.module.css'
import Preloader from '../common/PreLoader'
import SingleUser from './SingleUser'
import Pagination from './Pagination'

let Users = (props) => {
    return <div>
        <div>
            {
                (!props.preloader ? <Preloader />
                    : <div>
                        <Pagination totalCount={props.totalCount}
                            onOnePage={props.onOnePage}
                            numberOfPage={props.numberOfPage}
                            onPageChange={props.onPageChange}/>
                        {
                            props.users.map(item => <SingleUser item={item}
                                FollowThunk={props.FollowThunk}
                                UnfollowThunk={props.UnfollowThunk}
                                toggleIsFetching={props.toggleIsFetching}
                            />)
                        }
                    </div>)
            }
        </div>
    </div>
};

export default Users