import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo29Component } from './lib12-demo29.component';

describe('Lib12Demo29Component', () => {
  let component: Lib12Demo29Component;
  let fixture: ComponentFixture<Lib12Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
