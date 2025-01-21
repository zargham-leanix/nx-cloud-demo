import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo24Component } from './lib94-demo24.component';

describe('Lib94Demo24Component', () => {
  let component: Lib94Demo24Component;
  let fixture: ComponentFixture<Lib94Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
