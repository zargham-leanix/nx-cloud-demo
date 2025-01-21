import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo6Component } from './lib11-demo6.component';

describe('Lib11Demo6Component', () => {
  let component: Lib11Demo6Component;
  let fixture: ComponentFixture<Lib11Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
