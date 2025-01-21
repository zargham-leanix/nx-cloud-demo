import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo24Component } from './lib34-demo24.component';

describe('Lib34Demo24Component', () => {
  let component: Lib34Demo24Component;
  let fixture: ComponentFixture<Lib34Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
