import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo13Component } from './lib78-demo13.component';

describe('Lib78Demo13Component', () => {
  let component: Lib78Demo13Component;
  let fixture: ComponentFixture<Lib78Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
