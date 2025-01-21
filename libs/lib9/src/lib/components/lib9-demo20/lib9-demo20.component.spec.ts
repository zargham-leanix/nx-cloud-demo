import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo20Component } from './lib9-demo20.component';

describe('Lib9Demo20Component', () => {
  let component: Lib9Demo20Component;
  let fixture: ComponentFixture<Lib9Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
