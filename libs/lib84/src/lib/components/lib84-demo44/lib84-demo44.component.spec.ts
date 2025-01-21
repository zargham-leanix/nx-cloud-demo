import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo44Component } from './lib84-demo44.component';

describe('Lib84Demo44Component', () => {
  let component: Lib84Demo44Component;
  let fixture: ComponentFixture<Lib84Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
