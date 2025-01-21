import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo20Component } from './lib35-demo20.component';

describe('Lib35Demo20Component', () => {
  let component: Lib35Demo20Component;
  let fixture: ComponentFixture<Lib35Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
