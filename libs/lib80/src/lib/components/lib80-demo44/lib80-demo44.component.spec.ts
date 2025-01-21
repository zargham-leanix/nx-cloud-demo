import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo44Component } from './lib80-demo44.component';

describe('Lib80Demo44Component', () => {
  let component: Lib80Demo44Component;
  let fixture: ComponentFixture<Lib80Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
