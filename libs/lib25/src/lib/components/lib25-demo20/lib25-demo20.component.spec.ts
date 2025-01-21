import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo20Component } from './lib25-demo20.component';

describe('Lib25Demo20Component', () => {
  let component: Lib25Demo20Component;
  let fixture: ComponentFixture<Lib25Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
