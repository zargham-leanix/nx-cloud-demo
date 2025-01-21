import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo15Component } from './lib12-demo15.component';

describe('Lib12Demo15Component', () => {
  let component: Lib12Demo15Component;
  let fixture: ComponentFixture<Lib12Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
