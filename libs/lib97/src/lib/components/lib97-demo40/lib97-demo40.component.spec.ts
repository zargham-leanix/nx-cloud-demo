import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo40Component } from './lib97-demo40.component';

describe('Lib97Demo40Component', () => {
  let component: Lib97Demo40Component;
  let fixture: ComponentFixture<Lib97Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
