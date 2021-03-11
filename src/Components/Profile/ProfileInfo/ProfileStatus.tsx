import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    UpdateStatus: (title: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        title: this.props.status
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
        this.setState({title: e.currentTarget.value})
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
                       value={this.state.title} onChange={this.onChangeHandler}/>
            </div>
            }
            </>
        )
    }
}