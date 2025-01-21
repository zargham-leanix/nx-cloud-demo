import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo6Component } from './lib88-demo6.component';

describe('Lib88Demo6Component', () => {
  let component: Lib88Demo6Component;
  let fixture: ComponentFixture<Lib88Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
