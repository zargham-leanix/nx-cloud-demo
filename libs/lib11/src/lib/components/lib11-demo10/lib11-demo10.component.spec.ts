import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo10Component } from './lib11-demo10.component';

describe('Lib11Demo10Component', () => {
  let component: Lib11Demo10Component;
  let fixture: ComponentFixture<Lib11Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
