import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo6Component } from './lib12-demo6.component';

describe('Lib12Demo6Component', () => {
  let component: Lib12Demo6Component;
  let fixture: ComponentFixture<Lib12Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
