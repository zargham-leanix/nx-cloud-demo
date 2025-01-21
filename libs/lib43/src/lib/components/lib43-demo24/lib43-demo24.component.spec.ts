import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo24Component } from './lib43-demo24.component';

describe('Lib43Demo24Component', () => {
  let component: Lib43Demo24Component;
  let fixture: ComponentFixture<Lib43Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
