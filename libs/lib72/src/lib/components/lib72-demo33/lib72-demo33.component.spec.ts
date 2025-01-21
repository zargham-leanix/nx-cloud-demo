import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo33Component } from './lib72-demo33.component';

describe('Lib72Demo33Component', () => {
  let component: Lib72Demo33Component;
  let fixture: ComponentFixture<Lib72Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
