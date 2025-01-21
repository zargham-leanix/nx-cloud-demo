import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo24Component } from './lib22-demo24.component';

describe('Lib22Demo24Component', () => {
  let component: Lib22Demo24Component;
  let fixture: ComponentFixture<Lib22Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
