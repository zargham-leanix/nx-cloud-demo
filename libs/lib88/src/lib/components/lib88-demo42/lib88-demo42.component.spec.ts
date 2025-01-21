import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo42Component } from './lib88-demo42.component';

describe('Lib88Demo42Component', () => {
  let component: Lib88Demo42Component;
  let fixture: ComponentFixture<Lib88Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
