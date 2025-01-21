import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo44Component } from './lib41-demo44.component';

describe('Lib41Demo44Component', () => {
  let component: Lib41Demo44Component;
  let fixture: ComponentFixture<Lib41Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
