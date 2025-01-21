import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo25Component } from './lib12-demo25.component';

describe('Lib12Demo25Component', () => {
  let component: Lib12Demo25Component;
  let fixture: ComponentFixture<Lib12Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
