import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo20Component } from './lib48-demo20.component';

describe('Lib48Demo20Component', () => {
  let component: Lib48Demo20Component;
  let fixture: ComponentFixture<Lib48Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
