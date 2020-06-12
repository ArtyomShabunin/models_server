from pyfmi import load_fmu
import time

from models_server import db
# from models_server.models import Model, Variable, Timeseries

class fmu_model:
    """Класс для FMU модели"""
    vref = []
    model_started = False
    model_paused = False
    model_stoped = True

    def __init__(self, fmu, Tstart=0, Tend=3600, dt=0.01, write_interval=1):
        self.model = load_fmu(fmu, log_level=4)
        self.Tstart = Tstart
        self.Tend = Tend
        self.dt = dt
        self.write_interval = write_interval

    def initialize(self):
        # Initialize the model. Also sets all the start attributes defined in the
        # XML file.
        self.model.setup_experiment(start_time = self.Tstart)

        # self.read_from_db()
        # self.model.set_real(self.model.get_variable_valueref('input_1'), self.input_1) #Здесь должна быть ссылка на db

        self.model.enter_initialization_mode()
        self.model.exit_initialization_mode()

        eInfo = self.model.get_event_info()
        eInfo.newDiscreteStatesNeeded = True
        #Event iteration
        while eInfo.newDiscreteStatesNeeded == True:
            self.model.enter_event_mode()
            self.model.event_update()
            eInfo = self.model.get_event_info()

        self.model.enter_continuous_time_mode()
        #Get Continuous States
        self.x = self.model.continuous_states
        #Get the Nominal Values
        x_nominal = self.model.nominal_continuous_states
        #Get the Event Indicators
        self.event_ind = self.model.get_event_indicators()

        print('Инициализация модели выполнена')

    def integrate(self):
        dx = self.model.get_derivatives()
        print('Точка -1')

        #Advance
        h = min(self.dt, self.Tend-self.model.time)

        #Set the time
        self.model.time += h

#         #Set the inputs at the current time (if any)
#         #model.set_real,set_integer,set_boolean,set_string (valueref, values)
        # self.read_from_db()
        # self.model.set_real(self.model.get_variable_valueref('input_1'), self.input_1)


        #Set the states at t = time (Perform the step)
        self.x += h*dx
        print('Точка 0')
        self.model.continuous_states = self.x
        print('Точка 1')

        #Get the event indicators at t = time
        event_ind_new = self.model.get_event_indicators()
        print('Точка 2')

        #Inform the model about an accepted step and check for step events
        step_event = self.model.completed_integrator_step()
        print('Точка 3')
        #Check for time and state events
        time_event  = abs(self.model.time-self.Tend) <= 1.e-10
        state_event = True if True in ((event_ind_new>0.0) != (self.event_ind>0.0)) else False
