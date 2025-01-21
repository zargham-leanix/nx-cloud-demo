import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo17Component } from './lib88-demo17.component';

describe('Lib88Demo17Component', () => {
  let component: Lib88Demo17Component;
  let fixture: ComponentFixture<Lib88Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
