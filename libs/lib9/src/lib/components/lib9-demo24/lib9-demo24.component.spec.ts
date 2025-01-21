import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo24Component } from './lib9-demo24.component';

describe('Lib9Demo24Component', () => {
  let component: Lib9Demo24Component;
  let fixture: ComponentFixture<Lib9Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
