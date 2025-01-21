import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo33Component } from './lib5-demo33.component';

describe('Lib5Demo33Component', () => {
  let component: Lib5Demo33Component;
  let fixture: ComponentFixture<Lib5Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
