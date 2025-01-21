import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo8Component } from './lib12-demo8.component';

describe('Lib12Demo8Component', () => {
  let component: Lib12Demo8Component;
  let fixture: ComponentFixture<Lib12Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
