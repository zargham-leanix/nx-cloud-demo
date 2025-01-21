import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo24Component } from './lib54-demo24.component';

describe('Lib54Demo24Component', () => {
  let component: Lib54Demo24Component;
  let fixture: ComponentFixture<Lib54Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
