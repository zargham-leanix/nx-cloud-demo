import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo24Component } from './lib7-demo24.component';

describe('Lib7Demo24Component', () => {
  let component: Lib7Demo24Component;
  let fixture: ComponentFixture<Lib7Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
