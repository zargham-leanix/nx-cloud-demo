import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo44Component } from './lib58-demo44.component';

describe('Lib58Demo44Component', () => {
  let component: Lib58Demo44Component;
  let fixture: ComponentFixture<Lib58Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
