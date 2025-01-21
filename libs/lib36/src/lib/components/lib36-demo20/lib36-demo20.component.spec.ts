import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo20Component } from './lib36-demo20.component';

describe('Lib36Demo20Component', () => {
  let component: Lib36Demo20Component;
  let fixture: ComponentFixture<Lib36Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
