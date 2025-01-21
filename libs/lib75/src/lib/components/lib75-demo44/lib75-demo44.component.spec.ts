import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo44Component } from './lib75-demo44.component';

describe('Lib75Demo44Component', () => {
  let component: Lib75Demo44Component;
  let fixture: ComponentFixture<Lib75Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
