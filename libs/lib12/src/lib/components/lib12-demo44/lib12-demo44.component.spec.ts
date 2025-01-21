import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo44Component } from './lib12-demo44.component';

describe('Lib12Demo44Component', () => {
  let component: Lib12Demo44Component;
  let fixture: ComponentFixture<Lib12Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
