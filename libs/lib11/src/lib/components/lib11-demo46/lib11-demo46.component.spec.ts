import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo46Component } from './lib11-demo46.component';

describe('Lib11Demo46Component', () => {
  let component: Lib11Demo46Component;
  let fixture: ComponentFixture<Lib11Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
