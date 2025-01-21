import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo24Component } from './lib98-demo24.component';

describe('Lib98Demo24Component', () => {
  let component: Lib98Demo24Component;
  let fixture: ComponentFixture<Lib98Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
