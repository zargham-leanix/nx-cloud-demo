import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo44Component } from './lib11-demo44.component';

describe('Lib11Demo44Component', () => {
  let component: Lib11Demo44Component;
  let fixture: ComponentFixture<Lib11Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
