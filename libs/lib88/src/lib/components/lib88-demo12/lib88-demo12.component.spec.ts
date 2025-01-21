import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo12Component } from './lib88-demo12.component';

describe('Lib88Demo12Component', () => {
  let component: Lib88Demo12Component;
  let fixture: ComponentFixture<Lib88Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
