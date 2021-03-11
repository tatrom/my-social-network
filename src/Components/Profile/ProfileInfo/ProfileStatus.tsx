import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    UpdateStatus: (title: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (title: string) => {
        this.setState({
            editMode: false,
        })
        this.props.UpdateStatus(title)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                </div>
                }{this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={e => this.deactivateEditMode(e.currentTarget.value)}
                       value={this.state.status} onChange={this.onChangeHandler}/>
            </div>
            }
            </>
        )
    }
}