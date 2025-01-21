import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo31Component } from './lib11-demo31.component';

describe('Lib11Demo31Component', () => {
  let component: Lib11Demo31Component;
  let fixture: ComponentFixture<Lib11Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
