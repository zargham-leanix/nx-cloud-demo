import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo43Component } from './lib88-demo43.component';

describe('Lib88Demo43Component', () => {
  let component: Lib88Demo43Component;
  let fixture: ComponentFixture<Lib88Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
