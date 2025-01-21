import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo11Component } from './lib12-demo11.component';

describe('Lib12Demo11Component', () => {
  let component: Lib12Demo11Component;
  let fixture: ComponentFixture<Lib12Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
