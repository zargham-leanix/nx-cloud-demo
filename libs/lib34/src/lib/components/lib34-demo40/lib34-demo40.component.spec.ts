import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo40Component } from './lib34-demo40.component';

describe('Lib34Demo40Component', () => {
  let component: Lib34Demo40Component;
  let fixture: ComponentFixture<Lib34Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
