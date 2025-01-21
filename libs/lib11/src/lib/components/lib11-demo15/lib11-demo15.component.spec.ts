import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo15Component } from './lib11-demo15.component';

describe('Lib11Demo15Component', () => {
  let component: Lib11Demo15Component;
  let fixture: ComponentFixture<Lib11Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
