import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo2Component } from './lib78-demo2.component';

describe('Lib78Demo2Component', () => {
  let component: Lib78Demo2Component;
  let fixture: ComponentFixture<Lib78Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
