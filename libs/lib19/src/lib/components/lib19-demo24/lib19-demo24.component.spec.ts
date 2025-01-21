import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo24Component } from './lib19-demo24.component';

describe('Lib19Demo24Component', () => {
  let component: Lib19Demo24Component;
  let fixture: ComponentFixture<Lib19Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
