import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo12Component } from './lib11-demo12.component';

describe('Lib11Demo12Component', () => {
  let component: Lib11Demo12Component;
  let fixture: ComponentFixture<Lib11Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
