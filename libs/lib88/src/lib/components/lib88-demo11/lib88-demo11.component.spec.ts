import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo11Component } from './lib88-demo11.component';

describe('Lib88Demo11Component', () => {
  let component: Lib88Demo11Component;
  let fixture: ComponentFixture<Lib88Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
