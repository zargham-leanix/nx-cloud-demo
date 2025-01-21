import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo13Component } from './lib48-demo13.component';

describe('Lib48Demo13Component', () => {
  let component: Lib48Demo13Component;
  let fixture: ComponentFixture<Lib48Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
