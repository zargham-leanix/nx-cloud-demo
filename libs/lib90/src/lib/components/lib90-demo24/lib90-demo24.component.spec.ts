import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo24Component } from './lib90-demo24.component';

describe('Lib90Demo24Component', () => {
  let component: Lib90Demo24Component;
  let fixture: ComponentFixture<Lib90Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
