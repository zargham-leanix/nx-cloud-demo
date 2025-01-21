import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo24Component } from './lib36-demo24.component';

describe('Lib36Demo24Component', () => {
  let component: Lib36Demo24Component;
  let fixture: ComponentFixture<Lib36Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
