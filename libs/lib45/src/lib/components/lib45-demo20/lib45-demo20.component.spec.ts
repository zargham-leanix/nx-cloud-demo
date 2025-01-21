import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo20Component } from './lib45-demo20.component';

describe('Lib45Demo20Component', () => {
  let component: Lib45Demo20Component;
  let fixture: ComponentFixture<Lib45Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
