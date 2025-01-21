import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo20Component } from './lib99-demo20.component';

describe('Lib99Demo20Component', () => {
  let component: Lib99Demo20Component;
  let fixture: ComponentFixture<Lib99Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
