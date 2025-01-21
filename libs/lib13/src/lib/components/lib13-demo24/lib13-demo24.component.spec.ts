import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo24Component } from './lib13-demo24.component';

describe('Lib13Demo24Component', () => {
  let component: Lib13Demo24Component;
  let fixture: ComponentFixture<Lib13Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
