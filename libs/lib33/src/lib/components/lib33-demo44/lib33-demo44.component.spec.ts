import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo44Component } from './lib33-demo44.component';

describe('Lib33Demo44Component', () => {
  let component: Lib33Demo44Component;
  let fixture: ComponentFixture<Lib33Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
