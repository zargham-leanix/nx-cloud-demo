import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo44Component } from './lib47-demo44.component';

describe('Lib47Demo44Component', () => {
  let component: Lib47Demo44Component;
  let fixture: ComponentFixture<Lib47Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
