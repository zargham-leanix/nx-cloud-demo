import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo42Component } from './lib26-demo42.component';

describe('Lib26Demo42Component', () => {
  let component: Lib26Demo42Component;
  let fixture: ComponentFixture<Lib26Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
