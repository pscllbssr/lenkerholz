<div id="trigger" />
                    <Controller>
                        <Scene
                            triggerElement="#trigger"
                            duration={500}>
                            {(progress) => (
                            <Tween
                                from={{
                                    right: '0px'
                                }}            
                                to={{
                                right: '100vw'
                                }}       
                                ease="Strong.easeOut"
                                totalProgress={progress}
                                paused
                            >
                                <div className="tween" style={{'background':'transparent'}}><img src="/static/img/chopper.png" width="300" /></div>
                            </Tween>    
                            )}
                        </Scene>
                        </Controller>