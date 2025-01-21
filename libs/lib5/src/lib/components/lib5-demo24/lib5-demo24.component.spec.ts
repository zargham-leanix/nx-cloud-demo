import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo24Component } from './lib5-demo24.component';

describe('Lib5Demo24Component', () => {
  let component: Lib5Demo24Component;
  let fixture: ComponentFixture<Lib5Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
