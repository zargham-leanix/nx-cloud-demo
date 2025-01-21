import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo40Component } from './lib23-demo40.component';

describe('Lib23Demo40Component', () => {
  let component: Lib23Demo40Component;
  let fixture: ComponentFixture<Lib23Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
