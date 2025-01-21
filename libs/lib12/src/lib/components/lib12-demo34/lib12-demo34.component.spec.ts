import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo34Component } from './lib12-demo34.component';

describe('Lib12Demo34Component', () => {
  let component: Lib12Demo34Component;
  let fixture: ComponentFixture<Lib12Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
