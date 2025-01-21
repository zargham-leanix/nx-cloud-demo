import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo42Component } from './lib11-demo42.component';

describe('Lib11Demo42Component', () => {
  let component: Lib11Demo42Component;
  let fixture: ComponentFixture<Lib11Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
