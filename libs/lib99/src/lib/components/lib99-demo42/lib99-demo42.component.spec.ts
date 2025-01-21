import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo42Component } from './lib99-demo42.component';

describe('Lib99Demo42Component', () => {
  let component: Lib99Demo42Component;
  let fixture: ComponentFixture<Lib99Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
