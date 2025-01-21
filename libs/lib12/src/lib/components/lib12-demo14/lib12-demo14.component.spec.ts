import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo14Component } from './lib12-demo14.component';

describe('Lib12Demo14Component', () => {
  let component: Lib12Demo14Component;
  let fixture: ComponentFixture<Lib12Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
