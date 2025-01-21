import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo34Component } from './lib11-demo34.component';

describe('Lib11Demo34Component', () => {
  let component: Lib11Demo34Component;
  let fixture: ComponentFixture<Lib11Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
